import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import AgentTopBar from '../components/AgentTopBar';
import AgentSideBar from '../components/AgentSideBar';
import { useNavigate } from 'react-router-dom';

const StyledBox = styled(Box)`
`
const StyledGrid = styled(Grid)`
height: 100%;
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
align-items: center;;
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
color: #494949;
border: 1px solid #c4c4c4;
width: 100px;
padding: 6px;
border-radius: 2px;
align-items: center;
margin-top: 2px;
margin-bottom: -50px;
cursor: pointer;
`
const TopUnderline = styled.div`
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
const GridMiddleContainer = styled.div`
margin: 20px 10px;
`
const Input = styled.input`
height: 96%;
border: none;
width: 98%;
outline: none;
`
const InputContainer = styled.div`
border: 1px solid #C4C4C4;
margin: 10px;
height: 34px;
border-radius: 5px;
`
const Incoming = styled.div`
border: 1px solid #C4C4C4;
margin: 10px 0 0 10px;
height: 34px;
display: flex;
align-items: center;
border-radius: 5px;
width: 95%;
`
const IncomingText = styled.p`
margin-left: 5px;
`
const ArrowContaner = styled.div`

`
const ArrowSvg = styled.svg`

`
const ComposeBtn = styled.button`
outline: none;
width: 90%;
margin: 10px;
height: 34px;
margin: 10px 10px 0 0;
border-radius: 5px;
outline: none;
border: none;
background-color: #432344;
color: #fff;
cursor: pointer;
`
const MessageCartContainer = styled.div`
margin-top: 15px;
border-bottom: 1px solid #c4c4c4;
box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
height: 50px;
padding-left: 15px;
margin-right: 10px;
`
const MessageCart = styled.p`
text-align: start;
cursor: pointer;
`
const Tables = styled.table`
border: 0.5px solid #D9D9D9;
width: 100%;
margin-top: 20px;
border-collapse: collapse;
padding: 10px;
`
const Tr = styled.tr`

`
const Th = styled.th`
text-align: start;
`
const Td = styled.td`
margin: 0;
font-size: 0.9rem;
text-align: center;
vertical-align: center;
text-align: start;
padding: 3px;
`
const TableContainer = styled.div`
margin: 0 10px;
`
const ShortMessagContainere = styled.div`
background-color: #D9D9D9;
height: auto;;
padding: 10px 0;
`
const SmsTitle = styled.p`
border: 0.5px solid #c4c4c4;
padding: 10px 5px;
margin: 10px;
border-radius: 5px;
text-align: start;
`
const SmsTime = styled.p`
text-align: start;
margin: 10px;
`
const SmsMessageHead = styled.h3`
text-align: start;
margin: 10px;
`
const SmsMesageTitle = styled.h4`
text-align: start;
margin: 10px;
`
const SmsMesageBody = styled.p`
text-align: start;
margin: 10px;
`
const ConversationContainer = styled.div`
margin-top: 15px;
`
const Conversation = styled.p`
text-align: start;
margin: 5px 0 0 10px;
`
const LineDivier = styled.div`
width: 37%;
border: 1px solid #c4c4c4;
height: 0;
`
const TimeInDivider = styled.p`
 margin: 15px 10px;
`
const DividerContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const InputTextContainer = styled.div`
border: 1px solid #c4c4c4;
margin: 100px 10px  5px 10px;
`
const InputTextType = styled.p`
margin: 10px;
cursor: pointer;
`
const InputTextTypeContainer = styled.div`
display: flex;
`
const TextArea = styled.textarea`
width: 98%;
height: 150px;
background-color: inherit;
border: none;
outline: none;
`
const MessageBottomContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const MessageBottomleftContainer = styled.div`
display: flex;
align-items: center;
margin-left: 15px;
`
const LetterType = styled.p`

`
const Attachment = styled.svg`
width: 15px;
height: 15px;
margin-left: 10px;
cursor: pointer;
`
const FileInput = styled.input`
width: 0;
`
const Label = styled.label`

`
const MessageBottomRightContainer = styled.div`
display: flex;
align-items: center;
margin-right: 10px;
`
const SaveBtn = styled.button`
background-color: #FF2525;
color: #fff;
border: none;
outline: none;
height: 30px;
padding: 8px;
cursor: pointer;
border-radius: 3px;
`
const SendBtn = styled.button`
border: 1px solid #FF2525;
color:  #FF2525;
border: none;
outline: none;
height: 30px;
padding: 8px;
margin-left: 10px;
cursor: pointer;
border-radius: 3px;
`
const CreateTicketContainer = styled.div`
border-left: 1px solid #c4c4c4;
position: relative;
z-index: 1001;
margin-top: -60px;
`
const TopNav = styled.div`
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #FF2525;
padding: 0 15px;
`
const Navtitle = styled.p`
color: #fff;
`
const NavCloseIcon = styled.button`
cursor: pointer;
border: none;
background: inherit;
outline: none;
`
const CloseSvg = styled.svg`
width: 25px;
height: 25px;
color: #fff;
`
const TicketBodyContainer = styled.div`
padding: 5px 10px;
border-left: 1px solid #c4c4c4;
`
const CreateBtn = styled.button`
width: 100px;
height: 40px;
color: #fff;
background-color: #FF2525;
border: none;
cursor: pointer;
border-radius: 10px;
margin-top: 25px;
`
const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
`
const CreateAndAddBtn = styled.button`
width: 200px;
height: 40px;
border: 1px solid #FF2525;
color:  #FF2525;
cursor: pointer;
border-radius: 10px;
margin-top: 15px;
background: inherit;
`
const CancelBtn = styled.button`
width: 100px;
height: 40px;
border: 1px solid #FF2525;
color:  #FF2525;
cursor: pointer;
border-radius: 10px;
margin-top: 15px;
background: inherit;
`


