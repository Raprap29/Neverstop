import React from "react";
import Navbar from './NavbarWebsite/Navbar/Navbar'
import NeverStopHome from "./Components/Home/home";
import Login from "./Form/Login/Login";
import Register from "./Form/Register/Register";
import Error from "./Error/Error";
import {HashRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
        <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<NeverStopHome />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="*" element={<Error />}/>
            </Routes>
          </Router>
    </React.Fragment>
  );
}

export default App;
