import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import AgentTopBar from '../components/AgentTopBar';
import AgentSideBar from '../components/AgentSideBar';
import React, { Component } from 'react';
import ReactECharts from 'echarts-for-react';
import { useNavigate } from "react-router-dom";



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
transition: transform 0.3s;
:hover{
    elevate: 0.1px;
    transform: scale(1.02);
}
`
const Card2 = styled(Card1)`
border: 2px solid #FF2525;
height: 160px;
width: 100%;
@media only screen and (max-width: 860px) {
  width: 100%;
}

box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`
const Card3 = styled(Card1)`
height: 100px;
margin-top: -12px;
width: 100%;
border: 2px solid #25FFCB;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`
const Card4 = styled(Card1)`
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

function AgentDashboard() {
 
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
          { value: 18, name: 'Missed Calls' },
          { value: 82, name: 'All Calls' },
        
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
    navigate('/missedcalls');
  }
  
  const handleNavigate2 = () => {
    navigate('/queuecalls');
  }
  
  return (
    <>
        <AgentTopBar />
        <StyledBox>
        <Grid container>
        <Grid item lg={2} md={2} sm={2} xs={3}>
        <AgentSideBar />
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
        <CardContainer>
        <Card3 onClick={handleNavigate2}>
        <MissedCall style={{textAlign: 'center', marginLeft: 0, marginTop: 10}}>On Queue</MissedCall>
        <Num style={{color: '#25FFCB', marginTop: 10}}>25</Num>
        </Card3>
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
       </CardWrapper>
       </Grid>
       </Grid>
         </StyledBox>
    </>
  )
}

export default AgentDashboard