import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Register from "./pages/register";
import SignIn from "./pages/signIn";
import About from "./pages/about"
import Chat from "./pages/home"

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />}></Route>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Chat />} />
            </Routes>
        </Router>
    );
}


export default App;
