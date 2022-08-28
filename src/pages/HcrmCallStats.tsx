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
margin: 30px 0 20px 15px;
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
const MessageContainer = styled.div`
display: flex;
`
const Messages = styled.p`
margin-right: 20px;
font-weight: 600;
cursor: pointer
`
const Statistics = styled.p`
font-weight: 600;
cursor: pointer;
color: #FF2525;
border-bottom: 1px solid #FF2525;
padding-bottom: 5px;
`
const DownloadBtn = styled.button`
color: #fff;
background-color: #FF2525;
border: none;
outline: none;
cursor: pointer;
display: flex;
align-items: center;
padding: 10px 15px;
`
const DownloadSvg = styled.svg`
width: 12px;
height: 12px;
color: #fff;
margin-right: 5px;
`
const SortAndStatsContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 10px 20px;
`
const Stats = styled.p`
font-weight: bold;
`
const MidContainer = styled.div`
margin: 15px 20px;
`
const CardContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 15px;
`
const Card1 = styled.div`
background: #FFFFFF;
border: 2px solid #D9D9D9;
border-radius: 10px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
align-self: center;
box-sizing: border-box;
align-items: flex-start;
height: 268px;
width: 100%;
transition: transform 0.2s;
:hover{
    elevate: 0.1px;
    transform: scale(1.02);
}
`
const Card4 = styled(Card1)`
`
const MissedCall = styled.h3`
margin: 20px 0 0;
text-align: start;
margin-left: 15px;
font-size: 1.1rem;
`

const NumContainer = styled.div`
display: flex;
margin-top: 20px;
`
const MinMaxContainer = styled.div`
margin-left: 20px;
`
const Min = styled.p`
margin-top: 22px;
`
const Max = styled.p`
margin-top: -15px;
`
const Num = styled.h1`
`
const TimeSvg = styled.svg`
width: 18px;
height: 18px;
color: gray;
margin-right: 5px;
align-self: center;
`
const SmallCardBottomContainer = styled.div`
display: flex;
`
const SmallCardInnerContainer = styled.div`
width: 50%;
margin-left: 15px;
`
const DivDivider = styled.div`
height: 50px;
border: 1px solid gray;
margin-top: 20px;
`
const PositivePercentage = styled.p`
display: flex;
color: #31980D;
align-content: center;
`
const NegativePercentage = styled.p`
display: flex;
color: #FF2525;
align-content: center;
`
const PostiveSvg = styled.svg`
width: 18px;
height: 18px;
color: #31980D;
`
const NegativeSvg = styled.svg`
width: 18px;
height: 18px;
color:  #FF2525;
`
const StyledH6 = styled.h4`
text-align: start;
`
const StyledP = styled.p`
text-align: start;
margin-top: -15px;
font-weight: 500;
color: #494949;
`

