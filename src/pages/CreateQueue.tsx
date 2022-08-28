import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import React, { useState } from 'react';
import AgentTopBar from '../components/AgentTopBar';
import AgentSideBar from '../components/AgentSideBar';
import { useNavigate } from "react-router-dom";

const StyledBox = styled(Box)`
`
const TopContainer = styled.div`
margin: 20px 15px;
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
const Heading = styled.h3`
margin-left: 3%;
text-align: start;
`
const Choose = styled.p`
text-align: start;
margin-left: 3%;
`
const BodyContainer = styled.div`

`
const Operator = styled.div`
margin: 5px 5% 10px 2%;
background-color: #F5F5F5;
border-radius: 5px;
padding: 20px 19px;
`
const OperatorHeader = styled.p`
text-align: start;
color: #494949;
margin-left: 2px;
`
const Card = styled.div`
box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
border-radius: 10px;
height: 160px;
margin-bottom: 0;
`
const CardHeader = styled.h4`
text-align: start;
margin-left: 10px;
`
const CardText = styled.p`
text-align: start;
margin-left: 10px;
`
const AutomateContainer = styled.div`
background-color: #F5F5F5;
display: flex;
justify-content: space-between;
margin: 30px 5% 10px 2%;
align-items: center;
`
const Automate = styled.p`
text-align: start;
margin-left: 22px;
`
const ButtonContainer = styled.div`
background-color: #fff;
height: 40px;
width: 100px;
margin: 10px;
border-radius: 25px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Input = styled.input`
display: none;
:checked+label{
    background-color: #FF2525;
    color: #FF2525;
}
`
const Label = styled.label`

align-content: center;
width: 50px;
height: 36px;
color: #fff;
cursor: pointer;
border-radius: 25px;
margin: 1px 2px;
`
const  BottomContainer = styled.div`
background-color: #F5F5F5;
display: flex;
margin: 30px 5% 10px 2%;
align-items: center;
padding: 15px 0;
`
const Settings = styled.h4`
text-align: start;
margin-left: 20px;
`
const TimeInput = styled.input`
width: 50%;
outline: none;
height: 22px;
`
const InputContainer =  styled.div`
display: flex;
margin: 10px 20px;
`
const TimeLabel = styled.label`
display: block;
text-align: start;
margin-left: 20px;
`
const Select = styled.select`
width: 50%;
height: 28px;
`
const Option = styled.option`

`

function CreateQueue() {

    let navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/logs');
    }
  return (
    <>
    <AgentTopBar />
    <StyledBox>
    <BackArrowContainer onClick={handleNavigate}>
   <BackArrowSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/></BackArrowSvg>
   </BackArrowContainer>
    <Grid container>
    <Grid item lg={2} md={2} sm={2} xs={3}>
        <AgentSideBar />
         </Grid>
         <Grid item lg={10} md={10} sm={10} xs={9}>
          <TopContainer>
          <Heading>Create Queue for Calls</Heading>
          <Choose>Choose an assinged method for calls</Choose>
          </TopContainer>
          <BodyContainer>
           <Operator>
            <Grid container spacing={2}>
             <Grid item lg={4} md={4} sm={4} xs={12}>
            <OperatorHeader>Operator Priority Strategy</OperatorHeader>
            <Card style={{ border: "1px solid #FF2525"}}>
                <CardHeader style={{color: '#FF2525'}}>Max waiting time</CardHeader>
                <CardText>Priority is given to the operator who is the longest free since the last call was completed</CardText>
            </Card>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
            
            <Card style={{marginTop: 50}}>
                <CardHeader style={{paddingTop: 20}}>Most qualified</CardHeader>
                <CardText>The most qualified operator has the priority</CardText>
            </Card>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
            
            <Card style={{marginTop: 50}}>
                <CardHeader style={{paddingTop: 20}}>Least qualified</CardHeader>
                <CardText>The least qualified operator has the priority</CardText>
            </Card>
            </Grid>
            </Grid>
           </Operator>
           <AutomateContainer>
            <Automate>Automate each caller by number</Automate>
            <ButtonContainer>
                <Input type='radio' id='select1' name='select' />
                <Label htmlFor='select1'>Click</Label>
                <Input type='radio' id='select2' name='select' checked  />
                <Label htmlFor='select2'>Click</Label>
            </ButtonContainer>
           </AutomateContainer>
           <BottomContainer>

            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                <Settings>Advaced settings</Settings>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                <TimeLabel>Max waiting time</TimeLabel>
                <InputContainer>
                <TimeInput type='text' value='60' />
                <Select>
                    <Option>Min</Option>
                    <Option>Max</Option>
                </Select>
                </InputContainer>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                <TimeLabel>Max queue size</TimeLabel>
                <InputContainer>
                <Select style={{width: '100%'}}>
                    <Option>1000</Option>
                    <Option>900</Option>
                    <Option>800</Option>
                    <Option>700</Option>
                    <Option>600</Option>
                    <Option>500</Option>
                    <Option>400</Option>
                    <Option>300</Option>
                    <Option>200</Option>
                    <Option>100</Option>
                </Select>
                </InputContainer>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                <TimeLabel>Max reaction time</TimeLabel>
                <InputContainer>
                <TimeInput type='text' value='120' />
                <Select>
                    <Option>Min</Option>
                    <Option>Sec</Option>
                </Select>
                </InputContainer>
                </Grid>
            </Grid>
           </BottomContainer>
          </BodyContainer>
          </Grid>
          </Grid>
          </StyledBox>
    </>
  )
}



export default CreateQueue