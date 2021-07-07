import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import TodoServices from './TodoServices';

function Login(props){
const loginObj={
  email:'',
  password:''
}
 const[login,setLogin]=useState(loginObj);

 const handleChange=(event)=>{
setLogin({...login,[event.target.name]:event.target.value})
 }

 const handleSubmit=(e)=>{
e.preventDefault();
var x=document.getElementById("email").value;
        var y=document.getElementById("password").value;
        if(x=="" || y==""){
            alert("Please enter the details")
            props.history.push('/login')
        }
        
        else
    
TodoServices.checkLogin(login).then(res=>{
if(res.status==200){
  props.history.push("/ViewTask")
}
})
 }

    return(
<div>


<form onSubmit={handleSubmit} style={{backgroundColor:"#dcdcdc"}}>
  <div class="imgcontainer">
    <i class="fas fa-user-circle fa-6x"></i>
  </div>

  <div class="container" style={{height:"450px"}}>
    <label for="uname"><b>Email Id</b></label>
    <input type="text" placeholder="Enter Email Id" id="email" name="email" value={login.email} onChange={handleChange}/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" id="password" name="password" value={login.password} onChange={handleChange} />
        
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" name="remember"/> Remember me
      </label>
      </div>

  <div class="container" >
    <div class="links">
     <button type="button" class="cancelbtn"><Link style={{textDecoration:"none",color:"white"}} to="/ChangePassword">Forgot Password?</Link></button>
    <span class="psw">Sign <Link to="/Register">Up?</Link></span>
    </div>
     </div>
</form>
    </div>

    )
}
export default Login