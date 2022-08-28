import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import { Link, useNavigate } from "react-router-dom";

const StyledBox = styled(Box)`
`

const BodyContainer = styled.div`
`
const Card = styled.div`
background: #FFFFFF;
border: 11px solid rgba(129, 22, 22, 0.03);
box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.32);
border-radius: 2px;
box-sizing: border-box;
align-items: flex-start;
padding: 20px 24px 15px 24px;
height: 133px;
width: 336px;
margin: 80px 0 0 10%;
@media only screen and (max-width: 860px) {
  width: 80%;
}
`
const CardSvg = styled.svg`
width: 18px;
margin-right: 10px;
`
const CardTitle = styled.h3`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
letter-spacing: -0.005em;
opacity: 0.8;
margin-top: 0;
text-align: start;
display: flex;
align-items: center;
`
const DetailsContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`
const CardDetails = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
letter-spacing: -0.02em;
`
 
const AgentSvg = styled.svg`
widht: 18px;
margin-right: 10px;
`
const Agent = styled.p`
text-align: start;
display: flex;
align-items: center;
margin-top: 0;
font-weight: 500;
`
const CallAgent = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
letter-spacing: -0.02em;
text-align: start;
margin-top: 22px;
margin-bottom: 0;
font-size: 0.9rem;
color: #000;
`
const CardBottomContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
z-index: 1001;
width: 336px;
margin-left: -35px;
cursor: pointer;
border-top: 0.5px solid  rgba(0, 0, 0, 0.3);
:hover{
  border: 0.5px solid blue;
}
@media only screen and (max-width: 860px) {
  width: calc(100% + 70px);
}
`
const ViewAll = styled.p`
margin-left: 20px;
font-size: 13px;
Font-family: Work Sans;
color: #000;
`
const BottomSvg = styled.svg`
width: 18px;
margin-right: 15px;
`
const BoxContainer = styled(Box)`
position: absolute;
z-index: 10001;
width: 100%;
height: 100%;
background: rgba(255, 255, 255, 0.1);
background-filter: blur(10px);
`
const StyledContainer = styled.div`
border: 0.5px solid #C4C4C4;
height: 100%;
background-color: #fff;
width: 100%;

`
const FormHeaderContainer = styled.div`
background-color: #FF2525;
height: 60px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
const Heading = styled.h3`
color: #fff;
margin-left: 5%;
`
const CloseIcon = styled.svg`
width: 40px;
height: 40px;
cursor: pointer;
color: #fff;
margin-right: 5%;
`
const AgentInfo = styled.p`
text-align: start;
width: 60%;
padding-bottom: 10px;
border-bottom: 0.5px solid #C4C4C4;
padding-left: 2%;
`
const AgentImgContainer = styled.div`
width: 150px;
height: 150px;
border: 0.5px solid #C4C4C4;
display: flex;
justify-content: center;
align-items: center;
margin-left: 2%;
`
const AgentImg = styled.svg`
width: 70px;
height: 70px;
`
const AgentImage = styled.img`
width: 100%;
height: 100%;
`
 const AgentImgLabel = styled.label`
 color: #FF2525;
 text-align: start;
 margin-left: 6%;
 margin-top: 10px;
 cursor: pointer;
 `
 const Form = styled.form`
 display: flex;
 flex-direction: column;
 justify-content: start;
 `
 const FormInnerContainer = styled.div`
 margin-top: 20px;
 `
 const ImgInput = styled.input`
width: 0;
 `
 const StyledTextField = styled(TextField)`
