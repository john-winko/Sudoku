import data from "./SampleData";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/"
let myexports = {}

// myexports.getData = async (step) => {
//
//     // currently just mocking sample data, will connect this with the backend later
//     return data
// }

myexports.getBoard = async (board) => {
    try{
        let params = { "board": board }
        return await axios.get(BASE_URL, {params})
    }catch (exc){
        return data[0]
    }

}

myexports.getHint = async (board) => {
    try{
        let params = {"board":board}
        return await axios.get(BASE_URL + "hint/", {params})
    }catch (exc){
        console.log("exception get hint", exc)
    }
}

export default myexports;

// TODO error handling for getting board, if malformed can send a template blank board