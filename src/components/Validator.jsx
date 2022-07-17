import '../styles/Validator.css'
import { useState } from 'react'
const Validator = (props) => {
  let[username,setUsername]=useState('')
  let[password,setPassword]=useState('')
  let[confirmPassword,setConfirmPassword]=useState('')
  let[valid,setValid]=useState('')
  
const submit=(e)=>{
  e.preventDefault()
  if (password === confirmPassword && password.length>7){
    setValid(true)
  }
}

  
  
  

  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form onSubmit={submit}>
        <input type="text" placeholder="Username"
        id="username" onChange={(e)=> setUsername(e.target.value)} />
        <label htmlFor="username">Username</label>

        <input type="password" placeholder="Password" id="password" onChange={(e)=> setPassword(e.target.value)}/> 
        
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm"
          onChange={(e)=> setConfirmPassword(e.target.value)}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>

        <button type="submit">Sign Up</button>
        {valid ? <p className='valid'>Passwords match.</p>:<p className='invalid'> Passwords must match.</p>}
        <button class="cancel">Cancel</button>
      </form>
    </div>
  )
}

export default Validator