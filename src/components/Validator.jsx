import '../styles/Validator.css'
import { useState } from 'react'
const Validator = (props) => {
  let[username,setUsername]=useState('')
  let[password,setPassword]=useState('')
  let[confirmPassword,setConfirmPassword]=useState('')
  let[valid,setValid]=useState('')
  // let passwordMatch="Passwords must match!"
  // let [match,setMatch]=useState('')

  const handleChangeUsername = (event) => {
    event.preventDefault()
    console.log(event.currentTarget.value)
    setUsername(event.currentTarget.value)
  }
  const handleChangePassword = (event) => {
    event.preventDefault()
    console.log(event.currentTarget.value)
    setPassword(event.currentTarget.value)
  }
  const handleChangeConfirmPassword = (event) => {
    event.preventDefault()
    
    setConfirmPassword(event.currentTarget.value)
    
    if(confirmPassword === password){
      setValid('valid')
    }
    else
    setValid('invalid')
    
  }
  
  
  

 
  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Username" 
        onChange={handleChangeUsername}
        id="username" />
        <label htmlFor="username">Username</label>

        <input type="password" placeholder="Password" 
        onChange={handleChangePassword}
        id="password" />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm"
          onChange={handleChangeConfirmPassword}
          value={confirmPassword}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>

        <button type="submit">Sign Up</button>
        <p className={props.valid} >Passwords must match.</p>
      </form>
    </div>
  )
}

export default Validator
