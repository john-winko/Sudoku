import '../App.css'
import getData from "../api/getData";

function Menu(props) {
    const getHint = async () => {
        let hint = await getData.getHint(props.boardString)
        props.setHint(hint.data)
    }
    return (
        <div>
            <button onClick={()=>props.toggleCandidates()}>{props.showCandidates ? "Hide" : "Show"} candidates</button>
            <div className={"clear"}/>
            <button>Reset Candidates</button>
            <div className={"clear"}/>
            <button>Next step</button>
            <div className={"clear"}/>
            <button onClick={getHint}>Show Hint</button>
            <div className={"clear"}/>
            <button>Show solution</button>
            <div className={"clear"}/>
        </div>
    )
}

export default Menu