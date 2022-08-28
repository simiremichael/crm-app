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
const ReportHeader = styled.h3`
text-align: start;
margin: 15px 0 20px 0;
`
const FilterContainer = styled.div`
margin: 0 5px 0 5px;
`
const SearchContainer = styled.div`
border: 1px solid #C4c4c4;
height: 38px;
margin: 0 15px;
border-radius: 10px;
display: flex;
align-items: center;
`
const SearchInput = styled.input`
height:98%;width: 88%;
border: none;
outline: none;
::placeholder {
    padding-left: 10px;
}
`
const SearchIcon = styled.svg`
height: 20px;
width: 20px;
color: #494949;
margin-left: 10px;
`
const ReportCountContainer = styled.div`

`
const ReportCount = styled.p`
text-align: end;
margin-right: 10px;
`
const TableContainer = styled.div`
margin: 20px 18px 80px 18px;
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
const TicketContainer = styled.div`
border: 0.5px solid #c4c4c4;
height: 100vh;
`
const InnerTopcontainer = styled.div`
display: flex;
justify-content: space-between;
margin: 5px 15px;
`
const Ticket = styled.p`
font-weight: 700;
`
const TotalTicket = styled.p`
font-weight: 700;
color: #FF2525;
`
const AssignedTicket = styled.p`
border: 1px solid #C4c4c4;
display: flex;
justify-content: space-between;
font-size: 0.9rem;
font-weight: 700;
height: 35px;
align-items: center;
padding: 4px 5px;
margin: 40px 15px 5px 15px;
`
const MyTicket = styled.p`
border: 1px solid #C4c4c4;
display: flex;
justify-content: space-between;
font-size: 0.9rem;
font-weight: 700;
height: 35px;
align-items: center;
padding: 2px 5px;
margin: 5px 15px;
`
const PendingTicket = styled.p`
border: 1px solid #C4c4c4;
display: flex;
justify-content: space-between;
font-size: 0.9rem;
font-weight: 700;
height: 35px;
align-items: center;
padding: 2px 5px;
margin: 5px 15px;
`
const SolvedTicket = styled.p`
border: 1px solid #C4c4c4;
display: flex;
justify-content: space-between;
font-size: 0.9rem;
font-weight: 700;
height: 35px;
align-items: center;
padding: 2px 5px;
margin: 5px 15px;
`
const Span = styled.span`
background-color: #BBBAF3;
width: 30px;
height: 20px;
border-radius: 25px;
padding: 7px 5px 4px 5px;
`

function TotalMessage() {
    let navigate = useNavigate();
  const handleNavigate = () => {
      navigate('/report');
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
           <Grid container>
           <Grid item lg={4} md={4} sm={4} xs={12}>
           <ReportHeader>Report</ReportHeader>
            <TicketContainer>
                <InnerTopcontainer>
                <Ticket>Tickets</Ticket>
                <TotalTicket>210</TotalTicket>
                </InnerTopcontainer>
                <SearchContainer>
                <SearchIcon xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6Z"/></SearchIcon>
            <SearchInput type='search' placeholder='Search all tickets' />
            </SearchContainer>
             <AssignedTicket>Assigned Ticket <Span>200</Span></AssignedTicket>
             <MyTicket>My Tickets <Span>210</Span></MyTicket>
             <PendingTicket>Pending <Span>10</Span></PendingTicket>
             <SolvedTicket>Solved <Span>200</Span></SolvedTicket>
            </TicketContainer>
           </Grid>
           <Grid item lg={8} md={8} sm={8} xs={12}>
           <TopContainer>
            <Grid container>
              <Grid item lg={6} md={6} sm={6} xs={9}>
                <FilterContainer>
              <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select style={{textAlign: 'start',}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=''
          label="Filter"
        >
          <MenuItem value='Caller ID'>Caller ID</MenuItem>
          <MenuItem value='Number'>Number</MenuItem>
          <MenuItem value='Calls'>Calls</MenuItem>
          <MenuItem value='Caller'>caller</MenuItem>
          <MenuItem value='Call Status'>Call status</MenuItem>
          <MenuItem value='Contact status'>Contact status</MenuItem>
          <MenuItem value='Contact date'>Contact date</MenuItem>
        </Select>
      </FormControl>
      </FilterContainer>
              </Grid>
            <Grid item lg={6} md={6} sm={6} xs={3}>
              <ReportCountContainer>
                <ReportCount><strong style={{color: '#FF2525'}}>1-11</strong><strong>of 250</strong></ReportCount>
              </ReportCountContainer>
            </Grid>
            </Grid>
          </TopContainer>
           <TableContainer>
           <Tables>
          <Thead>
         <Tr>
            <Th>Contact Date</Th>
            <Th>Ticket</Th>
            <Th>Requester</Th>
            <Th>Subject</Th>
            <Th>Status</Th>
            <Th>Assignee</Th>
            <Th>Comment</Th>
            <Th></Th>
         </Tr>
         </Thead>
         <Tbody>
         <Tr>
            <Td>26-7-2022 12:11:10</Td>
            <Td>#31000</Td>
            <Td>Victor Davies</Td>
            <Td>Insurrance</Td>
            <Td>Solved</Td>
            <Td>John Umoh</Td>
            <Td>Changing of inssurance plan</Td>
         </Tr>
         <Tr>
         <Td>26-7-2022 12:11:10</Td>
            <Td>#31000</Td>
            <Td>Victor Davies</Td>
            <Td>Insurrance</Td>
            <Td>Solved</Td>
            <Td>John Umoh</Td>
            <Td>Changing of inssurance plan</Td>
        </Tr>
         <Tr>
         <Td>26-7-2022 12:11:10</Td>
            <Td>#31000</Td>
            <Td>Victor Davies</Td>
            <Td>Insurrance</Td>
            <Td>Solved</Td>
            <Td>John Umoh</Td>
            <Td>Changing of inssurance plan</Td>
        </Tr>
         </Tbody>
        </Tables>
        </TableContainer>
           </Grid>
           </Grid>
          </TopContainer>
          </Grid>
          </Grid>
          </StyledBox>
          </>
  )
}

export default TotalMessage