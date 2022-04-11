import AppNav from "./AppNav";
import {useEffect, useState} from "react";
import utils from "../utils/utils";
import defaultBoard from "../api/blankBoard";
import {Button, Col, Container, Row} from "react-bootstrap";
import PuzzleBoard from "./PuzzleBoard";

function Home(props) {
    const [user, setUser] = useState(null)
    const [board, setBoard] = useState(defaultBoard)
    const [showCandidates, setShowCandidates] = useState(false)

    useEffect(() => {
        // utils.whoAmI().then((data)=>console.log("useEffect",data))
        console.log("user", user)
        if (user) {
            utils.startGame().then((response) => {
                console.log("Home use effect:", response)
                setBoard(response.data)
            })
        }
    }, [user])


    return (
        <div>
            <AppNav user={user} setUser={setUser}/>
            <Row>
                <Col>
                    <Button onClick={()=>setShowCandidates(!showCandidates)}>
                        {showCandidates ? "Show" : "Hide"}
                        Candidates</Button>
                </Col>
                <Col xs={12} md={8}>
                    <Container><PuzzleBoard {...{board, showCandidates}}/></Container>
                </Col>
                <Col>Solution hints</Col>
            </Row>
        </div>
    )
}

export default Home