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

const apiGet = (url, params=null) =>{
    axios.defaults.headers.common['X-CSRFToken'] = myexports.getCSRFToken()
        if (params)
        return axios.get(url, params)
    return axios.get(url)
}

const apiPost =  (url, params=null)=>{
    axios.defaults.headers.common['X-CSRFToken'] = myexports.getCSRFToken()
    if (params)
        return axios.post(url, params)
    return axios.post(url)
}

myexports.logOut = async () => await apiPost("/v1/user/logout/")
myexports.whoAmI = async () => await apiGet("/v1/user/whoami/")
myexports.startGame = async () => await apiGet("/v1/puzzle/start_game/")
myexports.test = async () =>{
    return await apiPost("/v1/puzzle/test/", {"dummy":"data"})
}

myexports.getHint = async (board) => {
    let boardString = board.cells.map((element, index)=>{
        return (element.value)
    }).join("")
    return await apiPost(`/v1/puzzle/${board.id}/get_hint/`, {"boardString": boardString, "board":board})
}

myexports.getGameHistory = async () => {
    return await apiGet(`/v1/user/game_history/`)
}

myexports.getGame = async (boardID) =>{
    return await apiGet(`/v1/puzzle/${boardID}`)
}

export default myexports;