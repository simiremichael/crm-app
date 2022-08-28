import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import React, { Component } from 'react';
import ReactECharts from 'echarts-for-react';
import { useNavigate } from "react-router-dom";
import HeadOfCrmTopBar from '../components/HeadOfCrmTopBar';
import HeadOfCrmSideBar from '../components/HeadOfCrmSideBar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const StyledBox = styled(Box)`
`
const BodyContainer = styled.div`
`
const HeadingContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 20px 50px 15px 10px;
`
const Active = styled.h3`
margin-left: 15px;
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
const SaveBtn = styled.button`
background-color: #FF2525;
color: #fff;
padding: 6px 15px;
border: none;
outline: none;
cursor: pointer;
`
const SearchContainer = styled.div`
border: 1px solid #c4c4c4;
width: 80%;
margin: 5px 20px;
height: 30px;
border-radius: 8px;
`
const SearchInput = styled.input`
width: 94%;
height: 98%;
border: none;
outline: none;
::placeholder{
    padding-left: 10px;
}
`
const SearchIcon = styled.svg`

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
text-align: start;
`
const Td = styled.td`
margin: 0;
font-size: 0.9rem;
border-bottom: 2px solid rgba(0, 0, 0, 0.2);
text-align: start;
vertical-align: center;
font-weight: bold;
`
const OnSvg = styled.svg`
width: 15px;
height: 15px;
color: #31980d;
margin-right: 5px;
`
const FollowSvg = styled.svg`
width: 15px;
height: 15px;
color: #ff2525;
margin-right: 5px;
`

function ActiveAgent() {

    let navigate = useNavigate();
    const handleBack = () => {
        navigate('/hcrmdashboard');
    }

  return (
    <>
    <HeadOfCrmTopBar />
       <StyledBox>
       <BackArrowContainer onClick={handleBack}>
       <BackArrowSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/></BackArrowSvg>
       </BackArrowContainer>
       <Grid container>
       <Grid item lg={2} md={2} sm={2} xs={3}>
       <HeadOfCrmSideBar />
       </Grid>
        <Grid item  lg={10} md={10} sm={10} xs={9}>
        <HeadingContainer>
            <Active>Active Agent</Active>
            <SaveBtn>
                Save
            </SaveBtn>
          </HeadingContainer>
          <Grid container>
          <Grid item lg={6} md={6} sm={8} xs={12}>
           <SearchContainer>
            <SearchInput type='search' placeholder='Search here..' />
           </SearchContainer>
          </Grid>
          </Grid>
          <TableContainer>
           <Tables>
          <Thead>
         <Tr>
            <Th>Agent Name</Th>
            <Th>Agent Status</Th>
            <Th>Time In State</Th>
            <Th>Calls Taken</Th>
            <Th>Tickets Lodged</Th>
            <Th>SLA%</Th>
         </Tr>
         </Thead>
         <Tbody>
           <Tr>
            <Td>Lucy Davies</Td>
            <Td>
            <OnSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0Zm7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768l3.392 2.827Z" clip-rule="evenodd"/></OnSvg>
              On call
              </Td>
            <Td>0:55</Td>
            <Td>22</Td>
            <Td>12</Td>
            <Td>100%</Td>
           </Tr>
         <Tr>
         <Td>Lucy Davies</Td>
            <Td>
            <FollowSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0Zm7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768l3.392 2.827Z" clip-rule="evenodd"/></FollowSvg>
              Follow-up
              </Td>
            <Td>0:55</Td>
            <Td>22</Td>
            <Td>12</Td>
            <Td>60%</Td>
        </Tr>
         <Tr>
         <Td>Lucy Davies</Td>
            <Td>
            <OnSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0Zm7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768l3.392 2.827Z" clip-rule="evenodd"/></OnSvg>
              On call
              </Td>
            <Td>0:55</Td>
            <Td>22</Td>
            <Td>12</Td>
            <Td>100%</Td>
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

export default ActiveAgent