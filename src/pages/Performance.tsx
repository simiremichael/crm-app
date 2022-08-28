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
margin: 20px 50px 15px 5px;
`
const Live = styled.h3`

`
const MessagesSvg = styled.svg`
width: 25px;
height: 25px;
margin-right: 5px;
`
const MessageCounter = styled.p`
display: flex;
font-size: 1rem;
`
const CardWrapper = styled.div`
margin: 3% 2%;
`
const  TopContainer = styled.div`
display: flex;
justify-content: space-between;
`
const TopLeftContainer = styled.div`

`
const TopRightContainer = styled.div`
margin-right: 10px;
`
const ExportButton = styled.button`
border: 1px solid #FF2525;
background-color: inherit;
color: #FF2525;
outline: none;
cursor: pointer;
padding: 10px 15px;
`
const SaveButton = styled.button`
background-color: #FF2525;
border: 1px solid #FF2525;
color: #fff;
outline: none;
cursor: pointer;
padding: 10px 15px;
margin-left: 15px;
`
const CardContainer = styled.div`
background-color: #F5F5F5;
margin-top: 20px;
padding: 12px 15px;
`
const Card = styled.div`
background-color: #fff;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
box-sizing: border-box;
padding: 10px;
border-radius: 10px;
transition: transform 0.2s;
:hover{
    elevate: 0.1px;
    transform: scale(1.02);
}
`
const CardTitle = styled.h3`
text-align: start;
margin: 10px;
`
const LastTime = styled.p`
text-align: start;
margin: 10px;
color: #494949;
display: flex;
align-items: center;
`
const TimeSvg = styled.svg`
width: 18px;
height: 18px;
margin-right: 5px;
color: #494949;
`
const CardNum = styled.h1`
color: #980D69;
text-align: start;
margin: 10px;
`
const StatsContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 10px 20px 10px 22px;
`
const Statistics = styled.h3`
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
font-size: 0.9rem;
border-bottom: 2px solid rgba(0, 0, 0, 0.2);
text-align: center;
vertical-align: center;
`
const UserSvg = styled.svg`
width: 18px;
height: 18px;
margin: 3% 5px -3px 0;
`

function Performance() {

    const [value, setValue] = React.useState<Date | null>(
        new Date(),
      );
    
      const handleChange = (newValue: Date | null) => {
        setValue(newValue);
      };

      const [sort, setSort] = React.useState('');

  const handleDrop = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  return (
    <>
     <HeadOfCrmTopBar />
        <StyledBox>
        <Grid container>
        <Grid item lg={2} md={2} sm={2} xs={3}>
        <HeadOfCrmSideBar />
        </Grid>
         <Grid item  lg={10} md={10} sm={10} xs={9}>
         <CardWrapper>
          <HeadingContainer>
            <Live>Performance</Live>
            <MessageCounter>
            <MessagesSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.233V16H4V4h16v12z"/></MessagesSvg>
              Unread Messages
            </MessageCounter>
          </HeadingContainer>
          <TopContainer>
          <TopLeftContainer>
          <LocalizationProvider dateAdapter={AdapterMoment}>
         <Stack spacing={3}>
        <DesktopDatePicker
          label="Date"
          views={['day', 'month', 'year']}
          //inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
          />
          </Stack>
    </LocalizationProvider>
          </TopLeftContainer>
          <TopRightContainer>
           <ExportButton>Export to pdf</ExportButton>
           <SaveButton>Save Download</SaveButton>
          </TopRightContainer>
          </TopContainer>
          <CardContainer>
          <Grid container spacing={2}>
          <Grid item lg={3} md={3} sm={6} xs={12}>
          <Card>
          <CardTitle>Total Calls</CardTitle>
          <LastTime>
          <TimeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></TimeSvg>
            Last 8h
            </LastTime>
          <CardNum>155</CardNum>
          </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
          <Card>
          <CardTitle>Avg. Answer Speed</CardTitle>
          <LastTime>
          <TimeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></TimeSvg>
            Last 8h
            </LastTime>
          <CardNum>155</CardNum>
          </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
          <Card>
          <CardTitle>Abandon Rate</CardTitle>
          <LastTime>
          <TimeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></TimeSvg>
            Last 8h
            </LastTime>
          <CardNum>155</CardNum>
          </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
          <Card>
          <CardTitle>Total Tickets</CardTitle>
          <LastTime>
          <TimeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></TimeSvg>
            Last 8h
            </LastTime>
          <CardNum>155</CardNum>
          </Card>
          </Grid>
          </Grid>
          </CardContainer>
          </CardWrapper>
          <StatsContainer>
            <Statistics>Statistics</Statistics>
            <FormControl size='small'>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort by"
          onChange={handleDrop}
          style={{ width: 100}}
        >
          <MenuItem value='A-Z'>A-ZZ</MenuItem>
          <MenuItem value='Highest to'>Highest to</MenuItem>
          <MenuItem value='Lowest'>Lowest</MenuItem>
        </Select>
      </FormControl>
          </StatsContainer>
          <TableContainer>
           <Tables>
          <Thead>
         <Tr>
            <Th>Agent Name</Th>
            <Th>Total Calls</Th>
            <Th>Calls Answered</Th>
            <Th>Speed of Answer</Th>
            <Th>Call resolution %</Th>
            <Th>Generated Tickets</Th>
         </Tr>
         </Thead>
         <Tbody>
         <Tr>
         <Td>
         <UserSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"/></UserSvg>
         Lucy Davies</Td>
            <Td>170</Td>
            <Td>167</Td>
            <Td>55.2</Td>
            <Td>70.2</Td>
            <Td>19</Td>
         </Tr>
         <Tr>
         <Td>
         <UserSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"/></UserSvg>
         Lucy Davies</Td>
            <Td>170</Td>
            <Td>167</Td>
            <Td>55.2</Td>
            <Td>70.2</Td>
            <Td>19</Td>
        </Tr>
         <Tr>
         <Td>
         <UserSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"/></UserSvg>
         Lucy Davies</Td>
            <Td>170</Td>
            <Td>167</Td>
            <Td>55.2</Td>
            <Td>70.2</Td>
            <Td>19</Td>
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

export default Performance