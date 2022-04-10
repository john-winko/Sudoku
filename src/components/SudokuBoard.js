import SudokuCell from "./SudokuCell";
import '../App.css'
import {useEffect, useState} from "react";

function SudokuBoard(props) {

    const [selectedCell, setSelectedCell] = useState("")

    // TODO need to rename to selection rather than click... can be done either through click or by showing hints
    const cellClick = (data, force = false) => {
        if (selectedCell === data.substring(0, 2)){
            // already selected
            if (props.showCandidates){
                // handle candidate clicks
                props.removeCandidate(data)
            }else{
                // unclick
                setSelectedCell(null)
            }
        }else{
            setSelectedCell(data.substring(0, 2))
        }
    }

    const renderBoard = () => {
        const newBoard = props.board.map((element, index) => {
            return (<SudokuCell key={index} {...element}
                                show={props.showCandidates}
                                cellClick={cellClick}
                                selectedCell={selectedCell === element.cell_id}
                                hint={props.hint}
            />)
        })

        // doing it after the 9th element of a zero based array so start index will be 9
        // accounting for the element we add... increment by 10
        for (let i = 9; i <= 81; i+=10){
            // zero based from 1 based
            newBoard.splice(i,0, <div key={`${i}clear`} className={"clear"}></div> )
        }
        return newBoard
    }

    return (
        <div className={"board"}>
            {props.hint && console.log(props.hint)}
            {renderBoard()}
        </div>
    )
}

export default SudokuBoard;