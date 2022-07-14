import Validator from './components/Validator'
import { useEffect, useState } from 'react'

const App = () => {
  const [login, setLogin] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    valid: false
  })
  const banana = () => {
    console.log(login)
  }
  const handleUsernameChange = (event) => {
    setLogin({ ...login, username: event.target.value })
    console.log(login)
  }

  const handlePasswordChange = async (event) => {
    setLogin({ ...login, password: event.target.value }).then(
      console.log(login)
    )
  }
  const handlePasswordConfirmChange = (event) => {
    setLogin({ ...login, passwordConfirm: event.target.value })
    console.log(login)
  }

  // const checkValidity = () {}
  useEffect(() => {
    console.log(login)
  }, [login, setLogin, handlePasswordChange])
  return (
    <Validator
      handleUsernameChange={handleUsernameChange}
      handlePasswordChange={handlePasswordChange}
      handlePasswordConfirmChange={handlePasswordConfirmChange}
    />
  )
}

export default App
