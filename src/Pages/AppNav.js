import {Container, Nav, Navbar} from "react-bootstrap";
import Login from "../components/Login";
import {Link} from "react-router-dom";

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
                    <Nav.Link onClick={props.startNewGame}>Start new game</Nav.Link>
                    <Nav.Link><Link to={"/"}>Leaderboards</Link></Nav.Link>
                     {props.user && <Nav.Link><Link to={"/GameHistory/"}>Game History</Link></Nav.Link>}
                </Nav>
                <Login user={props.user} setUser={props.setUser}/>
            </Container>
        </Navbar>
    )
}

export default AppNav;