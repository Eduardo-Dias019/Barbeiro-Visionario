//IMPORTS
import {Route, Routes, BrowserRouter} from "react-router-dom";
import React from 'react'
import About from "./pages/About/About"
import Signup from "./pages/Signup/Signup";

const routes = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default routes