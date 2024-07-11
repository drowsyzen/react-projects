import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

function App() {
    // const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
