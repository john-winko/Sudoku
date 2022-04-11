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

myexports.logOut = async () => await apiPost("/logout/")
myexports.whoAmI = async () => await apiGet("/whoami/")
myexports.startGame = async () => await apiGet("/start_game/")
myexports.test = async () => await apiPost("/test/")

myexports.getHint = async (board) => {
    let boardString = board.cells.map((element, index)=>{
        return (element.value)
    }).join("")
    return await apiPost("/get_hint/", {"boardString": boardString})
}

export default myexports;