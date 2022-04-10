import '../App.css';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import data from '../api/getData'
import SudokuBoard from "../components/SudokuBoard";
import SelectBoard from "../components/SelectBoard";
import Menu from "../components/Menu";

function PuzzleBoard() {

    const [board, setBoard] = useState([])
    const [boardString, setBoardString] = useState("3..2........1.7...7.6.3.5...7...9.8.9...2...4.1.8...5...9.4.3.1...7.2........8..6")
    const [showCandidates, setShowCandidates] = useState(false)
    const [hint, setHint] = useState(null)

    useEffect(() => {
        const loadBoard = async () => {
            const boardData = await data.getBoard(boardString)
            setBoard(boardData.data.cells)
        }
        loadBoard().then() // added .then cause linter was complaining about unfulfilled promise
    }, [boardString])

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
        <div className="App">
            <h1>Sudoku App</h1>
            <SelectBoard setBoardString={setBoardString} />
            <hr/>
            <div className={"boardContainer"}>
                <SudokuBoard {...{board, showCandidates, removeCandidate, hint}} />
                <Menu {...{showCandidates, setHint, boardString}} toggleCandidates={()=>setShowCandidates(!showCandidates)} />
            </div>

        </div>
    );
    // return (
    //     <Router>
    //         <Routes>
    //             <Route path="/" element={<PuzzleBoard/>}></Route>
    //         </Routes>
    //
    //     </Router>
    // );
}

export default PuzzleBoard;
