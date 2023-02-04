import React from "react";
import { useNavigate } from "react-router-dom";

function Home(){
    const Navigate = useNavigate();
   
    return(
        <div className="homediv">
       <h1 className="homehead">This is home page</h1>
       <button onClick={()=> Navigate('/about')}>Go to About</button>
       </div>
    )
}

export default Home;