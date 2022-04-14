import {getGameHistory} from "../utils/utils";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function GameHistory(props) {

    const [history, setHistory] = useState([])

    useEffect(() => {
        getGameHistory().then(res => {
            setHistory(res.data.boards)
        })
    }, [])

    const renderHistory = () => {
        return history.map((element) => {
            return (
                <div><Link to={`/game/${element.id}`}>{element.board_string}</Link> {element.hint_used ? "X" : ":)"}
                </div>
            )
        })
    }
    return (
        <div>
            <h1>Game History</h1>
            <hr/>
            {renderHistory()}
        </div>
    )
}

export default GameHistory