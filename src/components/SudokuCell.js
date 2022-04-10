import "./SudokuCell.css"
import classNames from "classnames";

// props:
function SudokuCell(props) {

    const smallLeft = [1,2,4,5,7,8]
    const bigLeft = [3,6]
    const gridCellClass = classNames("gridCell",{
        bLeft: smallLeft.includes(props.column),
        bbLeft: bigLeft.includes(props.column),
        bTop: smallLeft.includes(props.row),
        bbTop: bigLeft.includes(props.row),
        // TODO question: should this be moved up?
        selectedCell: props.show && (props.selectedCell || props.hint.solve_cells.includes(props.cell_id))
    })

    let handleClick = (e)=> {
        e.stopPropagation() // since the candidates are nested
        props.cellClick(e.target.id)
    }

    const renderHints = () => {
        let elements = []
        for (let i = 1; i < 10; i++){
            let show = props.possibilities && props.possibilities.includes(i.toString())
            let gridCandidateClass = classNames("gridCellCandidate",{
                // TODO naked single works but have to check the rest
                hint:props.hint.candidates.includes(props.cell_id) && props.hint.values.includes(i.toString()),
                eliminate:props.hint.solve_cells.includes(props.cell_id) && props.hint.values.includes(i.toString()),
                // hide:!props.show
            })
            elements.push(
                <div onClick={handleClick}
                     className={gridCandidateClass}
                     key={i}
                     data-content={`${i}`}
                     id={`${props.cell_id}-${i}`}>

                    {show ? i : ""}
                </div>
            )
        }
        return elements
    }

    const renderCell = () => {
        if (props.value !== "0") // always show just the solved value regardless of candidates toggle
            return <div className={"gridCellValue"} id={props.cell_id}>{props.value}</div>

        if (!props.show)
            return <div className={"gridCellValue"} id={`${props.cell_id}-val`} > </div>
        else
            return <div className={"gridCellCandidates"}>{renderHints()}</div>
    }

    return (
        <div onClick={handleClick} className={gridCellClass} id={props.cell_id}>
            {renderCell()}
        </div>
    )
}

export default SudokuCell;
////////////////////////////////////
// For handling keypresses after selecting an object
// import React, { useEffect } from "react";
//
// export default ({ name }) => {
//     useEffect(() => {
//         function handleKeyDown(e) {
//             console.log(e.keyCode);
//         }
//
//         document.addEventListener('keydown', handleKeyDown);
//
//         // Don't forget to clean up
//         return function cleanup() {
//             document.removeEventListener('keydown', handleKeyDown);
//         }
//     }, []);
//
//     return <div>Keydown</div>;
// };
//https://stackoverflow.com/questions/55352295/how-to-toggle-classname-dynamically-in-react-js
// TODO have to handle cell clicks base on props.show
// const gridCellValueClass = classNames("gridCellValue", {
//     hide : props.value === "0" && props.show
// })
//
// const gridCellCandidatesClass = classNames("gridCellCandidates",{
//     hide : props.value !== "0" && !props.show
// })