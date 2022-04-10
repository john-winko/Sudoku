import {useEffect, useState} from "react";
import utils from "../utils/utils";
import {Button, Form, FormControl} from "react-bootstrap";

function Login(props) {

    const logout = () => {
        // TODO send logout to api
        props.setUser(null)
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault()
        let username = evt.target.elements.username.value
        let password = evt.target.elements.password.value
        utils.logIn(username, password, props.setUser)
        // props.setUser(username)
        // console.log("usernam", username)
        // console.log("pass", password)
        // // utils.logIn(username, password, setUser)
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
            {props.user ?  showLogout(): showLogin()}
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