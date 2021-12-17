import React, { useState } from 'react'
import Theme from '../../Theme'
import { useRouter } from 'next/router'
import { Container, Title, Form, Box, Text, Input, Buttons, Login, Register } from './LoginPage.style'

const LoginPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    })
    const userInfo = await res.json()
    if (res.status === 200 && userInfo) {
      // localStorage.setItem('userInfo', JSON.stringify(userInfo))
      document.cookie = `userInfo=${JSON.stringify(userInfo)}`
      router.push('/')
    } else {
      setErrorMessage(userInfo.message)
    }
    // console.log(res.status)
  }
  return (
    <Theme>
      <Container>
        <Title>ΣΥΝΔΕΣΗ</Title>
        {errorMessage.length > 0 ? <h3>{errorMessage}</h3> : null}
        <Form>
          <Box>
            <Text>Email</Text>
            <Input
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              type="email"
            ></Input>
          </Box>
          <Box>
            <Text>Κωδικός</Text>
            <Input
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              type="password"
            ></Input>
          </Box>
          <Buttons>
            <Login onClick={handleLogin}>Σύνδεση</Login>
            <Register>Εγγραφή</Register>
          </Buttons>
        </Form>
      </Container>
    </Theme>
  )
}

export default LoginPage
