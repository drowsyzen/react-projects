import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Input from "./components/input";
import Output from "./components/output";

function App() {
    const [count, setCount] = useState(0);

    return (
        <UserContextProvider>
            <Input />
            {/* <Output /> */}
        </UserContextProvider>
    );
}

export default App;
