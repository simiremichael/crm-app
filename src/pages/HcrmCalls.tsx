import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import { useNavigate } from "react-router-dom";
import HeadOfCrmTopBar from '../components/HeadOfCrmTopBar';
import HeadOfCrmSideBar from '../components/HeadOfCrmSideBar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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
const Calls = styled.p`
margin-right: 20px;
font-weight: 600;
color: #FF2525;
border-bottom: 1px solid #FF2525;
padding-bottom: 5px;
cursor: pointer;
`
const Stats = styled.p`
font-weight: 600;
cursor: pointer
`
const SaveBtn = styled.button`
color: #fff;
background-color: #FF2525;
border: none;
outline: none;
cursor: pointer;
display: flex;
margin-top: 10px;
padding: 5px 10px;
`
const SaveSvg = styled.svg`
width: 12px;
height: 12px;
color: #fff;
margin-right: 5px;
`
/*
const SearchIcon = styled.svg`
height: 20px;
width: 20px;
color: #494949;
margin-left: 10px;
`*/
const BodyContainer = styled.div`
margin: 5px 15px;
`
const ReportCountContainer = styled.div`

`
const ReportCount = styled.p`
text-align: end;
margin-right: 10px;
`
const TableContainer = styled.div`
margin: 10px 15px;
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
const TableSvg = styled.svg`
width: 15px;
height: 15px;
color: #FF2525;
`


function HcrmCalls() {
    const [value, setValue] = React.useState<Date | null>(
        new Date(),
      );
      
      let navigate = useNavigate();
      const handleNavigate = () => {
          navigate('/hcrmreport');
      }
      const handleStats = () => {
        navigate('/hcrmreport/hcrmcallstats');
    }
      const handleChange = (newValue: Date | null) => {
        setValue(newValue);
      };
      return (
        <>
        <HeadOfCrmTopBar />
        <StyledBox>
        <BackArrowContainer onClick={handleNavigate}>
       <BackArrowSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/></BackArrowSvg>
       </BackArrowContainer>
        <Grid container>
        <Grid item lg={2} md={2} sm={2} xs={3}>
            <HeadOfCrmSideBar />
             </Grid>
             <Grid item lg={10} md={10} sm={10} xs={9}>
              <TopContainer>
               <Grid container>
                <Grid item lg={1.5} md={1.5} sm={2} xs={6}>
                <ReportHeader>Report</ReportHeader>
                </Grid>
                <Grid item lg={6} md={6} sm={4} xs={0}>
                  
                </Grid>
                <Grid item lg={1.5} md={1.5} sm={2} xs={6}>
                  <Calls>Calls</Calls>
                </Grid>
                <Grid item lg={1.5} md={1.5} sm={2} xs={6}>
                  <Stats onClick={handleStats}>Statistics</Stats>
                </Grid>
                <Grid item lg={1.5} md={1.5} sm={2} xs={6}>
                  <SaveBtn>
                    <SaveSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"/></SaveSvg>
                    Save
                    </SaveBtn>
                </Grid>
               </Grid>
               </TopContainer>
               <BodyContainer>
               <Grid container spacing={2}>
                <Grid item lg={4} md={4} sm={4} xs={6}>
                <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter Ticket</InputLabel>
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
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={6}>
                <FormControl variant="outlined">
                <TextField
                label='Search'
                 variant="outlined"
                type="search"
          id="input-with-icon-adornment"
          InputProps={{
          startAdornment: 
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          
        }}
        />
                </FormControl>
                {/*<SearchContainer>
                <SearchIcon xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6Z"/></SearchIcon>
            <SearchInput type='search' placeholder='Search all tickets' />
            </SearchContainer>
      */}
                </Grid>
                <Grid item lg={2.5} md={2.5} sm={2.5} xs={6}>
                <LocalizationProvider dateAdapter={AdapterMoment}>
         <Stack spacing={3} >
        <DesktopDatePicker
          label="Date"
          views={['day', 'month', 'year']}
          //inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} helperText={null} />}
          
         />
          </Stack>
         </LocalizationProvider>
                </Grid>
                <Grid item lg={1.5} md={1.5} sm={1.5} xs={6}>
                <ReportCountContainer>
                <ReportCount><strong style={{color: '#FF2525'}}>1-11</strong><strong>of 250</strong></ReportCount>
              </ReportCountContainer>
                </Grid>
               </Grid>
               </BodyContainer>
               <TableContainer>
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
            <Th>Issues</Th>
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
            <Td>Insurance</Td>
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
            <Td>Insurance</Td>
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
            <Td>Insurance</Td>
            <Td>Ikj, Lag</Td>
            <Td><CallIcon2 xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4m15 8V9.5h-3.5L21 4l-1-1l-5.5 5.5V5H13v6h6Z"/></CallIcon2></Td>
            <Td>32mm21s</Td>
            <Td><TableSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"/></TableSvg></Td>
         </Tr>
         </Tbody>
        </Tables>
          </TableContainer>
               </Grid>
               </Grid>
               </StyledBox>
               </>
                
 )
}

export default HcrmCalls