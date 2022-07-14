import '../styles/Validator.css'
import { useState } from 'react'

const Validator = (props) => {


return (
    <div className="form">
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Username" id="username" onChange={props.handleUsernameChange}/>
        <label htmlFor="username">Username</label>

        <input type="password" placeholder="Password" id="password" onChange={props.handlePasswordChange}/>
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm"
        />
        <label htmlFor="passwordConfirm" onChange={props.handlePasswordConfirmChange}>Confirm password</label>

        <button type="submit">Sign Up</button>
        <p>Passwords must match.</p>
      </form>
    </div>
  )
}

export default Validator
