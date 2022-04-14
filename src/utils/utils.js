import {authRequest} from "./auth";

const whoAmI = async () => {
    return await authRequest.get("/v1/user/whoami/")
}

const startGame = async () => {
    return await authRequest.get("/v1/puzzle/start_game/")
}

const test = async (data = null) => {
    return await authRequest.post("/v1/puzzle/test/", data)
}

const getHint = async (board) => {
    let boardString = board.cells.map((element, index) => {
        return (element.value)
    }).join("")
    return await authRequest.post(`/v1/puzzle/${board.id}/get_hint/`, {"boardString": boardString, "board": board})
}

const getGameHistory = async () => {
    return await authRequest.get(`/v1/user/game_history/`)
}

const getGame = async (boardID) => {
    return await authRequest.get(`/v1/puzzle/${boardID}`)
}

const current_game = async () => {
    return await authRequest.get(`/v1/puzzle/current_game/`)
}

export {current_game, getHint, getGame, getGameHistory, test, startGame, whoAmI};