import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { useNavigate } from "react-router-dom";

const StyledBox = styled(Box)`

`
const StyledGrid = styled(Grid)`
height: 100%;
`
const NavBar = styled.div`
height: 60px;
`
const RightNavContainer = styled.div`
background-color: #C4C4C4;
width: 100%;
height: 100%;
box-sizing: border-box;
border: 1px solid rgba(0, 0, 0, 0.2);
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
display: flex;
justify-content: end;
`
const LeftNavContainer = styled.div`
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.2);
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
`
const Logo = styled.img`
width: 3.3rem;
padding-top: 3px;
cursor: pointer;
`
const UserContainer = styled.div`
height: 100%;
display: flex;
justify-content: end;
margin-right: 8%;
align-items: center;
`
const User = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 19px;
color: rgba(0, 0, 0, 0.7);
`
const UserIcon = styled.svg`
width: 18px;
margin-right: 10px;
fill: rgba(0, 0, 0, 0.7);
`
const Online = styled.p`
color: #31980D;
margin-right: 15px;
`


function AgentTopBar() {


  let navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/');
    }

  return (
    <StyledBox>
    <NavBar>
   <StyledGrid container>
       <Grid item lg={2} md={2} sm={2} xs={3}>
   <LeftNavContainer>
       <Logo onClick={handleNavigate} src="../images/logo.jpg" alt='logo' />
   </LeftNavContainer>
   </Grid>
   <Grid item lg={10} md={10} sm={10} xs={9}>
   <RightNavContainer>
  
   <UserContainer>
    <Online>Online</Online>
   <UserIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"/></UserIcon>
       <User>LUCY</User>
   </UserContainer>
   </RightNavContainer>
   </Grid>
   </StyledGrid>
   </NavBar>
   </StyledBox>
  )
}

export default AgentTopBar