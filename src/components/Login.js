import {Button, Form, FormControl} from "react-bootstrap";
import {loginUser, logoutUser} from "../utils/auth";
import {whoAmI} from '../utils/utils'
import {useEffect, useState} from "react";

function Login(props) {

    const [userDetails, setUserDetails] = useState("")

    useEffect(()=>{
        if (props.user){
            whoAmI().then((res)=>{
                setUserDetails(res.data.user)
            })
        }
    },[props.user])

    const logout = async () => {
        await logoutUser()
        props.setUser(null)
    }

    const handleFormSubmit = async (evt) => {
        evt.preventDefault()
        let username = evt.target.elements.username.value
        let password = evt.target.elements.password.value
        loginUser(username, password).then(()=>props.setUser(username))

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
                <span>Welcome {props.user}!</span>
                <Button className={"ms-2"} variant={"outline-success"} onClick={logout}>Logout</Button>
            </>
        )
    }

    return (<> {props.user ? showLogout() : showLogin()} </>)
}

export default Login;