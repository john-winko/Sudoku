import {useState} from "react";
import {getHint} from "../utils/utils";
import {Col, Container, Row} from "react-bootstrap";
import Board from "../components/Board";
import HintDetails from "../components/HintDetails";
import BoardMenu from "../components/BoardMenu";

function Home(props) {

    const [showCandidates, setShowCandidates] = useState(false)
    const [hint, setHint] = useState(null)
    const [wrongAnswers, setWrongAnswers] = useState([])

    const getHint = async () => {
        let response = await getHint(props.board)
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