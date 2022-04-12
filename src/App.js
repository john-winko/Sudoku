import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import GameHistory from "./Pages/GameHistory";
import Leaderboard from "./Pages/Leaderboard";
import {useEffect, useState} from "react";
import utils from "./utils/utils";
import defaultBoard from "./api/blankBoard";
import AppNav from "./Pages/AppNav";

function App() {

    const [user, setUser] = useState(null)
    const [board, setBoard] = useState(defaultBoard)

    const startNewGame = () =>
        utils.startGame()
            .then((response) => setBoard(response.data))
            .catch((err) => console.log("error starting game", err))

    useEffect(() => {
        // get game in progress
        // create new game if none exists
        // pull default game if anonymous user
        startNewGame()
    }, [user])

    useEffect(() => {
        // TODO
        // see if we are logged in
        utils.whoAmI().then((res) => {
            console.log("whoami", res)
            setUser(res.data.user)
        })
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <AppNav user={user} setUser={setUser} startNewGame={startNewGame}/>
                <Routes>
                    <Route path={"/"} element={<Home {...{user, setUser, board, setBoard, startNewGame}}/>}/>
                    <Route path={"/game/:boardID"}
                           element={<Home {...{user, setUser, board, setBoard, startNewGame}}/>}/>
                    <Route path={"/GameHistory/"} element={<GameHistory user={user}/>}/>
                    <Route path={"/Leaderboard/"} element={<Leaderboard/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;