import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import TextField from '@mui/material/TextField';

const StyledBox = styled(Box)`
width: 64%;
height: 100vh;
`
const StyledContainer = styled(Container)`

`
const FormHeaderContainer = styled.div`

`
const Heading = styled.h3`

`
const CloseIcon = styled.svg`
width: 20px;
cursor: pointer;
`
const AgentInfo = styled.p`
 border-bottom: 0.5px solid gray;
`
const AgentImgContainer = styled.div`

`
const AgentImg = styled.svg`
width: 40px;
`
const AgentImage = styled.img`
width: 100%;
height: 100%;
`
 const AgentImgLabel = styled.label`
 color: red;
 `


function NewAgent() {

  return (
    <StyledBox>
    <FormHeaderContainer>
    <Heading>NEW AGENT</Heading>
    <CloseIcon xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"/></CloseIcon>
    </FormHeaderContainer>
    <Grid container>
    <Grid item lg={8} md={8} sm={10} xs={12}>
    <AgentInfo>Agent Information</AgentInfo>
    </Grid>
    </Grid>
    <StyledContainer>
    <Grid container>
    <Grid item lg={3} md={3} sm={3} xs={4}>
    <AgentImgContainer>
    <AgentImage src='' />
    <AgentImg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M13 3c-3.855 0-7 3.145-7 7c0 2.41 1.23 4.55 3.094 5.813C5.527 17.343 3 20.883 3 25h2c0-4.43 3.57-8 8-8c2.145 0 4.063.879 5.5 2.25l-4.719 4.719l-.062.312l-.688 3.532l-.312 1.468l1.469-.312l3.53-.688l.313-.062l10.094-10.094c1.16-1.16 1.16-3.09 0-4.25a3.018 3.018 0 0 0-4.219-.031l-3.968 3.969a10.103 10.103 0 0 0-3.032-2A7.024 7.024 0 0 0 20 10c0-3.855-3.145-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5s-5-2.227-5-5s2.227-5 5-5zm13 10c.254 0 .52.082.719.281a.977.977 0 0 1 0 1.406l-9.688 9.688l-1.781.375l.375-1.781l9.688-9.688A.934.934 0 0 1 26 15z"/></AgentImg>
    <AgentImgLabel>Upload Photo</AgentImgLabel>
    </AgentImgContainer>
    </Grid>
    </Grid>
    </StyledContainer>
    </StyledBox>
  )
}

export default NewAgent



