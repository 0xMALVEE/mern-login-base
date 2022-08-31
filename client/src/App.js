import "./styles/global.css";

import {Routes, Route} from "react-router-dom"

import Nav from "./component/nav"
import Login from "./component/login"

function App() {
    return (
        <div className="App">
             <Nav/>
            <Routes>
                {/* <Route path="*" element={<Nav/>} /> */}
               
                <Route path="/login" element={ <Login/>} />
            </Routes>
        </div>
    );
}

export default App;

