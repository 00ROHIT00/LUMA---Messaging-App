import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Register from "./pages/register";

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register?" element={<Register />}></Route>
            </Routes>
        </Router>
    );
}


export default App;
