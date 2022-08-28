import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
//import { NavLink } from "react-router-dom";

const StyledBox = styled(Box)`

`
const TopContainer = styled.div`
height: 44px;
margin-top: 20px;
border-bottom: 3px solid rgba(0, 0, 0, 0.1);
margin-left: 3%;
`
const StyledLi =styled.li`
list-style-type: none;
Font-family: Montserrat;
weight: 600;
font-size: 18px;
Line-heigh: 21.94px;
Letter: -0.5%;
display: flex;
align-items: center;
justify-content: center;
:active{
border-bottom: 2.5px solid #CB310F;
}
`
const CallIconContainer = styled.div`
margin-right: 10px;
background-color: rgba(203, 49, 15, 0.2);
padding: 8px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: enter;
`
const CallIconContainer1 = styled(CallIconContainer)`
background-color: rgba(25, 130, 175, 0.28);
`
const CallIconContainer2 = styled(CallIconContainer)`
background-color: rgba(49, 152, 13, 0.28);
`
const CallIcon = styled.svg`
height: 24px;
width: 24px;
color: #CB310F;
margin: 0;
`
const CallIcon1 = styled(CallIcon)`
color: #1982AF;
margin: 0;
`
const CallIcon2 = styled(CallIcon)`
color: #31980D;
margin: 0;
`
const SearchContainer = styled.div`
border: 2px solid #C4C4C4;
width: 50%;
height: 38px;
margin-top: 40px;
margin-left: 40px;
border-radius: 10px;
display: flex;
align-items: center;
`
const Input = styled.input`
height: 96%;
width: 90%;
border: none;
outline: none;
margin-right: 3px;
border-radius: 10px;
`
const Span = styled.span`
Font-family: Montserrat;
Font-size: 16px;
width: 90px;
`
const SearchSvg = styled.svg`
width: 20px;
height: 20px;
margin: 0 15px;
`
const Thead = styled.thead`
width: 100%;
background-color: #FF2525;
height: 40px;
`
const Tbody = styled.tbody`
height: 140px;
`
const Tables = styled.table`
border: 2px solid rgba(0, 0, 0, 0.2);
margin-top: 0;
width: 100%;
margin-top: 20px;
border-collapse: collapse;
`
const Tr = styled.tr`

`
const Th = styled.th`
color: #fff;
margin: 0;
`
const Td = styled.td`
margin: 0;
font-size: 0.9rem;
border-bottom: 2px solid rgba(0, 0, 0, 0.2);
text-align: center;
vertical-align: center;
`
const TableSvg = styled.svg`
width: 15px;
height: 15px;
color: #FF2525;
`

function Table() {
    //const [activ, setActive] = useState(false);

  return (
    <>
    <TopBar />
    <StyledBox>
    <Grid container>
    <Grid item lg={2} md={2} sm={2} xs={3}>
        <SideBar />
         </Grid>
         <Grid item  lg={10} md={10} sm={10} xs={9}>
         <TopContainer>
       <Grid container>
       <Grid item lg={2.5} md={2.5} sm={3} xs={4}>
       <StyledLi><CallIconContainer><CallIcon  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M20 17.5V21c0 .55-.45 1-1 1C9.61 22 2 14.39 2 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1l-2.2 2.21c1.44 2.84 3.76 5.15 6.59 6.59l2.2-2.2c.28-.27.67-.35 1.02-.24c1.12.37 2.32.57 3.57.57c.55 0 1 .45 1 1m-4-10h-3.5L18 2l-1-1l-5.5 5.5V3H10v6h6V7.5M17 6v1.5h3.5L15 13l1 1l5.5-5.5V12H23V6h-6Z"/></CallIcon></CallIconContainer> All voice calls</StyledLi>
       </Grid>
       <Grid item lg={2.5} md={2.5} sm={3} xs={4}>
       <StyledLi><CallIconContainer1><CallIcon1 xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4m11 0v1.5h3.5L13 10l1 1l5.5-5.5V9H21V3h-6Z"/></CallIcon1></CallIconContainer1>Inbound calls</StyledLi>
       </Grid>
       <Grid item lg={2.5} md={2.5} sm={3} xs={4}>
       <StyledLi><CallIconContainer2><CallIcon2 xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4m15 8V9.5h-3.5L21 4l-1-1l-5.5 5.5V5H13v6h6Z"/></CallIcon2></CallIconContainer2>Outbound calls</StyledLi>
       </Grid>
       </Grid>
       </TopContainer>
        <SearchContainer>
        <SearchSvg  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m16.325 14.899l5.38 5.38a1.008 1.008 0 0 1-1.427 1.426l-5.38-5.38a8 8 0 1 1 1.426-1.426ZM10 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"/></SearchSvg>
        <Span>Search here</Span>
        <Input />
        </SearchContainer>
        <Grid container>
        <Grid item lg={0.5} md={0.5} sm={0} xs={0}></Grid>
          <Grid item lg={11} md={11} sm={12} xs={12}> 
          <Tables>
          <Thead>
         <Tr>
            <Th>Contact Date</Th>
            <Th>Status</Th>
            <Th>Number</Th>
            <Th>Caller Id</Th>
            <Th>Calls</Th>
            <Th>Caller</Th>
            <Th>Subscription</Th>
            <Th>Location</Th>
            <Th>Caller Status</Th>
            <Th>Duration</Th>
            <Th></Th>
         </Tr>
         </Thead>
         <Tbody>
         <Tr>
            <Td>26-7-2022 12:11:10</Td>
            <Td>Active</Td>
            <Td>01-222-013-14</Td>
            <Td>#31000</Td>
            <Td>5</Td>
            <Td>Bukola Samuel</Td>
            <Td>Yes</Td>
            <Td>Ikj, Lag</Td>
            <Td><CallIcon1 xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4m11 0v1.5h3.5L13 10l1 1l5.5-5.5V9H21V3h-6Z"/></CallIcon1></Td>
            <Td>32mm21s</Td>
            <Td><TableSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"/></TableSvg></Td>
         </Tr>
         <Tr>
         <Td>26-7-2022 12:11:10</Td>
            <Td>Active</Td>
            <Td>01-222-013-14</Td>
            <Td>#31000</Td>
            <Td>5</Td>
            <Td>Bukola Samuel</Td>
            <Td>Yes</Td>
            <Td>Ikj, Lag</Td>
            <Td><CallIcon2 xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4m15 8V9.5h-3.5L21 4l-1-1l-5.5 5.5V5H13v6h6Z"/></CallIcon2></Td>
            <Td>32mm21s</Td>
            <Td><TableSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"/></TableSvg></Td>
         </Tr>
         <Tr>
         <Td>26-7-2022 12:11:10</Td>
            <Td>Active</Td>
            <Td>01-222-013-14</Td>
            <Td>#31000</Td>
            <Td>5</Td>
            <Td>Bukola Samuel</Td>
            <Td>Yes</Td>
            <Td>Ikj, Lag</Td>
            <Td><CallIcon2 xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4m15 8V9.5h-3.5L21 4l-1-1l-5.5 5.5V5H13v6h6Z"/></CallIcon2></Td>
            <Td>32mm21s</Td>
            <Td><TableSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"/></TableSvg></Td>
         </Tr>
         </Tbody>
        </Tables>
        </Grid>
        <Grid item lg={0.5} md={0.5} sm={0} xs={0}></Grid>
        </Grid>
       </Grid>
       </Grid>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    </StyledBox>
    </>
  )
}

export default Table