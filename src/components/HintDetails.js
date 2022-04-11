function HintDetails(props) {
    const renderHint = () => {
        return (
            <div>
                <h4>Step Hint:</h4>
                <hr/>
                <p>Solve type: {props.hint.solveType}</p>
                <p>vale {props.hint.values.join(", ")} can be removed from candidate
                    cells {props.hint.candidates.join(", ")}</p>
                <p>possibilities: {props.hint.possibilities}</p>
            </div>
        )
    }

    const renderWrongAnswers = () => {
        return (
            <div>Invalid values in cells {props.wrongAnswers.join(", ")}</div>
        )
    }

    return (
        <>
            {props.hint && renderHint()}
            {props.wrongAnswers.length !== 0 && renderWrongAnswers()}
        </>
    )
}

export default HintDetails;