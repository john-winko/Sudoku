import '../App.css';
import {useEffect, useState} from "react";
import data from '../api/getData'
import SudokuBoard from "../components/SudokuBoard";
import SelectBoard from "../components/SelectBoard";
import Menu from "./Menu";

function PuzzleBoard(props) {

    const [board, setBoard] = useState([])
    // const [boardString, setBoardString] = useState("3..2........1.7...7.6.3.5...7...9.8.9...2...4.1.8...5...9.4.3.1...7.2........8..6")
    // const [showCandidates, setShowCandidates] = useState(false)
    const [hint, setHint] = useState(null)

    useEffect(() => {
        setBoard(props.board.cells)
        // setBoardString(props.board.board_string)
    }, [props.board])

    const removeCandidate = (data) => {
        let cellID = data.substring(0,2)
        let newboard = [...board]
        for (let element of newboard){
            if (element.cell_id === cellID){
                let value = data.substring(3,4)
                // toggle
                if (element.possibilities.indexOf(value) > -1){
                    element.possibilities = element.possibilities.filter(e => e !== value)
                }else{
                    element.possibilities.push(value)
                }
                console.log("new", element)
            }
        }
        setBoard(newboard)
    }

    return (
        <div className={"boardContainer"}>
            {/*{console.log("puzzle board data", props.board.cells)}*/}
            <SudokuBoard board={props.board.cells} {...{board, showCandidates, removeCandidate, hint}} />
            {/*<Menu {...{showCandidates, setHint, boardString}} toggleCandidates={()=>setShowCandidates(!showCandidates)} />*/}
        </div>
    );
}

export default PuzzleBoard;