function HcrmCallStats() {
  const [value, setValue] = React.useState<Date | null>(
    new Date(),
  );
  
  let navigate = useNavigate();
  const handleNavigate = () => {
      navigate('/hcrmreport');
  }
  const handleMessages = () => {
    navigate('/hcrmreport/hcrmcalls');
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
         <ReportHeader>Report</ReportHeader>
          <TopContainer>
           <Grid container>
           <Grid item lg={3} md={3} sm={3} xs={6}>
           <MessageContainer>
            <Messages onClick={handleMessages}>Calls</Messages>
            <Statistics>Statistics</Statistics>
           </MessageContainer>
           </Grid>
           <Grid item lg={3} md={3} sm={3} xs={0}></Grid>
           <Grid item lg={2} md={2} sm={3} xs={6}>
              <LocalizationProvider dateAdapter={AdapterMoment}>
         <Stack spacing={3} >
        <DesktopDatePicker
          label="Date"
          views={['day', 'month', 'year']}
          //inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} helperText={null}/>}
          />
          </Stack>
    </LocalizationProvider>
              </Grid>
              <Grid item lg={2} md={2} sm={3} xs={6}>
                <FilterContainer>
              <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Agents</InputLabel>
        <Select style={{textAlign: 'start',}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=''
          label="Agents"
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
              <Grid item lg={2} md={2} sm={3} xs={6}>
             <DownloadBtn>
             <DownloadSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"/></DownloadSvg>
             Save
            </DownloadBtn>
            </Grid>
            </Grid>
          </TopContainer>
          <MidContainer>
          <Grid container spacing={2}>
       <Grid item lg={4} md={4} sm={6} xs={12}>
        <CardContainer>
        <Card4>
        <MissedCall>Avg. Answer Time</MissedCall>
              <NumContainer>
            <Num style={{ textAlign: 'start', marginLeft: 20}}>00:45</Num>
            <MinMaxContainer>
            <Min>Min 00.01</Min>
            <Max>Max 05.21</Max>
            </MinMaxContainer>
            </NumContainer>
          <SmallCardBottomContainer>
          <SmallCardInnerContainer>
          <PositivePercentage>
          <PostiveSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6H10z"/></PostiveSvg>
            24%
          </PositivePercentage>
          <StyledP>Change</StyledP>
          </SmallCardInnerContainer>
          <DivDivider></DivDivider>
          <SmallCardInnerContainer>
            <StyledH6>00:04</StyledH6>
            <StyledP>Prev. 4h
            </StyledP>
          </SmallCardInnerContainer>
          </SmallCardBottomContainer>
        </Card4>
        </CardContainer>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
        <CardContainer>
        <Card4>
        <MissedCall>Avg. Handled Time</MissedCall>
              <NumContainer>
              <Num style={{ textAlign: 'start', marginLeft: 20}}>05:54</Num>
            <MinMaxContainer>
            <Min>Min 00.11</Min>
            <Max>Max 01.04</Max>
            </MinMaxContainer>
            </NumContainer>
          <SmallCardBottomContainer>
          <SmallCardInnerContainer>
          <NegativePercentage>
          <NegativeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M10 26v-2h12.59L6 7.41L7.41 6L24 22.59V10h2v16H10z"/></NegativeSvg>
           -12%
          </NegativePercentage>
          <StyledP>Change</StyledP>
          </SmallCardInnerContainer>
          <DivDivider></DivDivider>
          <SmallCardInnerContainer>
            <StyledH6>103</StyledH6>
            <StyledP>Prev. 24h
            </StyledP>
          </SmallCardInnerContainer>
          </SmallCardBottomContainer>
        </Card4>
        </CardContainer>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
        <CardContainer>
        <Card4>
        <MissedCall>Avg. Hold Time</MissedCall>
              <NumContainer>
              <Num style={{ textAlign: 'start', marginLeft: 20}}>05:54</Num>
            <MinMaxContainer>
            <Min>Min 00.11</Min>
            <Max>Max 01.04</Max>
            </MinMaxContainer>
            </NumContainer>
          <SmallCardBottomContainer>
          <SmallCardInnerContainer>
          <NegativePercentage>
          <NegativeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M10 26v-2h12.59L6 7.41L7.41 6L24 22.59V10h2v16H10z"/></NegativeSvg>
           -12%
          </NegativePercentage>
          <StyledP>Change</StyledP>
          </SmallCardInnerContainer>
          <DivDivider></DivDivider>
          <SmallCardInnerContainer>
            <StyledH6>103</StyledH6>
            <StyledP>Prev. 24h
            </StyledP>
          </SmallCardInnerContainer>
          </SmallCardBottomContainer>
        </Card4>
        </CardContainer>
        </Grid>
        </Grid>
          </MidContainer>
          <SortAndStatsContainer>
            <Stats>Statistics</Stats>
        <FormControl size='small' style={{width: 100}}>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select style={{textAlign: 'start',}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=''
          label="Sort"
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
          </SortAndStatsContainer>
           <TableContainer>
           <Tables>
          <Thead>
         <Tr>
            <Th>Agent Name</Th>
            <Th>Avg. Answer time</Th>
            <Th>Avg Handled time</Th>
            <Th>Avg. Hold time</Th>
            <Th>Transfer</Th>
            <Th>Closed</Th>
         </Tr>
         </Thead>
         <Tbody>
         <Tr>
            <Td>Lucy Davies</Td>
            <Td>00:00:05</Td>
            <Td>00:07:02</Td>
            <Td>00:01:02</Td>
            <Td>3</Td>
            <Td>1</Td>
         </Tr>
         <Tr>
         <Td>Lucy Davies</Td>
            <Td>00:00:05</Td>
            <Td>00:07:02</Td>
            <Td>00:01:02</Td>
            <Td>3</Td>
            <Td>1</Td>
        </Tr>
         <Tr>
         <Td>Lucy Davies</Td>
            <Td>00:00:05</Td>
            <Td>00:07:02</Td>
            <Td>00:01:02</Td>
            <Td>3</Td>
            <Td>1</Td>
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

export default HcrmCallStats