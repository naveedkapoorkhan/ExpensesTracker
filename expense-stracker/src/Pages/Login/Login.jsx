import { useState } from 'react'
import {USER_API_URL} from "../../Api.js"
const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
 
  const handleSignUpForm=(e)=>{
    e.preventDefault();
     const user={email:email,password:password}
 
     fetch(`${USER_API_URL}/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",

      },
      body:JSON.stringify(user)
     })
     .then(res=>res.json())
     .then(data=>{
      alert(data.message)
     
     })
     .catch(err=>console.log(err))

  }
  return (
    <div>

    <form onSubmit={handleSignUpForm}>
      <label>User Name</label>
      <input type="email" name="" id="" placeholder='enter your email' onChange={(e)=>{setEmail(e.target.value)}} />
       <label>Password</label>
      <input type="password" name="" id="" placeholder='enter your password' onChange={(e)=>{setPassword(e.target.value)}} />
      <button type="submit">Login</button>

    </form>
    </div>
  )
}

export default Login