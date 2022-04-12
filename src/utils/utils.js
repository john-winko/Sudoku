import axios from "axios"

const myexports = {}

myexports.getCSRFToken = () => {
    let csrfToken

    // the browser's cookies for this page are all in one string, separated by semi-colons
    const cookies = document.cookie.split(';')
    for (let cookie of cookies) {
        // individual cookies have their key and value separated by an equal sign
        const crumbs = cookie.split('=')
        if (crumbs[0].trim() === 'csrftoken') {
            csrfToken = crumbs[1]
        }
    }
    return csrfToken
}

const apiGet = async (url, params = null) => {
    axios.defaults.headers.common['X-CSRFToken'] = myexports.getCSRFToken()
    if (params)
        return await axios.get(url, params)
    return await axios.get(url)
}

const apiPost = async (url, params = null) => {
    axios.defaults.headers.common['X-CSRFToken'] = myexports.getCSRFToken()
    if (params)
        return await axios.post(url, params)
    return await axios.post(url)
}

myexports.logOut = async () => await apiPost("/v1/user/logout/")

myexports.whoAmI = () => {
    return apiGet("/v1/user/whoami/")
        .then((res) => res.data.user)
}

myexports.startGame = async () => await apiGet("/v1/puzzle/start_game/")

myexports.test = () => {
    return apiGet("/v1/puzzle/current_game/", {"dummy": "data"})
}

myexports.getHint = async (board) => {
    let boardString = board.cells.map((element, index) => {
        return (element.value)
    }).join("")
    return await apiPost(`/v1/puzzle/${board.id}/get_hint/`, {"boardString": boardString, "board": board})
}

myexports.getGameHistory = async () => {
    return await apiGet(`/v1/user/game_history/`)
}

myexports.getGame = async (boardID) => {
    return await apiGet(`/v1/puzzle/${boardID}`)
}

myexports.current_game = async () => {
    return await apiGet(`/v1/puzzle/current_game/`)
}

export default myexports;