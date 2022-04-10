import {useEffect, useState} from "react";
import utils from "../utils/utils";
import {Button, Form, FormControl} from "react-bootstrap";
import axios from "axios";

function Login(props) {

    const logout = () => {
        utils.logOut()
            .then(() => props.setUser(null))

    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault()
        let params = {
            "username": evt.target.elements.username.value,
            "password": evt.target.elements.password.value
        }
        // MUST do this independently to avoid csrf issues with authenticated requests
        axios.post('/login/', params)
            .then((response) => {
                // console.log("login data", response.data)
                props.setUser(response.data.username)
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

    return (
        <>
            {props.user ? showLogout() : showLogin()}
        </>

    )
}

// function Login(props) {
//     const [user, setUser] = useState(null)
//
//     useEffect(() => {
//         utils.whoAmI()
//     }, [user])
//
//     // useRef for inputs?
//     const handleFormSubmit = (evt) => {
//         evt.preventDefault()
//         let username = evt.target.elements.username.value
//         let password = evt.target.elements.password.value
//         utils.logIn(username, password, setUser)
//     }
//
//     return (
//         <div className="App">
//             <form onSubmit={handleFormSubmit}>
//                 {user && <p>Current logged in user: {user}</p>}
//                 <label forName="">Username</label>
//                 <input name='username' type={"text"}/>
//                 <label forName="">Password</label>
//                 <input name='password' type={"text"}/>
//                 <button type='submit' name='submit' value={"login"}>Login</button>
//             </form>
//         </div>
//     );
// }

export default Login;