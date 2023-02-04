import React  from "react";
import { useNavigate, } from "react-router-dom";

function Contact(){
const Navigate = useNavigate();

    return(
        <div className="homediv">
        <h1 className="homehead">This is contact page</h1>
        <button onClick={()=> Navigate('/')}>Go to Home</button>
    </div>)
}

export default Contact;