import {Container, Nav, Navbar} from "react-bootstrap";
import Login from "../components/Login";
import {Link, useNavigate} from "react-router-dom";

function AppNav(props) {

    const linkStyle = { color: 'inherit', textDecoration: 'inherit' }
    const navigate = useNavigate()

    const startNewGame = () =>{
        props.startNewGame()
        navigate("/")
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Nav.Link to={"/"} style={linkStyle}>Sudoku Board</Nav.Link>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight: '100px'}}
                    navbarScroll
                >
                    <Nav.Link onClick={startNewGame}>Start new game</Nav.Link>
                    <Nav.Link to={"/Leaderboard/"} style={linkStyle}>Leaderboards</Nav.Link>
                     {props.user && <Nav.Link to={"/GameHistory/"} style={linkStyle}>Game History</Nav.Link>}
                </Nav>
                <Login user={props.user} setUser={props.setUser}/>
            </Container>
        </Navbar>
    )
}

export default AppNav;