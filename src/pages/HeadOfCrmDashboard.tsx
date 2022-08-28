import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import AgentTopBar from '../components/AgentTopBar';
import AgentSideBar from '../components/AgentSideBar';
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
cursor: pointer;
transition: transform 0.2s;
:hover{
  elevate: 0.1px;
    transform: scale(1.02);
}
`
const Card2 = styled(Card1)`
width: 100%;
@media only screen and (max-width: 860px) {
  width: 100%;
}

box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`
const Card3 = styled(Card1)`
height: 200px;
margin-top: -12px;
width: 100%;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`
const Card4 = styled(Card1)`
`
const SLATopContainer = styled.div`
border-bottom: 1px solid #D9D9D9;
padding-bottom: 10px;
`
const SLAInnerContainer = styled.div`
margin: 50px 10px 0 10px;
`
const StyledSLAP = styled.p`
text-align: start;
`
const StyledSLAH3 = styled.h2`
color: #31980D;
`
const ActiveInnerTopContainer = styled.div`
border-bottom: 1px solid #494949;
padding-bottom: 10px;
`
const MissedCall = styled.h3`
margin: 20px 0 0;
text-align: start;
margin-left: 15px;
font-size: 1.1rem;
`
const Calltime = styled.p`
margin: 10px 0 0;
text-align: start;
margin-left: 15px;
font-size: 0.8rem;
display: flex;
align-content: center;
`
const InnerRightContaner = styled.div`
dislay: flex;
justify-content: center;
align-content: center;
`
const CallNo = styled.h3`
margin: 10px  0;
text-align: start;
`
const IncomingCall = styled.p`
margin: 0;
text-align: start;
`
const ChartContaner = styled.div`
align-self: center;
width: 100px;
height: 200px;
margin: -30px 0 0 15px;
`
const Circle = styled.div`
width: 20px;
height: 20px;
border-radius: 50px;
border: 1px solid gray;
margin: 40px 0 0 0;
`
const BottomBar = styled.div`
width: 72%;
height: 16px;
border: 1px solid gray;
margin: 15px  0 0 0;
border-radius: 20px;
`
const NumContainer = styled.div`
display: flex;
`
const MinMaxContainer = styled.div`
margin-left: 15px;
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
const TopinnerContainer = styled.div`
display: flex;
align-items: end;
justify-content: space-between;
`
const InnerDate = styled.div`
margin-right: 40px;
font-weight: 500;
display: flex;
align-items: center;
`
const CalendarSvg = styled.svg`
height: 15px;
width: 15px;
margin: 0 5px;
`
const DownArrowBlack= styled.svg`
height: 12px;
width: 12px;
margin-left: 5px;
`
const MiddleInnerContainer = styled.div`
display: flex;
margin-left: 15px;
justify-content: space-between;
`
const TotalTime = styled.p`
color:  #FF2525;
`
const RedTimeSvg = styled.svg`
width: 12px;
height: 12px;
margin-right: 5px;
color:  #FF2525;
`
const  Weekly = styled.p`
color:  #FF2525;
margin-right: 60px;
`
const DownArrowRed = styled.svg`
height: 10px;
width: 10px;
margin-left: 5px;
color:  #FF2525;
`
const Chart1Container = styled.div`
width: 180px;
margin-left: 20%;
margin-top: -65px;
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
const Card5 = styled(Card1)`

