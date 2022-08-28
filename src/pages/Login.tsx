import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router-dom";

const StyledBox = styled(Box)`
width: 100%;
height: 100vh;
`
const Illustration = styled.div`
width: 100%;
height: 600px;
background-image: url('../images/frame1.png');
background-size: 100% 100%;
@media screen and (max-width: 760px) {
  height: 50vh;
}
`
const LogoContainer = styled.div`

`
const FormContainer = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 100%;
justify-content: center;
`
const Form = styled.form`
height: 60%;
margin-top: -45px;
`
const FormHeader = styled.h3`
text-align: start;
margin: 0 0 40px 22px;
`
const StyledTextField = styled(TextField)`
width: 92%;
margin: 10px;
`
const InnerFormContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 0  19px 15px;
`
const InputContainer = styled.div`
`
const Input = styled.input`
margin: 20px 0 0 1px;
`
const Label = styled.label`
font-size: 1rem;
margin: 0 0 0 8px;
color: #494949;
`
const ForgetPassword = styled.p`
font-size: 1rem;
`
const LinkTo = styled(Link)`
text-decoration: none;
color: #494949;
`
const Button = styled.button`
outline: none;
border: none;
background-color: #FF2525;
color: #fff;
height: 42px;
width: 100%;
border-radius: 5px;
cursor: pointer;
`
const Linear = styled.div`
height: 60px;
margin: 0 10px 0 10px;
background: linear-gradient(182.59deg, rgba(67, 35, 68, 0.9) -11.53%, #FFC03D 12.4%, #FF2525 50.56%, rgba(67, 35, 68, 0.66) 97.84%);
border-radius: 50%;
`

function Login() {

  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate('./dashboard')
  }
  
  return (
    <StyledBox>
       <Grid container>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <Illustration>
         <LogoContainer>
            {/*<Logo src='../images/logo.jpg' alt='logo'/> */}
         </LogoContainer>
        </Illustration>
        <Linear></Linear>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
         <FormContainer>
            <Form onSubmit={handleSubmit}>
            <FormHeader>LOGIN</FormHeader>
                <StyledTextField id="outlined-basic" type='email' size='small'  />
                <StyledTextField id="outlined-basic" type='password' size='small' />
                <InnerFormContainer>
                <InputContainer>
                <Input type='checkbox' id='check' />
                <Label htmlFor='check'>Remember me</Label>
                </InputContainer>
                <LinkTo to='/'><ForgetPassword>Forget password?</ForgetPassword></LinkTo>
                </InnerFormContainer>
                <Button type='button' onClick={handleSubmit}>Login</Button>
            </Form>
         </FormContainer>
        </Grid>
       </Grid>
    </StyledBox>
  )
}

export default Login
/*
<Grid item lg={8} md={8} sm={8} xs={12}>
        <Linear>
        </Linear>
        </Grid>
        */