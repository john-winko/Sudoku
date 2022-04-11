import AppNav from "./AppNav";
import {useEffect, useState} from "react";
import utils from "../utils/utils";
import defaultBoard from "../api/blankBoard";
import {Col, Container, Row} from "react-bootstrap";
import Board from "../components/Board";
import HintDetails from "../components/HintDetails";
import BoardMenu from "../components/BoardMenu";

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
            <Row className={"m-2"}>
                <Col>
                    <BoardMenu {...{setShowCandidates, getHint, showCandidates}} />
                </Col>
                <Col xs={12} lg={8}>
                    <Container><Board {...{board, showCandidates, setBoard, hint, setHint}}/></Container>
                </Col>
                <Col>
                    <HintDetails hint={hint}/>
                </Col>
            </Row>
        </div>
    )
}

export default Home