`
const Card5TopContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 2px 20px 2px 10px;
align-items: center;
`
const Card5CallContainer = styled.div`
display: flex;
align-items: center;
margin-left: 15px;
`
const Card5divider = styled.div`
border: 1px dashed #D9D9D9;
margin: 15px 20px 0 0;
`
const Card5MiddleContainer = styled.div`
display: flex;
align-items: center;
margin: 15px;
`
const Card5BottomContainer = styled.div`

`
const CallerNum = styled.h4`
display: flex;
align-items: center;
`
const CallerImg = styled.svg`
width: 18px;
height: 18px;
margin: 5px;
`
const CallerID = styled.p`

`
const OutBoundCallTime = styled.p`
padding: 8px 10px;
background-color: #31980D;
margin: 0 10px;
color: #fff;
`
const InBoundCallTime = styled.p`
padding: 8px 10px;
background-color: #1982AF;
margin: 0 10px;
color: #fff;
`
const OutBoundCallSvg = styled.svg`
width: 18px;
height: 18px;
color: #31980D;
`
const InBoundCallSvg = styled.svg`
width: 18px;
height: 18px;
color: #1982AF;
`
const CallerName = styled.p`

`
const CallerIcon = styled.svg`
margin-right: 5px;
`
const Callminutes = styled.p`
margin-right: 5px;
display: flex;
align-items: center;
`
const Span = styled.span`
margin-left: 5px;
display: flex;
align-items: center;
`
const TableSvg = styled.svg`
width: 15px;
height: 15px;
color: #FF2525;
`

