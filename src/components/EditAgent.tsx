import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from "react-router-dom";

const BoxContainer = styled(Box)`
position: absolute;
z-index: 10001;
width: 100%;
height: 100%;
background: rgba(255, 255, 255, 0.1);
background-filter: blur(10px);
margin: -280px 0 0 -300px;
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
const AgentInfo = styled.h3`
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
const CloseBtnContainer = styled.div`

`


function EditAgent(props: {editAgent: any, setEditAgent: any}) {

    let editAgent = props.editAgent;
    let setEditAgent = props.setEditAgent;

    const handleEdit = () => {
         setEditAgent(!editAgent);
    }

  return (
    <BoxContainer>
        <Grid container >
        <Grid item lg={3} md={3} sm={2} xs={0}></Grid>
        <Grid item lg={7} md={7} sm={9} xs={12}>
        <FormHeaderContainer>
        <Heading>Edit</Heading>
        <CloseBtnContainer onClick={handleEdit}>
        <CloseIcon  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"/></CloseIcon>
        </CloseBtnContainer>
        </FormHeaderContainer>
        <StyledContainer>
        <AgentInfo>Personal Details</AgentInfo>
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
  )
}

export default EditAgent



