import UserContext from "../context/UserContext";
import React, { useContext } from "react";

function Output() {
    const { data } = useContext(UserContext);

    return <div>Output : {data}</div>;
}

export default Output;
