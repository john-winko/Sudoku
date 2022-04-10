import AppNav from "./AppNav";
import {useEffect, useState} from "react";
import utils from "../utils/utils";

function Home(props) {
    const [user, setUser] = useState(null)

    useEffect(()=>{
        utils.whoAmI().then((data)=>console.log("useEffect",data))
    },[user])

    const showBoard = async () => {
        let game = await utils.startGame()
        console.log(game)
    }
    return (
        <div>
            <AppNav user={user} setUser={setUser}/>
            stuff
            <button onClick={showBoard}></button>
        </div>
    )
}

export default Home