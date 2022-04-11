import {Container, Nav, Navbar} from "react-bootstrap";
import Login from "../components/Login";
import {Link, useNavigate} from "react-router-dom";

function AppNav(props) {

    const navigate = useNavigate()

    const startNewGame = () =>{
        props.startNewGame()
        navigate("/")
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit' }}>Sudoku Board</Link></Navbar.Brand>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight: '100px'}}
                    navbarScroll
                >
                    <Nav.Link onClick={startNewGame}>Start new game</Nav.Link>
                    <Nav.Link><Link to={"/Leaderboard/"} style={{ color: 'inherit', textDecoration: 'inherit' }}>Leaderboards</Link></Nav.Link>
                     {props.user && <Nav.Link><Link to={"/GameHistory/"} style={{ color: 'inherit', textDecoration: 'inherit' }}>Game History</Link></Nav.Link>}
                </Nav>
                <Login user={props.user} setUser={props.setUser}/>
            </Container>
        </Navbar>
    )
}

export default AppNav;