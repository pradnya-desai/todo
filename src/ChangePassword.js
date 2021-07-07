import TodoServices from "./TodoServices"
import react,{useEffect,useState} from 'react'

function ChangePassword(props){
const changePasswordObj={
email:props.match.params.email,
password:''
}

const [changePassword,setPassword]=useState(changePasswordObj)
const changePasswordHandle=(event)=>{
    setPassword({...changePassword,[event.target.name]:event.target.value})
}

const updatePassword=(event)=>{
    const email=props.match.params.email
    event.preventDefault();
    let email_id={
        password:changePassword.password
    }
    console.log('email_id=>'+JSON.stringify(email_id));
    TodoServices.setNewPassword(email_id,email).then(res=>
        {
            alert("Your Password Has Been Updated")
            props.history.push("/")
        })


} 
    return(
<div>

<div class="container">
<label for="tname"><b>Change Your Password</b></label>
    <input type="text" placeholder="Enter your email" name="email" value={changePassword.email} onChange={changePasswordHandle} required/>

    <input type="text" placeholder="Enter new password" name="newpassword" value={changePassword.password} onChange={changePasswordHandle} required/>
    <button type="button"  style={{fontSize:"15px", backgroundColor:"red"}}>Change Password</button>
</div>
    </div>
    )
}
export default ChangePassword