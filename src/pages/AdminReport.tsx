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
//import { Icon } from '@iconify/react';
import { NavLink } from "react-router-dom";
import AdminTopBar from '../components/AdminTopBar';
import AdminSideBar from '../components/AdminSideBar';

const StyledBox = styled(Box)`
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
const TopContainer = styled.div`
margin: 20px 15px;
display: flex;
align-items: center;
`
const ReportHeader = styled.h3`
text-align: start;
margin: 30px 0 20px 15px;
`
const LeftContainer = styled.div`

`
const LeftBodyContainer = styled.div`
border: 1px solid #c4c4c4;
margin: 15px 10px 0 20px;
padding-bottom: 100px;
`
const RightContainer = styled.div`
border: 1px solid #c4c4c4;
margin: 15px 10px 0 20px;
`
const User = styled.h4`
display: flex;
color: #494949;
`
const UserSvg = styled.svg`
width: 18px;
height: 18px;
margin-right: 5px;
color: #494949;
`
const SeeAnother = styled.p`
margin-left: 5%;
border: 1px solid #FF2525;
color: #FF2525;
font-weight: bold;
padding: 5px;
cursor: pointer;
`
const UserCategory = styled.p`
margin-top: -30px;
font-weight: 600;
text-align: start;
margin-left: 45px;
`
const NameContainer = styled.div`
border-bottom: 1px solid #c4c4c4;
padding: 5px 10px 0 10px;
`
const Details = styled.p`
text-align: start;
margin: 10px 0 20px 0;
font-weight: 600;
`
const DetailsHeading = styled.p`
text-align: start;
margin-bottom: 0;
`
const Name = styled.p`
text-align: start;
font-weight: 600;
margin: 5px 0 2px 0;
`
const Email = styled.p`
text-align: start;
font-weight: 600;
margin: 5px 0 2px 0;
`
const Phone = styled.p`
text-align: start;
font-weight: 600;
margin: 5px 0 2px 0;
display: flex;
align-content: center;
`
const Location = styled.p`
text-align: start;
font-weight: 600;
margin: 5px 0 2px 0;
`
const Position = styled.p`
text-align: start;
font-weight: 600;
margin: 5px 0 2px 0;
`
const Status = styled.p`
text-align: start;
font-weight: 600;
margin: 5px 0 2px 0;
`
const HistoryContainer = styled.div`
border-bottom: 1px solid #c4c4c4;
padding: 10px 10px 10px 15px;
`
const History = styled.p`
text-align: start;
margin: 5px 0 2px 0;
`
const InnerHeadingContainer = styled.div`
background-color: #FF2525;
display: flex;
justify-content: space-between;
margin: 10px 15px;
`
const InnerContact = styled.p`
color: #fff;
margin: 10px;
`
const HistoryDetailsContainer = styled.div`
border: 1px solid #c4c4c4;
margin: 15px;
`
const Datetime = styled.p`
text-align: start;
margin: 8px 0;
font-size: 0.9rem;
`
const ResponseContainer = styled.div`
border: 0.5px solid #c4c4c4;
margin-bottom: 15px;
margin-left: 12px;
`
const Respponse = styled.p`
text-align: start;
font-size: 0.8rem;
margin: 5px 2px;

`
const StyledP = styled.p`
text-align: start;
font-weight: 600;
margin: 5px 15px;
font-size: 0.8rem;
`
const CallIcon1 = styled.svg`
height: 15px;
width: 15px;
color: #31980D;
margin-right: 5px;
`
const ChatAndInfo = styled.p`
margin-left: 15px;
margin-bottom: 2px;
cursor: pointer;
`
const Info = styled.p`

`
const Divider = styled.div`
border-bottom: 0.5px solid #c4c4c4;
`
const ChatName = styled.p`
text-align: start;
margin-left: 15px;

