import "./styles/global.css";
import React, {useEffect} from "react"
import {Routes, Route} from "react-router-dom"

import Nav from "./component/nav"
import Login from "./component/login"
import Signup from "./component/signup"

import {useDispatch} from "react-redux"
import {loadUser} from "./actions/auth"

function App() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadUser())
    },[])


    return (
        <div className="App">
             <Nav/>
            <Routes>
                {/* <Route path="*" element={<Nav/>} /> */}
               
                <Route path="/account/login" element={ <Login/>} />
                <Route path="/account/signup" element={ <Signup/>} />
            </Routes>
        </div>
    );
}

export default App;

