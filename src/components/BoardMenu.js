import {Button} from "react-bootstrap";

function BoardMenu(props) {
    return (<div>
        <hr/>
        <Button className={"w-100"} onClick={() => props.setShowCandidates(!props.showCandidates)}>
            {props.showCandidates ? "Hide " : "Show "}
            Candidates</Button>
        <hr/>
        {/*TODO: Logged in functionality*/}
        <Button className={"w-100"}>Generate candidates</Button>
        <hr/>
        <Button className={"w-100"} onClick={props.getHint}>Get Hint</Button>
        {/*TODO saved games/history*/}
    </div>)
}

export default BoardMenu;