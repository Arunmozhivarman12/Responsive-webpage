

import React, { useState } from 'react';
import Container from "react-bootstrap/esm/Container";
import { Button } from 'react-bootstrap';




function Validate(){

  const [fname,setFname] = useState('')
  const [fnameerror,setFnameerror] = useState('')

  const [lname,setLname] = useState('')
  const [lnameerror,setLnameerror] = useState('')

  const [email,setEmail] = useState('')
  const [emailerror,setEmailerror] = useState('')

  const [password,setPassword] = useState('')
  const [passworderror,setPassworderror] = useState('')

  const [confirmpassword,setConfirmpassword] = useState('')
  const [cperror,setCperror] = useState('')

 
  


function handlefnameChange(e){
  
  setFname(e.target.value)

}

function handlelnameChange(e){
  
  setLname(e.target.value)

}

function handleemChange(e){
  
  setEmail(e.target.value)

}

function handlepsChange(e){
  
  setPassword(e.target.value)

}

function handlecpsChange(e){
  
  setConfirmpassword(e.target.value)

}


const handleSubmit = (event) => {
  event.preventDefault();

  let c1 = "false",c2="false",c3="false",c4 = "false",c5 = "false";
  if(!fname == 0){
 setFnameerror("")
 document.getElementById("demo").style.border = "2px solid green";
  c1 = "true"
  } else {
    setFnameerror("firstname is required") ;
    document.getElementById("demo").style.border = "2px solid red";
   
  }

  if(!lname == 0){
    setLnameerror("")
    document.getElementById("demo2").style.border = "2px solid green";
     c2 = "true"
     } else {
       setLnameerror("lastname is required") ;
       document.getElementById("demo2").style.border = "2px solid red";
     }

     let q =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   
      if(email == 0){
        setEmailerror("email is required")
        document.getElementById("demo4").style.border = "2px solid red";
         } else if(!q.test(email)) {
           setEmailerror("email is not valid") ;
           document.getElementById("demo4").style.border = "2px solid red";
         } else{
          setEmailerror("")
          document.getElementById("demo4").style.border = "2px solid green";

          c3 = "true"
         }

         let rule = /^[A-Za-z]\w{7,14}$/;
  
         if (password == "") {
           setPassworderror("password is required") ;
           document.getElementById("demo5").style.border = "2px solid red";
         } else if (!rule.test(password)) {
          
           setPassworderror(  "password should be between 7 and 14 characters");
           document.getElementById("demo5").style.border = "2px solid red";
         } else {
           setPassworderror("")
           document.getElementById("demo5").style.border = "2px solid green";
           c4 = "true"
         }
         
         if (confirmpassword == "") {
          setCperror("confirmpassword is required") ;
          document.getElementById("demo6").style.border = "2px solid red";
        } 
        
        else if (!confirmpassword.match(password)) {
         
          setCperror(  "confirm password does not match with password ");
          document.getElementById("demo6").style.border = "2px solid red";
        } else {
          setCperror("")
          document.getElementById("demo6").style.border = "2px solid green";
          c5 = "true"
        }   
   
    
if((c1 == "true")  && (c2 == "true") && (c3 == "true") && (c4 == "true") && (c5 == "true")  ){
  alert("your response has been submitted");

}

  
 
};
  return(
    <>
  <div className='validate'>

    <form  onSubmit={handleSubmit} >
   <label className='name'>FIRSTNAME:</label><br></br>
    <input placeholder={"Enter your name"} id="demo" onChange ={(e) => {setFname(e.target.value)}} value={fname}></input ><br></br>
    {fnameerror && <label className='er'>{fnameerror}</label>}<br></br>
    
    <label className='name'>LASTNAME:</label><br></br>
    <input placeholder={"Enter your name"} id="demo2" onChange={handlelnameChange} value={lname}></input ><br></br>
    {lnameerror && <label className='er'>{lnameerror}</label>}<br></br>

    <label className='name'>EMAIL:</label><br></br>
    <input placeholder={"Enter your email"} id="demo4" onChange={handleemChange}  value={email}></input ><br></br>
    {emailerror && <label className='er'>{emailerror}</label>}<br></br>

    <label className='name'>PASSWORD:</label><br></br>
    <input placeholder={"Enter your password"} id="demo5" onChange={handlepsChange}  value={password}></input ><br></br>
    {passworderror && <label className='er'>{passworderror}</label>}<br></br>

    <label className='name'>CONFIRMPASSWORD:</label><br></br>
    <input placeholder={"Enter your confirm password"}id="demo6" onChange={handlecpsChange}   value={confirmpassword}></input ><br></br>
    {cperror && <label className='er'>{cperror}</label>}<br></br>
    
    
  <Container className='buttn'>
    <Button type='submit' > submit</Button >
    </Container>
       </form>
 

</div>
</>
  )
}
export default Validate;
  
                