function Messages() {
   
  const [showTicket, setShowTicket] = useState(false);
   
  const handleShowTicket = () => {
    setShowTicket(!showTicket);
  }

  let navigate = useNavigate();
const handleNavigate1 = () => {
    navigate('/logs');
}


const handleNavigate3 = () => {
    navigate('/logs/outboundcalls');
}

  return (
    <>
    <AgentTopBar />
    <StyledBox>
    <Grid container>
        <Grid item lg={2} md={2} sm={2} xs={3}>
        <AgentSideBar />
         </Grid>
         <Grid item  lg={7} md={7} sm={7} xs={9}>
         <TopContainer>
        <Heading>Log</Heading>
         <Grid container>
        <Grid item  lg={3} md={3} sm={3} xs={6}>
          <CallWrapContainer onClick={handleNavigate1}>
        <CallIconContainer1><CallIcon1 xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4m11 0v1.5h3.5L13 10l1 1l5.5-5.5V9H21V3h-6Z"/></CallIcon1></CallIconContainer1>
        <Inbound>
         Inbound calls
          </Inbound>
          </CallWrapContainer>
        </Grid>
        <Grid item  lg={3} md={3} sm={3} xs={6}>
        <CallWrapContainer onClick={handleNavigate3}>
        <CallIconContainer2>
        <CallIcon2 xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4m15 8V9.5h-3.5L21 4l-1-1l-5.5 5.5V5H13v6h6Z"/></CallIcon2>
        </CallIconContainer2>
         <Outbound>
          Outbound calls
          </Outbound>
          </CallWrapContainer>
        </Grid>
        <Grid item  lg={3} md={3} sm={3} xs={6}>
        <CallWrapContainer style={{borderBottom: '2px solid #000'}}>
        <CallIconContainer3><CallIcon3 xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="-2 -2.5 24 24"><path fill="currentColor" d="M3.656 17.979A1 1 0 0 1 2 17.243V15a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8.003l-4.347 2.979zm.844-3.093a.536.536 0 0 0 .26-.069l2.355-1.638A1 1 0 0 1 7.686 13H12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5c0 .54.429.982 1 1c.41.016.707.083.844.226c.128.134.135.36.156.79c.003.063.003.177 0 .37a.5.5 0 0 0 .5.5zm11.5-4.87a7.136 7.136 0 0 0 0 .37v-.37c.02-.43.028-.656.156-.79c.137-.143.434-.21.844-.226c.571-.018 1-.46 1-1V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5V2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2v2.243a1 1 0 0 1-1.656.736L16 13.743v-3.726z"/></CallIcon3></CallIconContainer3>
         <Message>
          Messages
          </Message>
          </CallWrapContainer>
        </Grid>
        <Grid item  lg={3} md={3} sm={3} xs={6}>
        <CallWrapContainer>
         <Create onClick={() => setShowTicket(!showTicket)}>Create Ticket</Create>
         </CallWrapContainer>
        </Grid>
         </Grid>
         </TopContainer>
         <TopUnderline></TopUnderline>
         <Grid container>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <GridMiddleContainer>
         <InputContainer>
         <Input type='search' defaultValue='Search all conversation' />
         </InputContainer>
         <Grid container>
         <Grid item lg={8} md={8} sm={8} xs={8}>
         <Incoming>
          <IncomingText>Incoming <strong>29</strong></IncomingText>
         </Incoming>
         <ArrowContaner>

         </ArrowContaner>
         </Grid>
         <Grid item lg={4} md={4} sm={4} xs={4}>
         <ComposeBtn>Compose</ComposeBtn>
         </Grid>
         </Grid>
         <MessageCartContainer>
          <Grid container>
            <Grid item lg={3} md={3} sm={3} xs={3}>
             <MessageCart>All</MessageCart>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
            <MessageCart>Read</MessageCart>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
            <MessageCart>Unread</MessageCart>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
            <MessageCart>Pinned</MessageCart>
            </Grid>
          </Grid>
         </MessageCartContainer>
         <TableContainer>
          <Tables>
            <Tr>
              <Th></Th>
              <Th>Lucky Donald</Th>
              <Th style={{fontWeight: 300, fontSize: '0.8rem'}}>12:30</Th>
            </Tr>
            <Tr>
              <Td></Td>
              <Td style={{fontWeight: 700}}>Solve Please</Td>
              <Td></Td>
            </Tr>
            <Tr>
            <Td></Td>
              <Td> I am having issue login into my account.</Td>
              <Td></Td>
            </Tr>
          </Tables>
         </TableContainer>
        </GridMiddleContainer>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <GridMiddleContainer>
          <ShortMessagContainere>
           <SmsTitle><strong>Ticket generated for Victor Davies</strong> 331055</SmsTitle>
            <SmsTime>11:44</SmsTime>
            <SmsMessageHead>Urgently needed</SmsMessageHead>
            <SmsMesageTitle>1. Lucky Davies</SmsMesageTitle>
            <SmsMesageBody>Hi,
              I need to urgently for my user account, i can't log in and i have lots of customers to attend to.
              Thanks,
            </SmsMesageBody>
            <ConversationContainer>
            <Conversation>@John Umoh  Please treate this immediately</Conversation>
            <Conversation>@Kate Steven Okay</Conversation>
            </ConversationContainer>
            <DividerContainer>
              <LineDivier></LineDivier>
              <TimeInDivider>11:55</TimeInDivider>
              <LineDivier></LineDivier>
            </DividerContainer>
            <SmsMesageBody>J John Umoh replied to Lucky Davies</SmsMesageBody>
            <SmsMesageBody>Hi, can i know the Insurance plan you want to switch to ? Kindly send me your details, thanks.</SmsMesageBody>
            <InputTextContainer>
          <InputTextTypeContainer>
          <InputTextType>Reply</InputTextType>
          <InputTextType>Note</InputTextType>
          </InputTextTypeContainer>
          <TextArea />
          </InputTextContainer>
          <MessageBottomContainer>
            <MessageBottomleftContainer>
              <LetterType><strong>Aa</strong></LetterType>
               <Label  htmlFor='file'>
               <Attachment xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 7.91V16a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V6a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v9.182a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2V8"/></Attachment>
               </Label>
               <FileInput id='file' type='file' />
            </MessageBottomleftContainer>
            <MessageBottomRightContainer>
              <SaveBtn>Save as draft</SaveBtn>
              <SendBtn>Send</SendBtn>
            </MessageBottomRightContainer>
          </MessageBottomContainer>
          </ShortMessagContainere>
          </GridMiddleContainer>
        </Grid>
         </Grid>
         </Grid>
         <Grid item  lg={3} md={3} sm={3} xs={12}>
          { showTicket && ( 
            <>
          <CreateTicketContainer>
            <TopNav>
              <Navtitle>Create Ticket</Navtitle>
              <NavCloseIcon onClick={() => setShowTicket(false)}>
                <CloseSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"/></CloseSvg>
              </NavCloseIcon>
            </TopNav>
          </CreateTicketContainer>
          <TicketBodyContainer>
            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
          <TextField id="outlined-basic" size='small' fullWidth label="Ticket Name" variant="outlined" />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
          <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label">Pipeline</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=''
          label="Pipeline"
        >
          <MenuItem value='Agent onboarding'>Agent onboarding</MenuItem>
          <MenuItem value='Customer onboarding'>Customer onboarding</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
      <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label">Ticket Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=''
          label="Ticket Status"
        >
          <MenuItem value='Client set up'>Client set up</MenuItem>
          <MenuItem value='Agent set-up'>Agent set-up</MenuItem>
          <MenuItem value='Admin set-up'>Admin set-up</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
      <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=''
          label="Priority"
        >
          <MenuItem value='Large'>Large</MenuItem>
          <MenuItem value='Medium'>Medium</MenuItem>
          <MenuItem value='Small'>Small</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
      <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=''
          label="Category"
        >
          <MenuItem value='Large'>Large</MenuItem>
          <MenuItem value='Medium'>Medium</MenuItem>
          <MenuItem value='Small'>Small</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
      <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label">Ticket Owner</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=''
          label="Ticket Owner"
        >
          <MenuItem value='Large'>Large</MenuItem>
          <MenuItem value='Medium'>Medium</MenuItem>
          <MenuItem value='Small'>Small</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
      <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label">Source</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=''
          label="Source"
        >
          <MenuItem value='Email'>Email</MenuItem>
          <MenuItem value='Chat'>Chat</MenuItem>
        </Select>
          </FormControl>
           </Grid>
            </Grid>
            <ButtonContainer>
              <CreateBtn>Create</CreateBtn>
              <CreateAndAddBtn>Create and add another</CreateAndAddBtn>
              <CancelBtn>Cancel</CancelBtn>
            </ButtonContainer>
          </TicketBodyContainer>
          </>
          )}
         </Grid>
         </Grid>
    </StyledBox>
    </>
  )
}

export default Messages