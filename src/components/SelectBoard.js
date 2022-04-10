
function SelectBoard(props) {
    const handleFormSubmit = (evt) => {
        evt.preventDefault()
        console.log(evt)
        const input = evt.target.elements.sudokuString.value
        // TODO add more error handling for bad inputs
        if (input.length === 81){
            props.setBoardString(input)
        }else{
            alert("Invalid sudoku string")
        }
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type={"text"} name={"sudokuString"} />
                <button type={"submit"}>Submit</button>
            </form>
        </div>
    )
}

export default SelectBoard;