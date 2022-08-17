//IMPORTS
import About from "./pages/About/About";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
