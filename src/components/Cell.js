import "./SudokuCell.css"
import classNames from "classnames";

// props:
function Cell(props) {

    const smallLeft = [1, 2, 4, 5, 7, 8]
    const bigLeft = [3, 6]
    const gridCellClass = classNames("gridCell", {
        bLeft: smallLeft.includes(props.column),
        bbLeft: bigLeft.includes(props.column),
        bTop: smallLeft.includes(props.row),
        bbTop: bigLeft.includes(props.row),
    })

    let handleClick = (e) => {
        e.stopPropagation() // since the candidates are nested
        // props.cellClick(e.target.id)
    }

    const renderHints = () => {
        let elements = []
        for (let i = 1; i < 10; i++) {
            let show = props.possibilities && props.possibilities.includes(i.toString())
            let gridCandidateClass = classNames("gridCellCandidate", {            })
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

        if (!props.showCandidates)
            return <div className={"gridCellValue"} id={`${props.cell_id}-val`}></div>
        else
            return <div className={"gridCellCandidates"}>{renderHints()}</div>
    }

    return (
        <div className={gridCellClass} id={props.cell_id}>
            {renderCell()}
        </div>
    )
}

export default Cell;
