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
// axios.defaults.headers.common['X-CSRFToken'] = myexports.getCSRFToken()


myexports.logOut = async () => {
    axios.defaults.headers.common['X-CSRFToken'] = myexports.getCSRFToken()
    await axios.post("/logout/")
        // .then((response) => console.log("Logout", response))
}

myexports.whoAmI = async () => {
    axios.defaults.headers.common['X-CSRFToken'] = myexports.getCSRFToken()
    const response = await axios.get("/whoami/")
    // console.log("whoami", response.data)
    return response.data
}

myexports.startGame = async () => {
    axios.defaults.headers.common['X-CSRFToken'] = myexports.getCSRFToken()
    const response = await axios.get("/start_game/")
    return response
}

myexports.test = async () => {
    axios.defaults.headers.common['X-CSRFToken'] = myexports.getCSRFToken()
    const response = await axios.post("/test/")
    return response
}

myexports.getHint = async (board) => {
    let boardString = board.cells.map((element, index)=>{
        return (element.value)
    }).join("")
    console.log(boardString)
    axios.defaults.headers.common['X-CSRFToken'] = myexports.getCSRFToken()
    const response = await axios.post("/get_hint/", {"boardString": boardString})
    return response
}
export default myexports;