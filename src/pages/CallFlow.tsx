import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from "react-router-dom";
import AdminTopBar from '../components/AdminTopBar';
import AdminSideBar from '../components/AdminSideBar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const StyledBox = styled(Box)`
`

const BodyContainer = styled.div`
`
const Live = styled.h3`
text-align: start;
margin: 30px 0 0 20px;
`
const CardContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 5% 2.5%;
`
const Card3 = styled.div`
width: 100%;
height: 210px;
padding: 5px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
transition: transform 0.2s;
:hover{
  elevate: 0;
    transform: scale(1);
}

`
const CallFlowTitle = styled.h3`
text-align: start;
`

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['21/04', '22/04', '23/04', '24/04', '25/04', '26/04', '27/04', '28/04', '29/04'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Total Incoming Calls',
        data: [600, 1000, 500, 200, 400, 100, 800, 350, 680],
        borderColor: 'rgb(49, 152, 13)',
        backgroundColor: 'rgba(49, 152, 13, 0.5)',
      },
      {
        label: 'Total Missed Calls',
        data: [580, 750,700, 100, 900, 270, 620, 210, 321],
        borderColor: 'rgba(247, 17, 66, 1)',
        backgroundColor: 'rgba(247, 17, 66, 0.5)'
      },
      {
        label: 'Total Outgoing Calls',
        data: [300, 500, 400, 600, 219, 390, 462, 110, 430],
        borderColor: 'rgba(25, 130, 175, 1)',
        backgroundColor: 'rgba(25, 130, 175, 0.5)'
      },
      {
        label: 'Total Abandon Calls',
        data: [180, 0, 100, 740, 420, 348, 197, 113, 634],
        borderColor: 'rgba(117, 30, 72, 1)',
        backgroundColor: 'rgba(117, 30, 72, 0.5)',
      },
    ],
  };

function CallFlow() {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
     <>
    <AdminTopBar />
     <StyledBox>
        <Grid container>
        <Grid item lg={2} md={2} sm={2} xs={3}>
        <AdminSideBar />
         </Grid>
         <Grid item  lg={10} md={10} sm={10} xs={9}>
         <BodyContainer>
         <CardContainer>
          <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
           <Card3 style={{height: 610}}>
            <Grid container>
            <Grid item lg={7} md={7} sm={7} xs={7}>
             <CallFlowTitle>Call Flow</CallFlowTitle>
            </Grid>
            <Grid item lg={5} md={5} sm={5} xs={5}>
             
             <DatePicker
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date: any) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
            
            </Grid>
            </Grid>
            <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
            <Line options={options} data={data} />;
            </Grid>
            </Grid>
           </Card3>
          </Grid>
          </Grid>
          </CardContainer>
          </BodyContainer>
          </Grid>
          </Grid>
          </StyledBox>
          </>
    
  )
}

export default CallFlow