import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import GameHistory from "./Pages/GameHistory";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/GameHistory/"} element={<GameHistory />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;