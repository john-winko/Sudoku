import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import utils from "../utils/utils";
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
                    {/*TODO: leaderboards*/}
                    {/*TODO: If logged in, link for history/progress*/}
                    {/*<Nav.Link href="#action1">Home</Nav.Link>*/}
                    {/*<Nav.Link href="#action2">Link</Nav.Link>*/}
                    {/*<Nav.Link href="#" disabled>Link</Nav.Link>*/}
                </Nav>
                <Login user={props.user} setUser={props.setUser}/>
            </Container>
        </Navbar>
    )
}

export default AppNav;