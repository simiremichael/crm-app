import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import AgentTopBar from '../components/AgentTopBar';
import AgentSideBar from '../components/AgentSideBar';
import { useNavigate } from "react-router-dom";

const StyledBox = styled(Box)`
`
const TopContainer = styled.div`
margin: 20px 15px;
display: flex;
`
const BackArrowContainer = styled.div`
margin-left: 30px;
display: flex;
align-items: center;
cursor: pointer;
pasition: relative;
z-index: 1002;
margin: -45px 0 15px 260px;
`
const BackArrowSvg = styled.svg`
width: 35px;
height: 30px;
`
const Heading = styled.h3`
margin-left: 16px;
`
const BodyContainer = styled.div`

`
const MisssedCallsList = styled.p`
display: flex;
justify-content: space-between;
border: 0.5px solid #c4c4c4;
margin: 0 100px 0 30px;
padding: 5px 3px 3px 5px;
`
const Span = styled.span`

`
function CallsOnQueue() {

    let navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/agentdashboard');
    }
  return (
    <>
    <AgentTopBar />
    <StyledBox>
    <BackArrowContainer onClick={handleNavigate}>
   <BackArrowSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/></BackArrowSvg>
   </BackArrowContainer>
    <Grid container>
    <Grid item lg={2} md={2} sm={2} xs={3}>
        <AgentSideBar />
         </Grid>
         <Grid item lg={10} md={10} sm={10} xs={9}>
          <TopContainer>
          <Heading>Calls on Queue</Heading>
          </TopContainer>
          <BodyContainer>
            <MisssedCallsList>You have a missed call from 01-220-10-51<Span>1</Span><Span>15:01</Span></MisssedCallsList>
            <MisssedCallsList>You have a missed call from 01-220-10-51<Span>2</Span><Span>15:01</Span></MisssedCallsList>
            <MisssedCallsList>You have a missed call from 01-220-10-51<Span>3</Span><Span>15:01</Span></MisssedCallsList>
            <MisssedCallsList>You have a missed call from 01-220-10-51<Span>4</Span><Span>15:01</Span></MisssedCallsList>
          </BodyContainer>
          </Grid>
          </Grid>
          </StyledBox>
    </>
  )
}



export default CallsOnQueue