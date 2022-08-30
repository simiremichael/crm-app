import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SideBarContainer = styled.div`
width: 100%;
height: 1000px;
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
justify-content: start;
padding-left: 10%;
`
const Employees = styled.p`
font-family: Montserrat;
display: flex;
align-items: center;
justify-content: start;
padding-left: 10%;
font-weight: 700;
font-size: 20px;
line-height: 20px;
letter-spacing: -0.005em;
cursor: pointer;
padding-top: 10px;
`
const EmployeesSvg = styled.svg`
width: 18px;
height: 18px;
margin-right: 5px;
`
const CallFlow = styled.p`
font-family: Montserrat;
display: flex;
align-items: center;
justify-content: start;
padding-left: 10%;
font-weight: 700;
font-size: 20px;
line-height: 20px;
letter-spacing: -0.005em;
cursor: pointer;
padding-top: 10px;
`
const CallFlowSvg = styled.svg`
width: 18px;
height: 18px;
margin-right: 5px;
`
const Calender = styled.p`
font-family: Montserrat;
display: flex;
align-items: center;
justify-content: start;
padding-left: 10%;
font-weight: 700;
font-size: 20px;
line-height: 20px;
letter-spacing: -0.005em;
cursor: pointer;
padding-top: 10px;
`
const CalenderSvg = styled.svg`
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
padding-top: 10px;
display: flex;
align-items: center;
justify-content: start;
padding-left: 10%;
font-weight: 700;
font-size: 20px;
line-height: 20px;
letter-spacing: -0.005em;
margin-top: calc(100% + 40px);
cursor: pointer;
`
const Links = styled(Link)`
text-decoration:none;
color: #000;
`

function AdminSideBar() {

  let navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  }
  return (
    <div>
    <SideBarContainer>
    <Links to='/admindashboard'><Dashboard><DashboardSvg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"/></DashboardSvg>Dashboard</Dashboard></Links>
    <Links to='/employees'> <Employees>
     <EmployeesSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><circle cx="6" cy="6" r="3" fill="currentColor"/><circle cx="14" cy="6" r="3" fill="currentColor"/><path fill="currentColor" d="M14 10c3.31 0 6 1.79 6 4v2h-6v-2c0-1.48-1.21-2.77-3-3.46c.88-.35 1.91-.54 3-.54zm-8 0c3.31 0 6 1.79 6 4v2H0v-2c0-2.21 2.69-4 6-4z"/></EmployeesSvg>
       Employees
     </Employees></Links>
     <Links to='/callflow'><CallFlow>
     <CallFlowSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="currentColor" d="M39.609 8.605c4.72 2.315 5.399 7.99 2.92 12.147a4.936 4.936 0 0 1-4.748 2.38l-3.431-.356a5.25 5.25 0 0 1-4.525-3.846l-.83-3.058c-.211-.776-.667-1.23-1.151-1.343c-2.191-.515-5.51-.506-7.69.003c-.484.113-.939.565-1.15 1.34l-.83 3.058a5.25 5.25 0 0 1-4.524 3.846l-3.431.356a4.935 4.935 0 0 1-4.748-2.38c-2.48-4.157-1.8-9.832 2.92-12.147A35.353 35.353 0 0 1 24 5c6.542 0 11.846 1.76 15.609 3.605Zm.772 10.866c1.953-3.274 1.175-7.126-1.873-8.621A32.853 32.853 0 0 0 24 7.5a32.853 32.853 0 0 0-14.51 3.35c-3.047 1.495-3.826 5.347-1.873 8.62a2.435 2.435 0 0 0 2.343 1.176l3.43-.356a2.75 2.75 0 0 0 2.371-2.015l.83-3.058c.366-1.347 1.336-2.732 2.994-3.12c2.548-.595 6.258-.607 8.83-.002c1.657.39 2.626 1.776 2.991 3.122l.83 3.058a2.75 2.75 0 0 0 2.37 2.015l3.431.356a2.435 2.435 0 0 0 2.343-1.175ZM25 29.25a1.25 1.25 0 1 0-2.5 0v5.5c0 .69.56 1.25 1.25 1.25h3.5a1.25 1.25 0 1 0 0-2.5H25v-4.25ZM24 44c6.075 0 11-4.925 11-11s-4.925-11-11-11s-11 4.925-11 11s4.925 11 11 11Zm0-2.5a8.5 8.5 0 1 1 0-17a8.5 8.5 0 0 1 0 17Z"/></CallFlowSvg>
       Call Flow
     </CallFlow></Links>
     <Links to='/calender'><Calender>
     <CalenderSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="m960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"/></CalenderSvg>
       Calender
     </Calender></Links>
     <Logout onClick={handleLogout}><LogoutSvg  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m2 12l5 4v-3h9v-2H7V8z"/><path fill="currentColor" d="M13.001 2.999a8.938 8.938 0 0 0-6.364 2.637L8.051 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051s2.051 3.08 2.051 4.95s-.729 3.628-2.051 4.95s-3.08 2.051-4.95 2.051s-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637c1.7-1.699 2.637-3.959 2.637-6.364s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"/></LogoutSvg>Sign Out</Logout>
    </SideBarContainer>
</div>
  )
}

export default AdminSideBar