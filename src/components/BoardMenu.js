import {Button} from "react-bootstrap";
import utils from "../utils/utils";

function BoardMenu(props) {
    const test = () => {
        utils.test().then((res) => console.log("res", res))
    }
    const loggedInButtons = () => {
        return (
            <>
                <hr/>
                {/*TODO: Logged in functionality*/}
                <Button className={"w-100"}>Generate candidates</Button>
                <hr/>
                <Button className={"w-100"} onClick={props.getHint}>Get Hint</Button>
                {/*TODO saved games/history*/}
                <hr/>
            </>
        )
    }
    return (<div>
        <Button onClick={test}>Test</Button>
        <hr/>
        <Button className={"w-100"} onClick={() => props.setShowCandidates(!props.showCandidates)}>
            {props.showCandidates ? "Hide " : "Show "}
            Candidates</Button>
        {props.user && loggedInButtons()}
    </div>)
}

export default BoardMenu;