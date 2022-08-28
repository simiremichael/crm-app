import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import HeadOfCrmTopBar from '../components/HeadOfCrmTopBar';
import HeadOfCrmSideBar from '../components/HeadOfCrmSideBar';
import TextField from '@mui/material/TextField';
//import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp'; 
import AudioSpectrum from 'react-av';




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
const OngoingCall = styled.h3`
text-align: start;
`
const Name = styled.p`
color: #000;
text-align: start;
`
const AgentContainer = styled.div`
border: 0.5px solid #c4c4c4;
margin: 30px 20px 0 20px;
`
const Agent = styled.p`
text-align: start;
margin-left: 25px;
`
const AgentName = styled.p`
text-align: start;
margin-left: 15px;
font-weight: 600;
`
const CustomerContainer = styled.div`
border: 0.5px solid #c4c4c4;
margin: 0 20px 30px 20px;
`
const Customer = styled.p`
text-align: start;
margin-left: 25px;
`
const CustomerNum = styled.p`
text-align: start;
margin-left: 15px;
font-weight: 600;
`
const AudioContainer = styled.div`

`
const Timing = styled.p`
text-align: start;
margin-left: 15px;
font-weight: 600;
margin-top: 40%;
`
const SendBtn = styled.button`
background-color: #FF2525;
border: none;
outline: none;
color: #fff;
width: 90%;
height: 50px;
margin-left: 5%;
cursor: pointer;
border-radius: 10px;
margin-top: 7%;
`
const OutBoundCallTime = styled.p`
padding: 8px 10px;
background-color: #31980D;
margin: 0 10px;
color: #fff;
`
const OutBoundCallSvg = styled.svg`
width: 18px;
height: 18px;
color: #31980D;
`
const Card5CallContainer = styled.div`
display: flex;
align-items: center;
margin-left: 15px;
`
const SaveBtn = styled.button`
color: #fff;
background-color: #FF2525;
border: none;
outline: none;
cursor: pointer;
display: flex;
margin-top: 10px;
padding: 10px 15px;
`
const SaveSvg = styled.svg`
width: 12px;
height: 12px;
color: #fff;
margin-right: 5px;
`
const Playback = styled.div`
border: 0.5px solid #c4c4c4;
margin: 30px 20px;
`

function LiveCall() {

    let navigate = useNavigate();
      const handleNavigate = () => {
          navigate('/hcrmdashboard');
      }

      const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
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
                <Grid item lg={3} md={3} sm={4} xs={7}>
                <OngoingCall>On Going Call Evaluation</OngoingCall>
               <Name>For Lucy Davies with #31000</Name>
               <Card5CallContainer>
              <OutBoundCallSvg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4m11 0v1.5h3.5L13 10l1 1l5.5-5.5V9H21V3h-6Z"/></OutBoundCallSvg>
              <OutBoundCallTime>01:24:36</OutBoundCallTime>
              </Card5CallContainer>
                </Grid>
                <Grid item lg={7} md={7} sm={5} xs={0}>

                </Grid>
                <Grid item lg={2} md={2} sm={3} xs={5}>
                <SaveBtn>
                    <SaveSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"/></SaveSvg>
                    Save
                    </SaveBtn>
                </Grid>
               </Grid>
               </TopContainer>
               <AgentContainer>
                <Grid container>
                <Grid item lg={2} md={2} sm={2} xs={2}>
                <Agent>Agent</Agent>
                <AgentName>Lucy Davies</AgentName>
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                <AudioSpectrum
                 id="audio-canvas"
                 height={100}
                 width={300}
                 audioId={'audio-element'}
                 capColor={'red'}
                 capHeight={2}
                 meterWidth={2}
                 meterCount={512}
                 meterColor={[
                 {stop: 0, color: '#4CAF40'},
                 {stop: 0.5, color: '#0CD7FD'},
                 {stop: 1, color: '#000'}
                 ]}
                 gap={4}
                 />
                </Grid>
                </Grid>
               </AgentContainer>
               <CustomerContainer>
                <Grid container>
                <Grid item lg={2} md={2} sm={2} xs={2}>
                <Customer>Customer</Customer>
                <CustomerNum>+02-220-10-59</CustomerNum>
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                <AudioSpectrum
                 id="audio-canvas"
                 height={100}
                 width={300}
                 audioId={'audio-element'}
                 capColor={'red'}
                 capHeight={2}
                 meterWidth={2}
                 meterCount={512}
                 meterColor={[
                 {stop: 0, color: '#4CAF40'},
                 {stop: 0.5, color: '#0CD7FD'},
                 {stop: 1, color: '#000'}
                 ]}
                 gap={4}
                 />
                </Grid>
                </Grid>
               </CustomerContainer>
               <AudioContainer>
                <Grid container>
                <Grid item lg={7} md={7} sm={7} xs={12}>
                <Playback>
                <audio id="audio-element"
                 src="../mp3/ongoing.mp3"
                 controls
                  >
                 </audio>
                 <AudioSpectrum
                 id="audio-canvas"
                 height={100}
                 width={300}
                 audioId={'audio-element'}
                 capColor={'red'}
                 capHeight={2}
                 meterWidth={2}
                 meterCount={512}
                 meterColor={[
                 {stop: 0, color: '#4CAF40'},
                 {stop: 0.5, color: '#0CD7FD'},
                 {stop: 1, color: '#000'}
                 ]}
                 gap={4}
                 />
                 </Playback>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={4}>
                <Timing>05:22/11:04</Timing>
                </Grid>
                </Grid>
               </AudioContainer>
               <Grid container>
               <Grid item lg={4} md={4} sm={4} xs={8}>
               <TextField
               id="outlined-multiline-static"
               label="Multiline"
               multiline
               rows={2}
               style={{width: '100%'}}
               />
                 </Grid>
                <Grid item lg={2} md={2} sm={2} xs={4}>
                <SendBtn>Send To Lucy</SendBtn>
                </Grid>
               </Grid>
        
              </Grid>
               </Grid>
               </StyledBox>
    </>
  )
}

export default LiveCall