import React  from "react";
import { Container } from "react-bootstrap";
import { useNavigate,Link,Outlet } from "react-router-dom";



function About(){
const Navigate = useNavigate();
    return(
        < div className="homediv">
        <h1 className="homehead" >This is about page </h1>
       <Container className="aboutul">
     
        <ul >
        
      <li><Link to='/About/Profile'   className='Link' >profile</Link></li>
      <li><Link to='/About/Account'   className='Link' >Account</Link></li> 
      
   
    </ul>
   </Container>
        
       <Outlet/>
       <button onClick={()=> Navigate('/contact')}>Go to Contact</button>
    </div>)
}

export default About;