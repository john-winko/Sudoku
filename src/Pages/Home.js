import AppNav from "./AppNav";
import {useEffect, useState} from "react";
import utils from "../utils/utils";

function Home(props) {
    const [user, setUser] = useState(null)

    useEffect(()=>{
        utils.whoAmI().then((data)=>console.log("useEffect",data))
    },[user])


    return (
        <div>
            <AppNav user={user} setUser={setUser}/>
            stuff

        </div>
    )
}

export default Home