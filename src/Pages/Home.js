import AppNav from "./AppNav";
import {useEffect, useState} from "react";
import utils from "../utils/utils";
import {Col, Container, Row} from "react-bootstrap";
import PuzzleBoard from "./PuzzleBoard";

function Home(props) {
    const [user, setUser] = useState(null)
    const [board, setBoard] = useState([])

    useEffect(()=>{
        // utils.whoAmI().then((data)=>console.log("useEffect",data))
        utils.startGame().then((response)=>{
            // console.log("Home use effect:",response)
            setBoard(response.data)
        })
    },[user])


    return (
        <div>
            <AppNav user={user} setUser={setUser}/>
            <Row>
                <Col>Left side</Col>
                <Col xs={8}>
                    <Container><PuzzleBoard board={board} /></Container>
                </Col>
                <Col>Right side</Col>
            </Row>
        </div>
    )
}

export default Home