import AppNav from "./AppNav";
import {useState} from "react";

function Home(props) {
    const [user, setUser] = useState(null)

    return (
        <div>
            <AppNav user={user} setUser={setUser}/>
            stuff
        </div>
    )
}

export default Home