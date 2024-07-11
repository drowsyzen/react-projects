import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/hi">Hi</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hi" element={<h1>Hi Page</h1>} />
                <Route path="/contact/:id" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
