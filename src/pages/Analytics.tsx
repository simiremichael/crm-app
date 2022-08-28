import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import React from 'react';
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
import Select from '@mui/material/Select'
import CallsChart from '../components/CallsChart';
import CallPerHourChart from '../components/CallPerHourChart';
import CallSumary from '../components/CallSumary';
import TicketChart from '../components/TicketChart';
import IssueChart from '../components/IssueChart';

  //import faker from 'faker';



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
display: flex;
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
const Card1 = styled.div`
background: #FFFFFF;
border: 1px solid #D9D9D9;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
align-self: center;
box-sizing: border-box;
align-items: flex-start;
height: auto;
width: 100%;
cursor: pointer;
transition: transform 0.2s;
:hover{
  elevate: 0.1px;
    transform: scale(1.02);
}
`
const CardInnerContainer = styled.div`
padding: 0 15%;
`
const CardInnerContainer1 = styled.div`
margin: 3% 0;
`
const ChartContainer = styled.div`
margin: 20px;
`


  
  const labels2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data2 = {
    labels2,
    datasets: [
      {
        label: 'Dataset 1',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
function Analytics() {
    const [value, setValue] = React.useState<Date | null>(
        new Date(),
      );
    
      const handleChange = (newValue: Date | null) => {
        setValue(newValue);
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
            <Live>Analytics</Live>
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
          <FormControl style={{width: 150, marginLeft: '30%'}}>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select style={{textAlign: 'start',}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=''
          label="Sort"
        >
          <MenuItem value='Caller ID'>Calls</MenuItem>
          <MenuItem value='Number'>Tickets</MenuItem>
        </Select>
      </FormControl>
          </TopLeftContainer>
          <TopRightContainer>
           <ExportButton>Export to pdf</ExportButton>
           <SaveButton>Save Download</SaveButton>
          </TopRightContainer>
          </TopContainer>
          </CardWrapper>
          <ChartContainer>
          <Grid container spacing={2}>
           <Grid item lg={9} md={9} sm={10} xs={12}>
           <Card1>
           <CallsChart />
           </Card1>
           </Grid>
           <Grid item lg={7} md={7} sm={7} xs={12}>
           <Card1>
            <CallPerHourChart />
            </Card1>
           </Grid>
           <Grid item lg={5} md={5} sm={5} xs={12}>
           <Card1>
            <CardInnerContainer>
            <CallSumary />
            </CardInnerContainer>
           </Card1>
           </Grid>
           <Grid item lg={7} md={7} sm={7} xs={12}>
           <Card1>
            <TicketChart />
            </Card1>
           </Grid>
           <Grid item lg={5} md={5} sm={5} xs={12}>
           <Card1>
            <CardInnerContainer1>
            <IssueChart />
            </CardInnerContainer1>
            </Card1>
            </Grid>
           </Grid>
           </ChartContainer>
          </Grid>
          </Grid>
          </StyledBox>
    </>
  )
}

export default Analytics