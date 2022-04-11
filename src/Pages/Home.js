import AppNav from "./AppNav";
import {useEffect, useState} from "react";
import utils from "../utils/utils";
import defaultBoard from "../api/blankBoard";
import {Col, Container, Row} from "react-bootstrap";
import Board from "../components/Board";
import HintDetails from "../components/HintDetails";
import BoardMenu from "../components/BoardMenu";

function Home(props) {
    // const [user, setUser] = useState(null)
    // const [board, setBoard] = useState(defaultBoard)
    const [showCandidates, setShowCandidates] = useState(false)
    const [hint, setHint] = useState(null)
    const [wrongAnswers, setWrongAnswers] = useState([])

    // const startNewGame = () => {
    //     utils.startGame().then((response) => {
    //         console.log("Home use effect:", response)
    //         setBoard(response.data)
    //     })
    // }
    //
    // useEffect(() => {
    //     startNewGame()
    // }, [propsuser])

    const getHint = async () => {
        let response = await utils.getHint(props.board)
        // console.log(response)
        if (response.data.hint) {
            setShowCandidates(true)
            props.setBoard(response.data.newBoard)
            setHint(response.data.hint)
        } else if (response.data.wrongAnswers) {
            // TODO add logic for hint response for wrong answers
            console.log("wrong answer", response.data.wrongAnswers)
            setWrongAnswers(response.data.wrongAnswers)
        }
    }

    return (
        <div>
            <Row className={"m-2"}>
                <Col>
                    <BoardMenu {...{setShowCandidates, getHint, showCandidates}} user={props.user} />
                </Col>
                <Col xs={12} lg={8}>
                    <Container><Board board={props.board} setBoard={props.setBoard} {...{
                        showCandidates,
                        hint,
                        setHint,
                        wrongAnswers,
                        setWrongAnswers
                    }}/></Container>
                </Col>
                <Col>
                    <HintDetails hint={hint} wrongAnswers={wrongAnswers}/>
                </Col>
            </Row>
        </div>
    )
}

export default Home