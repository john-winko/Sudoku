import {Container, Nav, Navbar} from "react-bootstrap";
import Login from "../components/Login";

function AppNav(props) {

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Sudoku Board</Navbar.Brand>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight: '100px'}}
                    navbarScroll
                >
                    {/*TODO: implement*/}
                    <Nav.Link href="#action1">Start new game</Nav.Link>
                    <Nav.Link href="#action2">Leaderboards</Nav.Link>
                    {props.user && <Nav.Link href="#action3">Game History</Nav.Link>}
                </Nav>
                <Login user={props.user} setUser={props.setUser}/>
            </Container>
        </Navbar>
    )
}

export default AppNav;