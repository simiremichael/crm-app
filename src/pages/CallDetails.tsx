import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import AdminTopBar from '../components/AdminTopBar';
import AdminSideBar from '../components/AdminSideBar';


const StyledBox = styled(Box)`
background: rgba( 255, 255, 255, 0.2 );
backdrop-filter: blur( 0 );
height: 100vh;
width: 100%;
z-index: auto;
position: absolute;
`
const BodyContainer = styled.div`
width:500px;
background: rgba( 255, 255, 255, 0.9 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 18.5px );
-webkit-backdrop-filter: blur( 18.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
margin-top: -60px;
margin-left: 22%;

padding: 20px;
width:500px;
`
const StyledP = styled.p`
text-align: start;
font-weight: 600;
font-size: 0.9rem;
`
const Span1 = styled.span`
font-weight: 300;
margin-left: 5px;
`
const BtnContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 10px 0 10px 34%;
`
const CloseBtn = styled.button`
background-color:  #FF2525;
color: #fff;
outline: none;
border: none;
padding: 10px 60px;
cursor: pointer;
border-radius: 5px;
font-weight: 600;
`


function CallDetails(  props: {show: any, setShow: any} ) {
    let  show = props.show;
    let  setShow= props.setShow
     
       const handleShow = () => {
        setShow(!show);
       }
  return (
    <StyledBox>
      <BodyContainer>
        <Grid container>
            <Grid item lg={6} md={6} sm={6} xs={6}>
            <StyledP>Agent Status: <Span1>Active</Span1></StyledP>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
            <StyledP>Caller: <Span1>Bukola Samuel</Span1></StyledP>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
            <StyledP>Agent Number: <Span1>01-222-013-14</Span1></StyledP>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
            <StyledP>Caller ID: <Span1>#31000</Span1></StyledP>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
            <StyledP>Agent Number: <Span1>01-710-110-89</Span1></StyledP>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
            <StyledP>Number of Calls: <Span1>5</Span1></StyledP>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
            <StyledP>Location: <Span1>Ikeja</Span1></StyledP>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
            <StyledP>Subscription <Span1>Yes</Span1></StyledP>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
            <StyledP>Call Status: <Span1>Inbound</Span1></StyledP>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
            <StyledP>Duration: <Span1>32m21s</Span1></StyledP>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
            <StyledP>Contact Date: <Span1>26-7-2022 12:11:10</Span1></StyledP>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}></Grid>
            <BtnContainer>
            <CloseBtn onClick={handleShow} type='button'>Close</CloseBtn>
            </BtnContainer>
        </Grid>
    </BodyContainer>
    </StyledBox>
  )
}

export default CallDetails

