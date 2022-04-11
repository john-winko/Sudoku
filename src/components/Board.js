import '../App.css'
import {useEffect, useState} from "react";
import Cell from "./Cell";

// props: board, showCandidates
function Board(props) {

    const [selectedCell, setSelectedCell] = useState(null)

    function handleKeyDown(e) {
        if (!selectedCell) return

        let newval = '0'
        if ([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(parseInt(e.key))) {
            newval = e.key
        }
        let newboard = {...props.board}
        for (let element of newboard.cells) {
            if (element.cell_id === selectedCell) {
                element.value = newval
                if (props.wrongAnswers.includes(element.cell_id))
                    props.setWrongAnswers(props.wrongAnswers.filter(e => e !== element.cell_id))
                break
            }
        }
        props.setBoard(newboard)
        // remove hint when value entered
        props.setHint(null)
    }

    // only allow edits to solved value via keyboard
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [selectedCell])

    // TODO need to rename to selection rather than click... can be done either through click or by showing hints
    const cellClick = (data, force = false) => {
        let cellID = data.substring(0, 2)
        if (selectedCell === cellID) {
            // already selected
            if (props.showCandidates) {
                // handle candidate clicks
                let newboard = {...props.board}
                // TODO: filter/find more elegant way of getting specific cell
                for (let element of newboard.cells) {
                    if (element.cell_id === cellID) {
                        let value = data.substring(3, 4)
                        // toggle
                        if (element.possibilities.indexOf(value) > -1) {
                            element.possibilities = element.possibilities.filter(e => e !== value)
                        } else {
                            element.possibilities.push(value)
                        }
                        break
                    }
                }
                props.setBoard(newboard)
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
                          hint={props.hint}
                          wrongAnswer={props.wrongAnswers.includes(element.cell_id)}

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