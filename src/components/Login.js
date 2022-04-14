import {Button, Form, FormControl} from "react-bootstrap";
import {loginUser, logoutUser} from "../utils/auth";
import {whoAmI} from '../utils/utils'

function Login(props) {

    const logout = async () => {
        await logoutUser()
        props.setUser(null)
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault()
        let username = evt.target.elements.username.value
        let password = evt.target.elements.password.value
        loginUser(username, password).then((result)=>{
            // we can get a whoami and set from there
            // props.setUser(username)
            whoAmI().then((user)=>{
                props.setUser(user)
            })
        })

    }

    const showLogin = () => {
        return (
            <Form className="d-flex" onSubmit={handleFormSubmit}>
                <FormControl
                    type="search"
                    placeholder="Username"
                    className="me-2"
                    aria-label="Username"
                    name={"username"}
                />
                <FormControl
                    type="search"
                    placeholder="Password"
                    className="me-2"
                    aria-label="Password"
                    name={"password"}
                />
                <Button variant="outline-success" type={"submit"}>Login</Button>
                <Button variant="outline-success" type={"button"}>Sign up</Button>
            </Form>
        )
    }

    const showLogout = () => {
        return (
            <>
                <span>Welcome {props.user.username}!</span>
                <Button className={"ms-2"} variant={"outline-success"} onClick={logout}>Logout</Button>
            </>
        )
    }

    return (<> {props.user ? showLogout() : showLogin()} </>)
}

export default Login;