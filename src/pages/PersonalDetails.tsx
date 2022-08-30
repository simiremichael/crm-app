import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import { useNavigate } from "react-router-dom";


const StyledBox = styled.div`
position: absolute;
z-index: auto;
background: rgba( 255, 255, 255, 0 );
width: 80%;
height: 100vh;
margin: -320px 0 0 0;
`
const HeaderContainer = styled.div`
background: #FF2525;
height: 40px;
border-radius: 10px 10px 0 0;
`
const CloseContainer = styled.div`
cursor: pointer;
margin-top: 5%;
`
const CloseSvg = styled.svg`
width: 30px;
height: 30px;
color: #fff;
`
const HeadingContainer = styled.div`
padding: 0 15px;
`
const Heading = styled.h4`
text-align: start;
`
const PenSvg = styled.svg`
width: 20px;
height: 20px;

`
const Edit = styled.p`
font-weight: 600;
margin-bottom: 0;
font-size: 0.8rem;
margin-top: 3px;
`
const SvgContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 60%;
width: 60%;
flex-direction: column;
margin: 12px 0 0 12px;
cursor: pointer;
`
const Report = styled.p`
font-weight: 600;
margin-bottom: 0;
font-size: 0.8rem;
margin-top: 3px;
`
const ReportSvg = styled.svg`
width: 20px;
height: 20px;
`
const ProfileImgContainer = styled.div`
width: 80px;
height: 80px;
border: 0.5px solid #c4c4c4;
padding: 6px;
`
const ProfileImg = styled.img`
width: 80px;
height: 80px;
border-radius: 50px;
`
const ProfileContainer = styled.div`
padding: 0 15px;
border-bottom: 0.5px solid #c4c4c4;
margin: 5px;
`
const ProfileNames = styled.p`
text-align: start;
margin-bottom: 0;
`
const ProfileDetails = styled.p`
text-align: start;
font-weight: 600;
margin-bottom: 0;
font-size: 0.8rem;
`
const BodyContainer = styled.div`
 width: 400px;
 padding-bottom: 10px;
 background: rgba( 255, 255, 255, 0.9 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 18.5px );
-webkit-backdrop-filter: blur( 18.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
margin-left: 60%;
`

function PersonalDetails(props: {edit: any, setEdit: any, editAgent: any, setEditAgent: any}) {
   
    let edit = props.edit;
    let setEdit = props.setEdit;
    let editAgent = props.editAgent;
    let setEditAgent = props.setEditAgent;

    const handleEdit = () => {
        setEdit(!edit)
    };
    const handleEditAgent = () => {
      setEditAgent(!editAgent)
  }
  let navigate = useNavigate();
  const handleNavigate = () => {
      navigate('/employees/report');
  }

  return (
    <StyledBox>
        <BodyContainer>
         <HeaderContainer>
            <Grid container>
             <Grid item lg={10} md={10} sm={10} xs={9}>
             </Grid>
             <Grid item lg={2} md={2} sm={2} xs={3}>
                <CloseContainer onClick={handleEdit}>
             <CloseSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"/></CloseSvg>
             </CloseContainer>
             </Grid>
            </Grid>
         </HeaderContainer>
         <HeadingContainer>
            <Grid container>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                <Heading>Personal Details</Heading>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={2}>
                <SvgContainer onClick={handleEditAgent}>
                <PenSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M216 208H115.3l82.4-82.3L224 99.3a15.9 15.9 0 0 0 0-22.6L179.3 32a16.1 16.1 0 0 0-22.6 0l-120 120a15.9 15.9 0 0 0-4.7 11.3V208a16 16 0 0 0 16 16h168a8 8 0 0 0 0-16ZM168 43.3L212.7 88L192 108.7L147.3 64Zm-120 120l88-88l44.7 44.7l-88 88H48Z"/></PenSvg>
                <Edit>Edit</Edit>
                </SvgContainer>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={2}>
                <SvgContainer onClick={handleNavigate}>
                <ReportSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M10 18h8v2h-8zm0-5h12v2H10zm0 10h5v2h-5z"/><path fill="currentColor" d="M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z"/></ReportSvg>
                <Report>Report</Report>
                </SvgContainer>
                </Grid>
            </Grid>
            <Grid container>
             <Grid item lg={4} md={4} sm={4} xs={4}>
             <ProfileImgContainer>
             <ProfileImg src='../../images/blank_avater.jpg' />
             </ProfileImgContainer>
             </Grid>
             <Grid item lg={3} md={3} sm={3} xs={3}>
             <ProfileNames>ID</ProfileNames>
             <ProfileDetails>#32001-2310</ProfileDetails>
             </Grid>
            </Grid>
         </HeadingContainer>
         <ProfileContainer>
            <ProfileNames>Name</ProfileNames>
            <ProfileDetails>LuCY Jane Davies</ProfileDetails>
         </ProfileContainer>
         <ProfileContainer>
         <ProfileNames>Email</ProfileNames>
            <ProfileDetails>lucy@gmail.com</ProfileDetails>
         </ProfileContainer>
         <ProfileContainer>
         <ProfileNames>Phone</ProfileNames>
            <ProfileDetails>081-22-041-09</ProfileDetails>
         </ProfileContainer>
         <ProfileContainer>
         <ProfileNames>Address</ProfileNames>
            <ProfileDetails>7, ajiran street,kola,abuja,Nigeria</ProfileDetails>
         </ProfileContainer>
         <ProfileContainer>
         <ProfileNames>Location</ProfileNames>
            <ProfileDetails>Abuja, Ngeria</ProfileDetails>
         </ProfileContainer>
         <ProfileContainer>
            |<Grid container>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                <ProfileNames>Status</ProfileNames>
                <ProfileDetails>Active now</ProfileDetails>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                <ProfileNames>NIN</ProfileNames>
                <ProfileDetails>30144828163</ProfileDetails>
                </Grid>
              </Grid>
            </ProfileContainer>
            <ProfileContainer>
            <ProfileNames>Date Employed</ProfileNames>
           <ProfileDetails>04/10/2020</ProfileDetails>
          </ProfileContainer>
        </BodyContainer>
    </StyledBox>
  )
}   

export default PersonalDetails