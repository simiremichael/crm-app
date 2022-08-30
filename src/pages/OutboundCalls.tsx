import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import AgentTopBar from '../components/AgentTopBar';
import AgentSideBar from '../components/AgentSideBar';
import { useNavigate } from "react-router-dom";


const StyledBox = styled(Box)`
`
const StyledGrid = styled(Grid)`
height: 100%;
`
const NavBar = styled.div`
height: 60px
`
const RightNavContainer = styled.div`
background-color: #C4C4C4;
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
box-sizing: border-box;
border: 1px solid rgba(0, 0, 0, 0.2);
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
`
const LeftNavContainer = styled.div`
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.2);
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
`
const Logo = styled.img`
width: 3.3rem;
padding-top: 3px;
cursor: pointer;
`
const BackArrowContainer = styled.div`
margin-left: 30px;
display: flex;
align-items: center;
cursor: pointer;
`
const BackArrowSvg = styled.svg`
width: 35px;
height: 30px;
`
const UserContainer = styled.div`
height: 100%;
display: flex;
justify-content: end;
margin-right: 8%;
align-items: center;
`
const User = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 19px;
color: rgba(0, 0, 0, 0.7);
`
const UserIcon = styled.svg`
width: 18px;
margin-right: 10px;
fill: rgba(0, 0, 0, 0.7);
`
const Online = styled.p`
color: #31980D;
margin-right: 15px;
`
const SideBarContainer = styled.div`
width: 100%;
height: 100vh;
left: 0px;
top: 0px;
background-color: rgba(255, 37, 37, 0.5);
border-right: 1px solid rgba(0, 0, 0, 0.1);
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`
const DashboardSvg = styled.svg`
width: 18px;
margin-right: 5px;
`
const Dashboard = styled.h3`
margin: 0;
font-family: Montserrat;
padding-top: 50px;
display: flex;
align-items: center;
justify-content: center;
`
const Log = styled.p`
font-family: Montserrat;
display: flex;
align-items: center;
justify-content: center;;
font-weight: 700;
font-size: 20px;
line-height: 20px;
letter-spacing: -0.005em;
cursor: pointer;
padding-top: 10px;
margin-left: -50px;
`
const LogSvg = styled.svg`
width: 18px;
height: 18px;
margin-right: 5px;
`
const Report = styled.p`
font-family: Montserrat;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
font-size: 20px;
line-height: 20px;
letter-spacing: -0.005em;
cursor: pointer;
padding-top: 10px;
margin-left: -25px;
`
const ReportSvg = styled.svg`
width: 18px;
height: 18px;
margin-right: 5px;
`
const LogoutSvg = styled.svg`
width: 18px;
margin-right: 5px;
`
const Logout = styled.p`
font-family: Montserrat;
padding-top: 50px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
font-size: 20px;
line-height: 20px;
letter-spacing: -0.005em;
margin-top: calc(100% + 80px);
cursor: pointer;
`
const Heading = styled.h3`
text-align: start;
font-family: montserrat;
font-weight: bold;
`
const TopContainer = styled.div`
margin-left: 18px;
`
const CallWrapContainer = styled.div`
display: flex;
align-items: center;
cursor: pointer;
`
const Inbound = styled.p`
font-family: montserrat;
display: flex;
align-items: center;
`
const Outbound = styled.p`
font-family: montserrat;
display: flex;
align-items: center;
`
const Message = styled.p`
font-family: montserrat;
display: flex;
align-items: center;
`
const Create = styled.p`
font-family: montserrat;
color: #FF2525;
`
const TopDivider = styled.div`
border: 1px solid #c4c4c4;
`
const CallIconContainer1 = styled.div`
background-color: rgba(25, 130, 175, 0.28);
margin-right: 10px;
padding: 8px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: enter;
`
const CallIconContainer2 = styled(CallIconContainer1)`
background-color: rgba(49, 152, 13, 0.28);
`
const CallIcon1 = styled.svg`
color: #1982AF;
margin: 0;
height: 24px;
width: 24px;
`
const CallIcon2 = styled(CallIcon1)`
color: #31980D;
margin: 0;
`
const CallIconContainer3 = styled(CallIconContainer1)`
background-color: #C4C4C4;
`
const CallIcon3 = styled(CallIcon1)`
color: #000;
margin: 0;
`
const FormContainer = styled.div`
margin: 80px 18px 0 18px;
`
const EnterContainer = styled.div`
display: flex;
margin: 20px 0 0 18px;
`
const EnterButton = styled.button`
height: 44px;
width: 220px;
border: none;
outline: none;
background-color: #FF2525;
color: #fff;
font-weight: bold;
border-radius: 5px;
cursor: pointer;
`
const SelectAgentContainer = styled.div`
display: flex;
align-items: center;
`
const Transfer = styled.p`
margin-right: 15px;
width: 120px;
text-align: start;
`
const UserSvg = styled.svg`
width: 18px;
height: 18px;
margin-right: 5px;
`
const MakeAndTakeCallsContainer = styled.div`
width: 360px;
height: 310px;
position: relative;
z-index: 1001;
border: 1px solid #C4C4C4;
margin-top: -363px;
border-radius: 5px;
margin-left: 744px;
background-color: #fff;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`
const InBoundCall = styled.h3`
color: #1982AF;
`
const CallMenuSvg = styled.svg`
width: 35px;
height: 35px;
`
const MenuBtn = styled.button`
z-index: 10002;
margin-left: 300px;
margin-top: -45px;
position: relative;
display: block;
background-color: #fff;
border: none;
outline: none;
cursor: pointer;
`
const MenuDropDown = styled.div`
display: block;
margin-left: 30px;
`
const DropDownItems = styled.p`
font-size: 0.9rem;
font-family: montserrat;
text-align: start;
cursor: pointer;
margin-bottom: -8px;
:hover{
  font-weight: bold;
}
`
const CallerImg = styled.svg`
height: 35px;
width: 35px;
color: #494949;
`
const CallNum = styled.p`
margin: 0;
`
const AcceptCalls = styled.button`
height: 40px;
width: 40px;
border-radius: 50px;
outline: none;
border: none;
background: #1DC14B;
display: flex;
align-items: center;
justify-content: center;
margin: 20px 10px 0 10px;
cursor: pointer;
`
const Record = styled.button`
height: 40px;
width: 40px;
border-radius: 50px;
outline: none;
border: none;
background: #FF9090;
display: flex;
align-items: center;
justify-content: center;
margin: 20px 10px 0 10px;
cursor: pointer;
`
const EndCalls = styled.button`
height: 40px;
width: 40px;
border-radius: 50px;
outline: none;
border: none;
background: #B01010;
display: flex;
align-items: center;
justify-content: center;
margin: 20px 10px 0 10px;
cursor: pointer;
`
const Mute = styled.button`
height: 40px;
width: 40px;
border-radius: 50px;
outline: none;
border: none;
background: #1982AF;
display: flex;
align-items: center;
justify-content: center;
margin: 0 10px 0 10px;
cursor: pointer;
`
const Hold = styled.button`
height: 40px;
width: 40px;
border-radius: 50px;
outline: none;
border: none;
background: #FFC03D;
display: flex;
align-items: center;
justify-content: center;
margin: 0 10px 0 10px;
cursor: pointer;
`
const CallTransfer = styled.button`
height: 40px;
width: 40px;
border-radius: 50px;
outline: none;
border: none;
background: #635757;
display: flex;
align-items: center;
justify-content: center;
margin: 0 10px 0 10px;
cursor: pointer;
`
const InboundSvg = styled.svg`
height: 25px;
width: 25px;
color: #fff;
`
const InboundSvg1 = styled.svg`
height: 25px;
width: 25px;
color: #FF2525;
`
const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content:center;
margin-top: 20px;
`
const ButtonText = styled.p`
font-size: 0.8rem;
margin: 0 16px 0 15px;
`
const TransferSvg = styled.svg`
width: 10px;
height: 10px;
margin-left: 5px;
`
const TableContainer = styled.div`
margin: 80px 18px 80px 18px;
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
const BackArrowContainer2 = styled.div`
margin-left: 30px;
display: flex;
align-items: center;
cursor: pointer;
pasition: relative;
z-index: 1002;
margin: -45px 0 15px 260px;
`
const BackArrowSvg2 = styled.svg`
width: 35px;
height: 30px;
`