function HeadOfCrmDashboard() {

    const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '15%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: false,
                fontSize: '40',
                fontWeight: 'bold',
                color: ['#ffvd', '#defs']
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 20, name: 'Blocked' },
              { value: 32, name: 'Abandon' },
              { value: 52, name: 'All Calls' },
            ]
          }
        ]
      };
    
     const option1 = {
        series: [
          {
            type: 'gauge',
            progress: {
              show: true,
              width: 10
            },
            axisLine: {
              lineStyle: {
                width: 5
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              length: 4,
              lineStyle: {
                width: 1,
                color: '#999'
              }
            },
            axisLabel: {
              distance: 10,
              color: '#999',
              fontSize: 9
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 8,
              itemStyle: {
                borderWidth: 3
              }
            },
            title: {
              show: false
            },
            detail: {
              valueAnimation: true,
              fontSize: 15,
              offsetCenter: [0, '70%']
            },
            data: [
              {
                value: 65 
              },
            ]
          }
        ]
      };
      
    
      let navigate = useNavigate();
      const handleNavigate1 = () => {
        navigate('/hcrmdashboard/hcrmmissedcalls');
      }
      
      const handlePerformance = () => {
        navigate('/performance');
      }

      const [value, setValue] = React.useState<Date | null>(
        new Date(),
      );
    
      const handleChange = (newValue: Date | null) => {
        setValue(newValue);
      };
      const handleNavigate3 = () => {
        navigate('/hcrmreport/activeagent');
    }
    const handleLive = () => {
      navigate('/hcrmdashboard/livecall');
    }

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
            <Live>Live Dashboard</Live>
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
          <Grid container spacing={2}>
          <Grid item lg={3.5} md={3.5} sm={6} xs={12}>
          <CardContainer>
        <Card4>
        <MissedCall>Total Calls</MissedCall>
            <Calltime>
            <TimeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></TimeSvg>
              Last 8h
              </Calltime>
              <NumContainer>
            <Num style={{ color: '#980D69', marginLeft: 12 }}>155</Num>
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
          <Grid item lg={3.5} md={3.5} sm={6} xs={12}>
          <CardContainer>
        <Card4>
          <SLATopContainer>
        <MissedCall>SLA Limits</MissedCall>
        </SLATopContainer>
          <SLAInnerContainer>
            <Grid container>
            <Grid lg={8} md={8} sm={8} xs={8}>
            <StyledSLAP>
              Calls answered in less than 180 seconds
            </StyledSLAP>
            </Grid>
            <Grid lg={4} md={4} sm={4} xs={4}>
              <StyledSLAH3>40.8%</StyledSLAH3>
            </Grid>
            </Grid>
            </SLAInnerContainer>
        </Card4>
        </CardContainer>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}>
           <Grid container spacing={2}>
           <Grid item lg={6} md={6} sm={6} xs={6}>
           <CardContainer>
            <Card3 style={{backgroundColor: '#6C596C', marginTop: 0 }} onClick={handleNavigate3}>
            <ActiveInnerTopContainer>
            <MissedCall style={{ color: '#fff'}}>Active Agents</MissedCall>
            </ActiveInnerTopContainer>
            <Calltime>
            <TimeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></TimeSvg>
              Last 8h
              </Calltime>
              <Num style={{color: '#fff', textAlign: 'start', marginLeft: 15}}>121</Num>
            </Card3>
           </CardContainer>
           </Grid>
           <Grid item lg={6} md={6} sm={6} xs={6}>
           <Card3 style={{backgroundColor: 'rgba(255, 37, 37, 0.5)', marginTop: 15}}>
           <ActiveInnerTopContainer>
            <MissedCall style={{ color: '#fff'}}>On Queue</MissedCall>
            </ActiveInnerTopContainer>
            <Calltime>
            <TimeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></TimeSvg>
              Last 8h
              </Calltime>
              <Num style={{color: '#0E0AEE', textAlign: 'start', marginLeft: 15}}>21</Num>
          </Card3>
           </Grid>
          </Grid>
          </Grid>
          </Grid>
          <Grid container spacing={2}>
        <Grid item lg={6.5} md={6.5} sm={12} xs={12}>
          <CardContainer>
         <Card1>
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
            <MissedCall>Missed Calls</MissedCall>
            <Calltime>
            <TimeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></TimeSvg>
              Last 7h
              </Calltime>
            </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4}>
           <ChartContaner>
          <ReactECharts option={option} />
          </ChartContaner>
          </Grid>
          <Grid item lg={8} md={8} sm={8} xs={8}>
          <Grid container>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <InnerRightContaner>
          <Circle></Circle>
           <CallNo>20</CallNo>
           <IncomingCall>Blocked</IncomingCall>
           </InnerRightContaner>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4}>
          <InnerRightContaner>
          <Circle></Circle>
          <CallNo>32</CallNo>
           <IncomingCall>Abandon</IncomingCall>
           </InnerRightContaner>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4}>
          <InnerRightContaner>
          <Circle></Circle>
          <CallNo>52</CallNo>
           <IncomingCall>All</IncomingCall>
           </InnerRightContaner>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
           <BottomBar></BottomBar>
          </Grid>
          </Grid>
          </Grid>
          </Grid>
        </Card1>
         </CardContainer>
        </Grid>
        <Grid item lg={2} md={2} sm={4} xs={4}>
        <CardContainer>
        <Card2 style={{marginBottom: 10}} onClick={handleNavigate1}>
        <MissedCall style={{textAlign: 'center', marginLeft: 0}}>Missed Calls</MissedCall>
            <Calltime style={{textAlign: 'center', justifyContent: 'center', marginLeft: 0}}>
            <TimeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></TimeSvg>
              Last 8h
              </Calltime>
            <Num style={{color: '#FF2525'}}>25</Num>
        </Card2>
        </CardContainer>
        </Grid>
        <Grid item lg={3.5} md={3.5} sm={8} xs={8}>
        <CardContainer>
        <Card4>
        <MissedCall> Handled Calls</MissedCall>
            <Calltime>
            <TimeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></TimeSvg>
              Last 8h
              </Calltime>
            <Num style={{color: '#31980D', textAlign: 'start', marginLeft: 15}}>25</Num>
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
            <StyledH6>103</StyledH6>
            <StyledP>Prev. 24h
            </StyledP>
          </SmallCardInnerContainer>
          </SmallCardBottomContainer>
        </Card4>
        </CardContainer>
       </Grid>
       </Grid>
       <Grid container spacing={2}>
       <Grid item lg={3.5} md={3.5} sm={6} xs={12}>
        <CardContainer>
        <Card4>
        <MissedCall>Avg. Answer Time</MissedCall>
            <Calltime>
            <TimeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></TimeSvg>
              Last 8h
              </Calltime>
              <NumContainer>
            <Num style={{ textAlign: 'start', marginLeft: 15}}>00:02</Num>
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
        <Grid item lg={3.5} md={3.5} sm={6} xs={12}>
        <CardContainer>
        <Card4>
        <MissedCall> Hold on</MissedCall>
            <Calltime>
            <TimeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></TimeSvg>
              Live
              </Calltime>
            <Num style={{color: 'yellow', textAlign: 'start', marginLeft: 15}}>25</Num>
          <SmallCardBottomContainer>
          <SmallCardInnerContainer>
          <NegativePercentage>
          <NegativeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M10 26v-2h12.59L6 7.41L7.41 6L24 22.59V10h2v16H10z"/></NegativeSvg>
            -16%
          </NegativePercentage>
          <StyledP>Change</StyledP>
          </SmallCardInnerContainer>
          <DivDivider></DivDivider>
          <SmallCardInnerContainer>
            <StyledH6>4</StyledH6>
            <StyledP>Prev. 24h
            </StyledP>
          </SmallCardInnerContainer>
          </SmallCardBottomContainer>
        </Card4>
        </CardContainer>
        </Grid>
        <Grid item lg={1.5} md={1.5} sm={6} xs={0}>
      
        </Grid>
        <Grid item lg={3.5} md={3.5} sm={6} xs={12}>
        <CardContainer>
        <Card4>
        <MissedCall>Avg. Hold Time</MissedCall>
            <Calltime>
            <TimeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></TimeSvg>
              Last 8h
              </Calltime>
              <NumContainer>
              <Num style={{ textAlign: 'start', marginLeft: 15}}>00:52</Num>
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
        <Grid container spacing={1}>
       <Grid item lg={3.5} md={3.5} sm={6} xs={12}>
        <CardContainer style={{ marginLeft: '4%', marginRight: 0}}>
        <Card4>
        <MissedCall>Avg. Afterservice Time</MissedCall>
            <Calltime>
            <TimeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></TimeSvg>
              Last 7h
              </Calltime>
              <NumContainer>
              <Num style={{ textAlign: 'start', marginLeft: 15}}>03:02</Num>
            <MinMaxContainer>
            <Min>Min 01.01</Min>
            <Max>Max 03.21</Max>
            </MinMaxContainer>
            </NumContainer>
          <SmallCardBottomContainer>
          <SmallCardInnerContainer>
          <PositivePercentage>
          <PostiveSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6H10z"/></PostiveSvg>
            28%
          </PositivePercentage>
          <StyledP>Change</StyledP>
          </SmallCardInnerContainer>
          <DivDivider></DivDivider>
          <SmallCardInnerContainer>
            <StyledH6>01:04</StyledH6>
            <StyledP>Prev. 24h
            </StyledP>
          </SmallCardInnerContainer>
          </SmallCardBottomContainer>
        </Card4>
        </CardContainer>
        </Grid>
        <Grid item lg={3.5} md={3.5} sm={6} xs={12}>
        <CardContainer style={{ marginLeft: '4%', marginRight: 0}}>
        <Card4>
        <MissedCall>Avg. Handled Time</MissedCall>
            <Calltime>
            <TimeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></TimeSvg>
              Last 7h
              </Calltime>
              <NumContainer>
              <Num style={{ textAlign: 'start', marginLeft: 15}}>05:02</Num>
            <MinMaxContainer>
            <Min>Min 04.01</Min>
            <Max>Max 06.21</Max>
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
            <StyledH6>06:04</StyledH6>
            <StyledP>Prev. 24h
            </StyledP>
          </SmallCardInnerContainer>
          </SmallCardBottomContainer>
        </Card4>
        </CardContainer>
        </Grid>
        <Grid item lg={1.5} md={1.5} sm={6} xs={0}>
        
        </Grid>
        <Grid item lg={3.5} md={3.5} sm={12} xs={12}>
        <CardContainer style={{ marginLeft: '4%', marginRight: 0}}>
        <Card4>
          <TopinnerContainer>
        <MissedCall>Data</MissedCall>
        <InnerDate>
        <CalendarSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7v2H5a2 2 0 0 0-2 2zm16 14H5V8h14z"/></CalendarSvg>
          July 2022
          <DownArrowBlack xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/></DownArrowBlack>
          </InnerDate>
        </TopinnerContainer>
        <MiddleInnerContainer>
          <TotalTime>Total time speed</TotalTime>
          <Weekly>
          <RedTimeSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></RedTimeSvg>
            Weekly
            <DownArrowRed xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/></DownArrowRed>
            </Weekly>
          </MiddleInnerContainer>
          <Chart1Container>
          <ReactECharts option={option1} />
          </Chart1Container>
        </Card4>
        </CardContainer>
        </Grid>
        </Grid>
       </Grid>
       <Grid container spacing={2}>
       <Grid item lg={4} md={4} sm={6} xs={12}>
        <CardContainer>
          <Card5 onClick={handleLive}>
          <Card5TopContainer>
            <CallerNum>
            <CallerImg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12A10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36a7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8a8.1 8.1 0 0 1 8 8a8 8 0 0 1-2.39 5.64z"/><path fill="currentColor" d="M12 6a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2a1.91 1.91 0 0 1 2-2a1.91 1.91 0 0 1 2 2a1.91 1.91 0 0 1-2 2z"/></CallerImg>
              +02-220.10.59
              </CallerNum>
            <CallerID>#31000</CallerID>
            </Card5TopContainer>
              <Grid container>
              <Grid item lg={6} md={6} sm={6} xs={12}>
              <Card5CallContainer>
              <OutBoundCallSvg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4m11 0v1.5h3.5L13 10l1 1l5.5-5.5V9H21V3h-6Z"/></OutBoundCallSvg>
              <OutBoundCallTime>01:24:36</OutBoundCallTime>
              <TableSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"/></TableSvg>
              </Card5CallContainer>
              </Grid>
              </Grid>
              <Card5divider></Card5divider>
              <Grid container>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                <Card5MiddleContainer>
                <CallerName>Lucy David</CallerName>
              </Card5MiddleContainer>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                <Card5MiddleContainer>
                  <Callminutes>
                  <CallerIcon xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"/></CallerIcon>
                    <strong>Calls:</strong>
                    <Span>
                    <CallerIcon xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></CallerIcon>
                    Last 2h
                    </Span>
                    </Callminutes>
                </Card5MiddleContainer>
                </Grid>
              </Grid>
          </Card5>
        </CardContainer>
       </Grid>
       <Grid item lg={4} md={4} sm={6} xs={12}>
        <CardContainer>
          <Card5>
          <Card5TopContainer>
            <CallerNum>
            <CallerImg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12A10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36a7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8a8.1 8.1 0 0 1 8 8a8 8 0 0 1-2.39 5.64z"/><path fill="currentColor" d="M12 6a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2a1.91 1.91 0 0 1 2-2a1.91 1.91 0 0 1 2 2a1.91 1.91 0 0 1-2 2z"/></CallerImg>
              +02-220.10.59
              </CallerNum>
            <CallerID>#31000</CallerID>
            </Card5TopContainer>
              <Grid container>
              <Grid item lg={6} md={6} sm={6} xs={12}>
              <Card5CallContainer>
              <InBoundCallSvg  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m15.73 14.85l-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61zM18 9h-2.59l5.02-5.02l-1.41-1.41L14 7.59V5h-2v6h6z"/></InBoundCallSvg>
              <InBoundCallTime>01:24:36</InBoundCallTime>
              <TableSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"/></TableSvg>
              </Card5CallContainer>
              </Grid>
              </Grid>
              <Card5divider></Card5divider>
              <Grid container>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                <Card5MiddleContainer>
                <CallerName>Lucy David</CallerName>
              </Card5MiddleContainer>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                <Card5MiddleContainer>
                  <Callminutes>
                  <CallerIcon xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"/></CallerIcon>
                    <strong>Calls:</strong>
                    <Span>
                    <CallerIcon xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></CallerIcon>
                    Last 2h
                    </Span>
                    </Callminutes>
                </Card5MiddleContainer>
                </Grid>
              </Grid>
          </Card5>
        </CardContainer>
       </Grid>
       <Grid item lg={4} md={4} sm={6} xs={12}>
        <CardContainer>
          <Card5>
          <Card5TopContainer>
            <CallerNum>
            <CallerImg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12A10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36a7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8a8.1 8.1 0 0 1 8 8a8 8 0 0 1-2.39 5.64z"/><path fill="currentColor" d="M12 6a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2a1.91 1.91 0 0 1 2-2a1.91 1.91 0 0 1 2 2a1.91 1.91 0 0 1-2 2z"/></CallerImg>
              +02-220.10.59
              </CallerNum>
            <CallerID>#31000</CallerID>
            </Card5TopContainer>
              <Grid container>
              <Grid item lg={6} md={6} sm={6} xs={12}>
              <Card5CallContainer>
              <OutBoundCallSvg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4m11 0v1.5h3.5L13 10l1 1l5.5-5.5V9H21V3h-6Z"/></OutBoundCallSvg>
              <OutBoundCallTime>01:24:36</OutBoundCallTime>
              <TableSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"/></TableSvg>
              </Card5CallContainer>
              </Grid>
              </Grid>
              <Card5divider></Card5divider>
              <Grid container>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                <Card5MiddleContainer>
                <CallerName>Lucy David</CallerName>
              </Card5MiddleContainer>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                <Card5MiddleContainer>
                  <Callminutes>
                  <CallerIcon xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"/></CallerIcon>
                    <strong>Calls:</strong>
                    <Span>
                    <CallerIcon xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></CallerIcon>
                    Last 2h
                    </Span>
                    </Callminutes>
                </Card5MiddleContainer>
                </Grid>
              </Grid>
          </Card5>
        </CardContainer>
       </Grid>
       <Grid item lg={4} md={4} sm={6} xs={12}>
        <CardContainer style={{marginTop: 3}}>
          <Card5>
          <Card5TopContainer>
            <CallerNum>
            <CallerImg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12A10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36a7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8a8.1 8.1 0 0 1 8 8a8 8 0 0 1-2.39 5.64z"/><path fill="currentColor" d="M12 6a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2a1.91 1.91 0 0 1 2-2a1.91 1.91 0 0 1 2 2a1.91 1.91 0 0 1-2 2z"/></CallerImg>
              +02-220.10.59
              </CallerNum>
            <CallerID>#31000</CallerID>
            </Card5TopContainer>
              <Grid container>
              <Grid item lg={6} md={6} sm={6} xs={12}>
              <Card5CallContainer>
              <InBoundCallSvg  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m15.73 14.85l-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61zM18 9h-2.59l5.02-5.02l-1.41-1.41L14 7.59V5h-2v6h6z"/></InBoundCallSvg>
              <InBoundCallTime>01:24:36</InBoundCallTime>
              <TableSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"/></TableSvg>
              </Card5CallContainer>
              </Grid>
              </Grid>
              <Card5divider></Card5divider>
              <Grid container>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                <Card5MiddleContainer>
                <CallerName>Lucy David</CallerName>
              </Card5MiddleContainer>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                <Card5MiddleContainer>
                  <Callminutes>
                  <CallerIcon xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"/></CallerIcon>
                    <strong>Calls:</strong>
                    <Span>
                    <CallerIcon xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></CallerIcon>
                    Last 2h
                    </Span>
                    </Callminutes>
                </Card5MiddleContainer>
                </Grid>
              </Grid>
          </Card5>
        </CardContainer>
       </Grid>
       <Grid item lg={4} md={4} sm={6} xs={12}>
        <CardContainer style={{marginTop: 3}}>
          <Card5>
          <Card5TopContainer>
            <CallerNum>
            <CallerImg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12A10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36a7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8a8.1 8.1 0 0 1 8 8a8 8 0 0 1-2.39 5.64z"/><path fill="currentColor" d="M12 6a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2a1.91 1.91 0 0 1 2-2a1.91 1.91 0 0 1 2 2a1.91 1.91 0 0 1-2 2z"/></CallerImg>
              +02-220.10.59
              </CallerNum>
            <CallerID>#31000</CallerID>
            </Card5TopContainer>
              <Grid container>
              <Grid item lg={6} md={6} sm={6} xs={12}>
              <Card5CallContainer>
              <OutBoundCallSvg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4m11 0v1.5h3.5L13 10l1 1l5.5-5.5V9H21V3h-6Z"/></OutBoundCallSvg>
              <OutBoundCallTime>01:24:36</OutBoundCallTime>
              <TableSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"/></TableSvg>
              </Card5CallContainer>
              </Grid>
              </Grid>
              <Card5divider></Card5divider>
              <Grid container>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                <Card5MiddleContainer>
                <CallerName>Lucy David</CallerName>
              </Card5MiddleContainer>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                <Card5MiddleContainer>
                  <Callminutes>
                  <CallerIcon xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"/></CallerIcon>
                    <strong>Calls:</strong>
                    <Span>
                    <CallerIcon xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></CallerIcon>
                    Last 2h
                    </Span>
                    </Callminutes>
                </Card5MiddleContainer>
                </Grid>
              </Grid>
          </Card5>
        </CardContainer>
       </Grid>
       <Grid item lg={4} md={4} sm={6} xs={12}>
        <CardContainer style={{marginTop: 3}}>
          <Card5>
          <Card5TopContainer>
            <CallerNum>
            <CallerImg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12A10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36a7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8a8.1 8.1 0 0 1 8 8a8 8 0 0 1-2.39 5.64z"/><path fill="currentColor" d="M12 6a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2a1.91 1.91 0 0 1 2-2a1.91 1.91 0 0 1 2 2a1.91 1.91 0 0 1-2 2z"/></CallerImg>
              +02-220.10.59
              </CallerNum>
            <CallerID>#31000</CallerID>
            </Card5TopContainer>
              <Grid container>
              <Grid item lg={6} md={6} sm={6} xs={12}>
              <Card5CallContainer>
              <InBoundCallSvg  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m15.73 14.85l-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61zM18 9h-2.59l5.02-5.02l-1.41-1.41L14 7.59V5h-2v6h6z"/></InBoundCallSvg>
              <InBoundCallTime>01:24:36</InBoundCallTime>
              <TableSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"/></TableSvg>
              </Card5CallContainer>
              </Grid>
              </Grid>
              <Card5divider></Card5divider>
              <Grid container>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                <Card5MiddleContainer>
                <CallerName>Lucy David</CallerName>
              </Card5MiddleContainer>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                <Card5MiddleContainer>
                  <Callminutes>
                  <CallerIcon xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"/></CallerIcon>
                    <strong>Calls:</strong>
                    <Span>
                    <CallerIcon xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 7h2v5h5v2H9V7Z"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd"/></g></CallerIcon>
                    Last 2h
                    </Span>
                    </Callminutes>
                </Card5MiddleContainer>
                </Grid>
              </Grid>
          </Card5>
        </CardContainer>
       </Grid>
       </Grid>
       </CardWrapper>
       </Grid>
       </Grid>
         </StyledBox>
    </>
  )
}

export default HeadOfCrmDashboard