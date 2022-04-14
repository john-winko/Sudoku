import {authRequest} from "./auth";

const whoAmI = async () => {
    return await authRequest.get("/v1/user/whoami/")
        .then((res)=>{
            // check if valid?
            console.log("Who am i", res)
            return res.data.user
    });
    // return apiGet("/v1/user/whoami/")
    //     .then((res) => res.data.user)
}

const startGame = async () => {
    // await apiGet("/v1/puzzle/start_game/")
}

const test = async () => {
    // let config = {
    //   withCredentials: true,
    //   headers: {
    //     'X-CSRFToken': myexports.getCSRFToken()
    //   }
    // }
    // return await axios.post('http://127.0.0.1:8000/v1/user/logout/', null, config)
}

const getHint = async (board) => {
    // let boardString = board.cells.map((element, index) => {
    //     return (element.value)
    // }).join("")
    // return await apiPost(`/v1/puzzle/${board.id}/get_hint/`, {"boardString": boardString, "board": board})
}

const getGameHistory = async () => {
    // return await apiGet(`/v1/user/game_history/`)
}

const getGame = async (boardID) => {
    // return await apiGet(`/v1/puzzle/${boardID}`)
}

const current_game = async () => {
    // return await apiGet(`/v1/puzzle/current_game/`)
}

export {current_game, getHint, getGame, getGameHistory, test, startGame, whoAmI};