function OutboundCalls() {

  const [issues, setIssues] = React.useState('');
  const [sub, setSub] = React.useState('');
  const [list, setList] = useState(false);

  const handleSub = (event: SelectChangeEvent) => {
    setSub(event.target.value as string);
  };
  const handleIssues = (event: SelectChangeEvent) => {
    setIssues(event.target.value as string);
  };

const handleList = () => {
  setList(!list);
}
let navigate = useNavigate();
const handleNavigate1 = () => {
    navigate('/logs');
}

const handleNavigate2 = () => {
    navigate('/logs');
}

const handleNavigate3 = () => {
    navigate('/logs/messages');
}
  return (
    <>
   <AgentTopBar />
   <StyledBox>
   <BackArrowContainer2 onClick={handleNavigate1}>
   <BackArrowSvg2 xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/></BackArrowSvg2>
   </BackArrowContainer2>
        <Grid container>
        <Grid item lg={2} md={2} sm={2} xs={3}>
        <AgentSideBar />
         </Grid>
         <Grid item  lg={10} md={10} sm={10} xs={9}>
          <TopContainer>
        <Heading>Log</Heading>
         <Grid container>
        <Grid item  lg={2} md={2} sm={2} xs={6}>
          <CallWrapContainer onClick={handleNavigate2}>
        <CallIconContainer1><CallIcon1 xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4m11 0v1.5h3.5L13 10l1 1l5.5-5.5V9H21V3h-6Z"/></CallIcon1></CallIconContainer1>
        <Inbound>
         Inbound calls
          </Inbound>
          </CallWrapContainer>
        </Grid>
        <Grid item  lg={2} md={2} sm={2} xs={6}>
        <CallWrapContainer style={{borderBottom: '2px solid #31980D'}}>
        <CallIconContainer2>
        <CallIcon2 xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4m15 8V9.5h-3.5L21 4l-1-1l-5.5 5.5V5H13v6h6Z"/></CallIcon2>
        </CallIconContainer2>
         <Outbound>
          Outbound calls
          </Outbound>
          </CallWrapContainer>
        </Grid>
        <Grid item  lg={2} md={2} sm={2} xs={6}>
        <CallWrapContainer onClick={handleNavigate3}>
        <CallIconContainer3><CallIcon3 xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="-2 -2.5 24 24"><path fill="currentColor" d="M3.656 17.979A1 1 0 0 1 2 17.243V15a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8.003l-4.347 2.979zm.844-3.093a.536.536 0 0 0 .26-.069l2.355-1.638A1 1 0 0 1 7.686 13H12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5c0 .54.429.982 1 1c.41.016.707.083.844.226c.128.134.135.36.156.79c.003.063.003.177 0 .37a.5.5 0 0 0 .5.5zm11.5-4.87a7.136 7.136 0 0 0 0 .37v-.37c.02-.43.028-.656.156-.79c.137-.143.434-.21.844-.226c.571-.018 1-.46 1-1V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5V2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2v2.243a1 1 0 0 1-1.656.736L16 13.743v-3.726z"/></CallIcon3></CallIconContainer3>
         <Message>
          Messages
          </Message>
          </CallWrapContainer>
        </Grid>
        <Grid item  lg={2} md={2} sm={2} xs={6}>
        
        </Grid>
        <Grid item  lg={4} md={4} sm={4} xs={12}>
         
        </Grid>
         </Grid>
         </TopContainer>
         <TopDivider></TopDivider>
         <FormContainer>
         <Grid container spacing={3}>
         <Grid item  lg={3.5} md={3.5} sm={3.5} xs={12}>
         <TextField size='small' fullWidth id="outlined-basic" label="Caller ID" variant="outlined" />
         </Grid>
         <Grid item  lg={3.5} md={3.5} sm={3.5} xs={12}>
         <TextField size='small' fullWidth id="outlined-basic" label="Caller" variant="outlined" />
        </Grid>
        <Grid item  lg={5} md={5} sm={5} xs={12}></Grid>
        <Grid item  lg={3.5} md={3.5} sm={3.5} xs={12}>
        <TextField size='small' fullWidth id="outlined-basic" label="Location" variant="outlined" />
         </Grid>
         <Grid item  lg={3.5} md={3.5} sm={3.5} xs={12}>
         <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label">Issues</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={issues}
          label="Issues"
          onChange={handleIssues}
        >
          <MenuItem value='Insurance'>Insurance</MenuItem>
          <MenuItem value='Bills'>Bills</MenuItem>
          <MenuItem value='Accident'>Accident</MenuItem>
          <MenuItem value='Lost ID'>Lost ID</MenuItem>
          <MenuItem value='Riders Misbehaviour'>Riders Misbehaviour</MenuItem>
          <MenuItem value='Others'>Others</MenuItem>
        </Select>
      </FormControl>

        </Grid>
        <Grid item  lg={5} md={5} sm={5} xs={12}></Grid>
        <Grid item  lg={3.5} md={3.5} sm={3.5} xs={12}>
        <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder="Comment"
      style={{ borderRadius: 5, width: '98%', borderBlockColor:' #C4C4C4', outlineColor: 'royalblue' }}
    />
         </Grid>
         <Grid item  lg={3.5} md={3.5} sm={3.5} xs={12}>
         <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label">Subscription</InputLabel>
        <Select style={{textAlign: 'start',}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sub}
          label="Subscription"
          onChange={handleSub}
        >
          <MenuItem value='Yes'> Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item  lg={1} md={1} sm={1} xs={0}></Grid>
        <Grid item  lg={4} md={4} sm={4} xs={12}>
         <SelectAgentContainer>
         <Transfer>Transfer to:</Transfer>
         <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label">Select Agent</InputLabel>
        <Select style={{textAlign: 'start',}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        //  value={sub}
          label="Select Agent"
          //onChange={handleSub}
        >
          <MenuItem value='Umah Juan'>
          <UserSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="none" d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"/><path fill="currentColor" d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"/></UserSvg>
            Umah Juan
            </MenuItem>
          <MenuItem value='Ruth John'>
          <UserSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="none" d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"/><path fill="currentColor" d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"/></UserSvg>
            Ruth John
            </MenuItem>
          <MenuItem value='Kate Stone'>
          <UserSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="none" d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"/><path fill="currentColor" d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"/></UserSvg>
            kate Stone
            </MenuItem>
        </Select>
      </FormControl>
         </SelectAgentContainer>
        </Grid>
         </Grid>
         </FormContainer>
         <EnterContainer>
         <EnterButton>Enter</EnterButton>
         </EnterContainer>
         <MakeAndTakeCallsContainer>
         <InBoundCall>Incoming Call</InBoundCall>
         <MenuBtn onClick={handleList}>
         <CallMenuSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><circle cx="16" cy="8" r="2" fill="currentColor"/><circle cx="16" cy="16" r="2" fill="currentColor"/><circle cx="16" cy="24" r="2" fill="currentColor"/></CallMenuSvg>
         </MenuBtn>
         
         <Grid container>
         <Grid item  lg={4} md={4} sm={4} xs={4}></Grid>
         <Grid item  lg={4} md={4} sm={4} xs={4}>
         <CallerImg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12A10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36a7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8a8.1 8.1 0 0 1 8 8a8 8 0 0 1-2.39 5.64z"/><path fill="currentColor" d="M12 6a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2a1.91 1.91 0 0 1 2-2a1.91 1.91 0 0 1 2 2a1.91 1.91 0 0 1-2 2z"/></CallerImg>
         </Grid>
         <Grid item  lg={4} md={4} sm={4} xs={4}>
         { list && (
          <MenuDropDown>
        <DropDownItems>Add To Queue</DropDownItems>
        <DropDownItems>Dial Pad</DropDownItems>
        </MenuDropDown>
          )}
         </Grid>
         </Grid>
         <CallNum>01-222-013-14</CallNum>
         <ButtonContainer>
         <Grid container>
         <Grid item lg={1.5} md={1.5} sm={1.5} xs={1.5}>

         </Grid>
         <Grid item lg={3} md={3} sm={3} xs={3}>

         </Grid>
         <Grid item lg={3} md={3} sm={3} xs={3}>

         </Grid>
         <Grid item lg={3} md={3} sm={3} xs={3}>

         </Grid>
         <Grid item lg={1.5} md={1.5} sm={1.5} xs={1.5}>

         </Grid>
         </Grid>
          </ButtonContainer>
         </MakeAndTakeCallsContainer>
         <TableContainer>
         <Tables>
          <Thead>
         <Tr>
            <Th>Contact Date</Th>
            <Th>Number</Th>
            <Th>Caller Id</Th>
            <Th>Calls</Th>
            <Th>Caller</Th>
            <Th>Subscription</Th>
            <Th>Location</Th>
            <Th>Issues</Th>
            <Th>Comment</Th>
            <Th>Duration</Th>
            <Th></Th>
         </Tr>
         </Thead>
         <Tbody>
         <Tr>
            <Td>26-7-2022 12:11:10</Td>
            <Td>01-222-013-14</Td>
            <Td>#31000</Td>
            <Td>1</Td>
            <Td>Bukola Samuel</Td>
            <Td>Yes</Td>
            <Td>Ikj, Lag</Td>
            <Td>Insurance</Td>
            <Td>Renewal of insurance papers</Td>
            <Td>32mm21s</Td>
            <Td><TableSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"/></TableSvg></Td>
         </Tr>
         <Tr>
         <Td>26-7-2022 12:11:10</Td>
            <Td>01-222-013-14</Td>
            <Td>#31000</Td>
            <Td>5</Td>
            <Td>Bukola Samuel</Td>
            <Td>Yes</Td>
            <Td>Ikj, Lag</Td>
            <Td>Health</Td>
            <Td>Renewal of insurance papers</Td>
            <Td>32mm21s</Td>
            <Td><TableSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"/></TableSvg></Td>
         </Tr>
         <Tr>
         <Td>26-7-2022 12:11:10</Td>
            <Td>01-222-013-14</Td>
            <Td>#31000</Td>
            <Td>1</Td>
            <Td>Bukola Samuel</Td>
            <Td>Yes</Td>
            <Td>Ikj, Lag</Td>
            <Td>Insurance</Td>
            <Td>Renewal of insurance papers</Td>
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

export default OutboundCalls