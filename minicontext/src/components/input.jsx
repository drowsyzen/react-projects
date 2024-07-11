import UserContext from "../context/UserContext";
import { useContext, useState } from "react";
import React from "react";
import Output from "./output";

function Input() {
    const [inputData, setInputData] = useState("");
    const { setData } = useContext(UserContext);

    const sendData = (inputValue) => {
        setInputData(inputValue);
        setData(inputValue);
        console.log("Input data sent: ", inputValue);
    };

    return (
        <>
            <input
                type="text"
                value={inputData}
                onChange={(e) => sendData(e.target.value)}
            />
            <Output />
        </>
    );
}

export default Input;
