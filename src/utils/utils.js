import axios from "axios"

const myexports = {}
const baseUrl = "http://127.0.0.1:8000"

let instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true
})

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
    instance.defaults.headers.common['X-CSRFToken'] = myexports.getCSRFToken()
    return await instance.get(url, params)
}

const apiPost = async (url, params = null) => {
    // axios.defaults.withCredentials = true
    // axios.defaults.headers.common['X-CSRFToken'] = myexports.getCSRFToken()
    // return await axios.post(baseUrl+url,params)
    instance.defaults.headers.common['X-CSRFToken'] = myexports.getCSRFToken()
    return await instance.post(url, params)
}

myexports.logIn = async (params) => await apiPost('/v1/user/login/', params)

myexports.logOut = async () => await apiPost("/v1/user/logout/")

myexports.whoAmI = () => {
    return apiGet("/v1/user/whoami/")
        .then((res) => res.data.user)
}

myexports.startGame = async () => await apiGet("/v1/puzzle/start_game/")

myexports.test = async () => {
    let config = {
      withCredentials: true,
      headers: {
        'X-CSRFToken': myexports.getCSRFToken()
      }
    }
    return await axios.post('http://127.0.0.1:8000/v1/user/logout/', null, config)
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