`
const ChatTime = styled.p`
`
const Chat = styled.p`
text-align: start;
margin-left: 15px;
`
const Ticket = styled.p`
text-align: start;
margin-left: 15px;
font-weight: 600;
`
const Span = styled.span`
font-weight: 300;
`
const TicketTime = styled.p`
text-align: start;
margin-left: 15px;
`
const TicketBody = styled.p`
text-align: start;
margin-left: 15px;
font-weight: 600;
`


function AdminReport() {

  const [toggle, setToggle] = useState(false)

    const [value, setValue] = React.useState<Date | null>(
        new Date(),
      );

    let navigate = useNavigate();
  const handleNavigate = () => {
      navigate('/employees');
  }
  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <>
    <AdminTopBar />
    <StyledBox>
    <BackArrowContainer onClick={handleNavigate}>
   <BackArrowSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/></BackArrowSvg>
   </BackArrowContainer>
    <Grid container>
    <Grid item lg={2} md={2} sm={2} xs={3}>
        <AdminSideBar />
         </Grid>
         <Grid item lg={10} md={10} sm={10} xs={9}>
        <Grid container>
         <Grid item lg={5} md={5} sm={5} xs={12}>
         <ReportHeader>User Profile</ReportHeader>
         <LeftContainer>
          <TopContainer>
          <User>
          <UserSvg xmlns="http://www.w3.org/2000/svg" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="none" d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"/><path fill="currentColor" d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"/></UserSvg>
            Lucy Davies
          </User>
          <SeeAnother>See Another</SeeAnother>
          </TopContainer>
          <UserCategory>Agent</UserCategory>
          <LeftBodyContainer>
           <NameContainer>
           <Details>Personal Details</Details>
           <DetailsHeading>Name</DetailsHeading>
           <Name>Lucy Davies</Name>
           </NameContainer>
           <NameContainer>
           <DetailsHeading>Email</DetailsHeading>
           <Email>lucydavies@gmail.com</Email>
           </NameContainer>
           <NameContainer>
           <DetailsHeading>Phone</DetailsHeading>
           <Phone>081-22-041-09</Phone>
           </NameContainer>
           <NameContainer>
           <DetailsHeading>Location</DetailsHeading>
           <Location>Abuja, Nigeria</Location>
           </NameContainer>
           <NameContainer>
           <DetailsHeading>Position</DetailsHeading>
           <Position>Customer Service Agent</Position>
           </NameContainer>
           <NameContainer>
           <DetailsHeading>Status</DetailsHeading>
           <Status>Active</Status>
           </NameContainer>
          </LeftBodyContainer>
          </LeftContainer>
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={12}>
          <RightContainer>
          <HistoryContainer>
            <History>Conversation History</History>
          </HistoryContainer>
          <LocalizationProvider dateAdapter={AdapterMoment}>
         <Stack spacing={3} style={{width: 150, margin: 15}} >
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
         <InnerHeadingContainer>
         <InnerContact>Contact</InnerContact>
         <InnerContact>Agents</InnerContact>
         <InnerContact>Closed</InnerContact>
         </InnerHeadingContainer>
          <HistoryDetailsContainer>
            <Grid container>
            <Grid item lg={4} md={4} sm={4} xs={4}>
            <Email style={{  marginLeft: 10}}>bukola@easy.com</Email>
            <Datetime style={{  marginLeft: 10, marginBottom: 20}}>26-7-2022 12:11:10</Datetime>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
            <Name style={{ textAlign: 'center'}}>Lucy Davies</Name>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
            <Name style={{ textAlign: 'end', marginRight: 10}}>John Umoh</Name>
            <Datetime style={{ textAlign: 'end', marginRight: 10}}>26-7-2022 12:41:10</Datetime>
            </Grid>
            </Grid>
            <Grid container>
            <Grid item lg={5} md={5} sm={5} xs={5}>
             <ResponseContainer>
                <Grid container>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                <Respponse>First response Time</Respponse>
                <StyledP>00:05</StyledP>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                <Respponse> Resolution Time</Respponse>
                <StyledP>---</StyledP>
                </Grid>
                </Grid>
             </ResponseContainer>
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2}>
             <StyledP>Insurance</StyledP>
             <StyledP>Bills</StyledP>
            </Grid>
            </Grid>
          </HistoryDetailsContainer>
          <HistoryDetailsContainer>
            <Grid container>
            <Grid item lg={4} md={4} sm={4} xs={4}>
            <Phone style={{  marginLeft: 10}}>
            <CallIcon1 xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4m11 0v1.5h3.5L13 10l1 1l5.5-5.5V9H21V3h-6Z"/></CallIcon1>
                081-22-041-09</Phone>
            <Datetime style={{  marginLeft: 10, marginBottom: 20}}>26-7-2022 12:11:10</Datetime>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
            <Name style={{ textAlign: 'center'}}>Lucy Davies</Name>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
            <Name style={{ textAlign: 'end', marginRight: 10}}>John Umoh</Name>
            <Datetime style={{ textAlign: 'end', marginRight: 10}}>26-7-2022 12:41:10</Datetime>
            </Grid>
            </Grid>
            <Grid container>
            <Grid item lg={5} md={5} sm={5} xs={5}>
             <ResponseContainer>
                <Grid container>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                <Respponse>First response Time</Respponse>
                <StyledP>00:05</StyledP>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                <Respponse> Resolution Time</Respponse>
                <StyledP>---</StyledP>
                </Grid>
                </Grid>
             </ResponseContainer>
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2}>
             <StyledP>Insurance</StyledP>
             <StyledP>Bills</StyledP>
            </Grid>
            </Grid>
          </HistoryDetailsContainer>
          <Grid container>
          <Grid item lg={1} md={1} sm={1} xs={1}>
          <ChatAndInfo style={{ color: !toggle ? "#FF2525" : '', borderBottom: !toggle ? "1px solid #FF2525" : ''}} onClick={handleToggle}>Chat</ChatAndInfo>
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1}>
          <ChatAndInfo style={{ color: toggle ? "#FF2525" : '', borderBottom: toggle ? "1px solid #FF2525" : ''}} onClick={handleToggle}>Info</ChatAndInfo>
         </Grid>
          </Grid>
          <Divider></Divider>
          {!toggle && ( 
                     <><Grid container>
                      <Grid item lg={7} md={7} sm={7} xs={7}>
                        <ChatName>Lucky Davies</ChatName>
                        <Chat>I need to upgarde the current state of my insurance pla, please, how do i go about it? urgent response please. regards.</Chat>
                      </Grid>
                      <Grid item lg={1} md={1} sm={1} xs={1}>
                        <ChatTime>11:44</ChatTime>
                      </Grid>
                    </Grid><Grid container>
                        <Grid item lg={7} md={7} sm={7} xs={7}>
                          <Chat>@John Umoh Pleasetreat this immediatley</Chat>
                        </Grid>
                        <Grid item lg={1} md={1} sm={1} xs={1}>
                          <ChatTime>11:46</ChatTime>
                        </Grid>
                      </Grid><Grid container>
                        <Grid item lg={7} md={7} sm={7} xs={7}>
                          <Chat>Please can i know the insurance plan you want to switch to? KIndly send in your details. Regards.</Chat>
                        </Grid>
                      </Grid></>
          )}
          { toggle && ( 
          <>
          <Ticket>Ticket generated fo Victor Davies <Span>#31055</Span></Ticket>
          <TicketTime>11:44</TicketTime>
          <TicketBody>Urgently needd to change insurance plan</TicketBody>
          </>
          )}
          </RightContainer>
         </Grid>
          </Grid>
          </Grid>
          </Grid>
          </StyledBox>
    </>
  )
}

export default AdminReport