width: 98%;
margin:  15px 3px 0 4px;
color: gray;
`
const Select = styled.select`
width: 98%;
height: 40px;
margin:  15px 3px 0 4px;
border: 0.5px solid #C4C4C4;
border-radius: 3px;
color: gray;
font-size: 1rem;
padding-left: 6px;
outline: none;
`
const Option = styled.option`
margin: 5px;
color: #000;
`

const Button = styled.button`
width: 98%;
height: 40px;
margin:  25px 3px 0 4px;
background-color: #ff2525;
padding: 6px, 12px, 6px, 12px;
color: #fff;
border-radius: 10px;
border: none;
outline: none;
cursor: ponter;
`


function HomePage() {
  const [agentForm, setAgentForm] = useState(false);
  
  const toggle = () => {
    setAgentForm(!agentForm);
  }
 const close = () => {
  setAgentForm(false);
 }

 let navigate = useNavigate();
 const handleView = () => {
  navigate('./callhistory')
 }

  return (
       <>
       <TopBar />
       { agentForm && (
        <BoxContainer>
        <Grid container >
        <Grid item lg={3} md={3} sm={2} xs={0}></Grid>
        <Grid item lg={7} md={7} sm={9} xs={12}>
        <FormHeaderContainer>
        <Heading>NEW AGENT</Heading>
        <CloseIcon onClick={close} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"/></CloseIcon>
        </FormHeaderContainer>
        <StyledContainer>
        <AgentInfo>Agent Information</AgentInfo>
        <Form>
        <AgentImgContainer>
       {/* <AgentImage src='' />*/}
        <AgentImg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M13 3c-3.855 0-7 3.145-7 7c0 2.41 1.23 4.55 3.094 5.813C5.527 17.343 3 20.883 3 25h2c0-4.43 3.57-8 8-8c2.145 0 4.063.879 5.5 2.25l-4.719 4.719l-.062.312l-.688 3.532l-.312 1.468l1.469-.312l3.53-.688l.313-.062l10.094-10.094c1.16-1.16 1.16-3.09 0-4.25a3.018 3.018 0 0 0-4.219-.031l-3.968 3.969a10.103 10.103 0 0 0-3.032-2A7.024 7.024 0 0 0 20 10c0-3.855-3.145-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5s-5-2.227-5-5s2.227-5 5-5zm13 10c.254 0 .52.082.719.281a.977.977 0 0 1 0 1.406l-9.688 9.688l-1.781.375l.375-1.781l9.688-9.688A.934.934 0 0 1 26 15z"/></AgentImg>
        <ImgInput id='img' type='file' />
        </AgentImgContainer>
        <AgentImgLabel htmlFor='img'>Upload Photo</AgentImgLabel>
        <FormInnerContainer>
        <Grid container>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <StyledTextField id="outlined-basic" type='text' label='First Name' size='small'  />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <StyledTextField id="outlined-basic" type='text' label='Middle Name' size='small'  />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <StyledTextField id="outlined-basic" type='text' label='Last Name' size='small'  />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <StyledTextField id="outlined-basic" type='tel' label='Phone Number' size='small'  />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <StyledTextField id="outlined-textarea"  label='Home Address' multiline size='medium'  />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <Select id='State' name='State'>
          <Option  defaultValue='State'>State</Option>
          <Option>Abuja</Option>
        </Select>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <StyledTextField id="outlined-basic" type='email' label='Email' size='small'  />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <StyledTextField id="outlined-basic" type='text' label='NIN' size='small'  />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <StyledTextField id="outlined-basic" type='text' label='Role' size='small'  />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <StyledTextField id="outlined-basic" type='text' label='Identification Number' size='small'  />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <Select id='Location' name='Location'>
          <Option  defaultValue='Location'>Location</Option>
          <Option value='Abaji'>Abaji</Option>
          <Option value='Yaba'>Yaba</Option>
          <Option value='Garki'>Garki</Option>
          <Option value='Gui'>Gui</Option>
          <Option value='Gwagwa'>Gwagwa</Option>
          <Option value='Gwarinpa'>Gwarinpa</Option>
          <Option value='Jiwa'>Jiwa</Option>
          <Option value='Kabusa'>Kabusa</Option>
          <Option value='Karshi'>Karshi</Option>
          <Option value='Karu'>Karu</Option>
          <Option value='Nyanya'>Nyanya</Option>
          <Option value='Orozo'>Orozo</Option>
          <Option value='Bwari'>Bwari</Option>
          <Option value='Gwaywalada'>Gwaywalada</Option>
          <Option value='Kuje'>Kuje</Option>
          <Option value='Rubbochi'>Rubbochi</Option>
          <Option value='Ashara'>Ashara</Option>
          <Option value='Dafa'>Dafa</Option>
          <Option value='Gumbo'>Gumbo</Option>
          <Option value='Kilankwa'>Kilankwa</Option>
          <Option value='Kwali'>Kwali</Option>
          <Option value='Pai'>Pai</Option>
          <Option value='Wako'>Wako</Option>
          <Option value='Yangoji'>Yangoji</Option>
          <Option value='Yebu'>Yebu</Option>
        </Select>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
        <Button>Register</Button>
        </Grid>
        </Grid>
        </FormInnerContainer>
        </Form>
        </StyledContainer>
        <Grid item lg={2} md={2} sm={1} xs={0}></Grid>
        </Grid>
        </Grid>
        </BoxContainer>
      )}
       <StyledBox>
        <Grid container>
        <Grid item lg={2} md={2} sm={2} xs={3}>
        <SideBar />
         </Grid>
         <Grid item  lg={10} md={10} sm={10} xs={9}>
         <BodyContainer>
          <Grid container>
          <Grid item  lg={6} md={6} sm={6} xs={12}>
           <Card>
           <CardTitle><CardSvg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M5 1a.5.5 0 0 1 .5.5V2h2v-.5a.5.5 0 0 1 1 0V2h2v-.5a.5.5 0 0 1 1 0V2A1.5 1.5 0 0 1 13 3.5v2.536a2.549 2.549 0 0 0-1.37.712L10.289 8.09A.498.498 0 0 0 10 8H6a.5.5 0 0 0 0 1h3.379l-2.037 2.036c-.125.125-.24.259-.346.4A.5.5 0 0 0 6.5 11H6a.5.5 0 0 0 0 1h.5a.498.498 0 0 0 .157-.025a3.778 3.778 0 0 0-.308.816l-.303 1.211a1.59 1.59 0 0 0 .07.998H4.5A1.5 1.5 0 0 1 3 13.5v-10A1.5 1.5 0 0 1 4.5 2v-.5A.5.5 0 0 1 5 1Zm.5 4.5A.5.5 0 0 0 6 6h4a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5Zm6.838 1.955a1.56 1.56 0 0 1 2.207 2.207l-4.289 4.288a2.777 2.777 0 0 1-1.29.731l-1.211.303a.61.61 0 0 1-.74-.74l.304-1.21c.122-.489.374-.935.73-1.29l4.289-4.289Z"/></CardSvg>Onboard</CardTitle>
           <DetailsContainer>
            <CardDetails>Register for new agent here</CardDetails>
            <Fab color="inherit" onClick={toggle} size='small' aria-label="add" style={{background: "linear-gradient(180deg, #FF2525 0%, #432344 100%)", color: '#fff', width: '40px', height: '40px'}}>
            <AddIcon />
            </Fab>
           </DetailsContainer>
           </Card>
          </Grid>
          <Grid item  lg={6} md={6} sm={6} xs={12}>
          <Card>
            <Agent><AgentSvg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1c-.4.2-.8.3-1.2.5c-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 888.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8c2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"/></AgentSvg>Agent</Agent>
           <CallAgent>20 call agents</CallAgent>
           <CardBottomContainer onClick={handleView}>
            <ViewAll>View All</ViewAll>
            <BottomSvg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4.8 21.57L7.222 24L19.2 12L7.222 0L4.8 2.43L14.347 12z"/></BottomSvg>
           </CardBottomContainer>
           </Card>
          </Grid>
          </Grid>
         </BodyContainer>
         </Grid>
        </Grid>
    </StyledBox>
    </>
  )
}

export default HomePage