//IMPORTS
import About from "./pages/About/About";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";
<<<<<<< HEAD
import Class from "./pages/Class/Class"
=======
>>>>>>> 2d0970dd9de444238f80b2076292e4636bdfd5ef
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
<<<<<<< HEAD
        <Route path="/Home" element={<Home />} />
        <Route path="/Class" element={<Class />} />
=======
        <Route path="/home" element={<Home />} />
>>>>>>> 2d0970dd9de444238f80b2076292e4636bdfd5ef
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
