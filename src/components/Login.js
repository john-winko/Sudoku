import {useEffect, useState} from "react";
import utils from "../utils/utils";

function Login(props) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        utils.whoAmI()
    }, [user])

    // useRef for inputs?
    const handleFormSubmit = (evt) => {
        evt.preventDefault()
        let username = evt.target.elements.username.value
        let password = evt.target.elements.password.value
        utils.logIn(username, password, setUser)
    }

    return (
        <div className="App">
            <form onSubmit={handleFormSubmit}>
                {user && <p>Current logged in user: {user}</p>}
                <label forName="">Username</label>
                <input name='username' type={"text"}/>
                <label forName="">Password</label>
                <input name='password' type={"text"}/>
                <button type='submit' name='submit' value={"login"}>Login</button>
            </form>
        </div>
    );
}