import AppNav from "./AppNav";
import {useEffect, useState} from "react";
import utils from "../utils/utils";
import defaultBoard from "../api/blankBoard";
import {Button, Col, Container, Row} from "react-bootstrap";
import Board from "../components/Board";

function Home(props) {
    const [user, setUser] = useState(null)
    const [board, setBoard] = useState(defaultBoard)
    const [showCandidates, setShowCandidates] = useState(false)
    const [hint, setHint] = useState(null)

    useEffect(() => {
        console.log("user", user)
        if (user) {
            utils.startGame().then((response) => {
                console.log("Home use effect:", response)
                setBoard(response.data)
            })
        }
    }, [user])

    const getHint = async () => {
        let response = await utils.getHint(board)
        setShowCandidates(true)
        setHint(response.data)
    }

    return (
        <div>
            <AppNav user={user} setUser={setUser}/>
            <Row className={"mt-2 mx-2"}>
                <Col>
                    <hr/>
                    <Button className={"w-100"} onClick={()=>setShowCandidates(!showCandidates)}>
                        {showCandidates ? "Hide " : "Show "}
                        Candidates</Button>
                    <hr/>
                    {/*TODO: Logged in functionality*/}
                    <Button className={"w-100"}>Generate candidates</Button>
                    <hr/>
                    <Button className={"w-100"} onClick={getHint}>Get Hint</Button>
                </Col>
                <Col xs={12} lg={8}>
                    <Container><Board {...{board, showCandidates, setBoard, hint, setHint}}/></Container>
                </Col>
                <Col>Solution hints</Col>
            </Row>
        </div>
    )
}

export default Home