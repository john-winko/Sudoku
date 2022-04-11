import SudokuCell from "./SudokuCell";
import '../App.css'
import {useEffect, useState} from "react";
import Cell from "./Cell";

// props: board, showCandidates
function Board(props) {

    const [selectedCell, setSelectedCell] = useState("")

    // TODO need to rename to selection rather than click... can be done either through click or by showing hints
    const cellClick = (data, force = false) => {
        let cellID = data.substring(0, 2)
        if (selectedCell === cellID) {
            // already selected
            if (props.showCandidates) {
                // handle candidate clicks
                // props.removeCandidate(data)
            } else {
                // unclick
                setSelectedCell(null)
            }
        } else {
            setSelectedCell(cellID)
        }
    }

    const renderBoard = () => {
        const newBoard = props.board.cells.map((element, index) => {
            return (<Cell key={index}
                          {...element}
                          showCandidates={props.showCandidates}
                          cellClick={cellClick}
                          selectedCell={selectedCell === element.cell_id}

            />)
        })

        // doing it after the 9th element of a zero based array so start index will be 9
        // accounting for the element we add... increment by 10
        for (let i = 9; i <= 81; i += 10) {
            // zero based from 1 based
            newBoard.splice(i, 0, <div key={`${i}clear`} className={"clear"}></div>)
        }
        return newBoard
    }

    return (
        <div className={"boardContainer"}>
            <div className={"board"}>
                {props.board && renderBoard()}
            </div>
        </div>

    )
}

export default Board;