import { useState } from "react"
import TodoServices from "./TodoServices"

function Register(props) {
  const registerObj = {
    name: '',
    email: '',
    password: ''
  }
  const [register, setRegister] = useState(registerObj)

   const handleChange = (event) => {
    setRegister({ ...register, [event.target.name]: event.target.value })
  }
const handleSubmit=(e)=>{
 e.preventDefault();
  TodoServices.addUser(register).then(res=>{
    if(res.status==200){
        alert("User Added")
        props.history.push('/Login')
    }
 
})

}
  return (
    <form onSubmit={handleSubmit} style={{ border: "1px solid #ccc", backgroundColor: "#dcdcdc" }}>
      <div class="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label for="psw-repeat"><b>Name</b></label>
        <input type="text" placeholder="name" value={register.name} name="name" onChange={handleChange} required />

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" value={register.email} onChange={handleChange} name="email" required />

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" value={register.password} onChange={handleChange} name="password" required />


        <label>
          <input type="checkbox" name="remember" style={{ marginBottom: "15px" }} /> Remember me
        </label>

        <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>

        <div class="clearfix">
          <button type="submit" class="signupbtn" style={{ backgroundColor: "red" }}>Sign Up</button>
        </div>
      </div>
    </form>
  )
}
export default Register