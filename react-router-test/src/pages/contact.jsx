import React from "react";
import { useParams } from "react-router-dom";
function Contact() {
    const { id } = useParams();
    return (
        <div>
            <h1>{id} : Contact</h1>
        </div>
    );
}

export default Contact;
