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
const Log = styled.p`
margin: 0;
font-family: Montserrat;
padding-top: 20px;
display: flex;
align-items: center;
justify-content: start;
padding-left: 10%;
font-weight: 700;
font-size: 20px;

`
const LogSvg = styled.svg`
width: 18px;
height: 18px;
margin-right: 5px;
`
const Report = styled.p`
margin: 0;
font-family: Montserrat;
padding-top: 20px;
display: flex;
align-items: center;
justify-content: start;
padding-left: 10%;
font-weight: 700;
font-size: 20px;
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
margin: 0;
font-family: Montserrat;
padding-top: 20px;
display: flex;
align-items: center;
justify-content: start;
padding-left: 10%;
font-weight: 700;
margin-top: calc(100% + 50px);
cursor: pointer;
font-size: 20px;
`
const Links = styled(Link)`
text-decoration:none;
color: #000;
`

function AgentSideBar() {
   

  let navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  }

  return (
    <div>
         <SideBarContainer>
         <Links to='/agentdashboard'><Dashboard><DashboardSvg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"/></DashboardSvg>Dashboard</Dashboard></Links>
         <Links to='/logs'> <Log>
          <LogSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><mask id="svgIDa"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M13 10h28v34H13z"/><path stroke="#fff" stroke-linecap="round" d="M35 10V4H8a1 1 0 0 0-1 1v33h6"/><path stroke="#000" stroke-linecap="round" d="M21 22h12m-12 8h12"/></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#svgIDa)"/></LogSvg>
            Log
          </Log></Links>
          <Links to='/report'><Report>
          <ReportSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"/></ReportSvg>
            Report
          </Report></Links>
          <Logout onClick={handleLogout}><LogoutSvg  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m2 12l5 4v-3h9v-2H7V8z"/><path fill="currentColor" d="M13.001 2.999a8.938 8.938 0 0 0-6.364 2.637L8.051 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051s2.051 3.08 2.051 4.95s-.729 3.628-2.051 4.95s-3.08 2.051-4.95 2.051s-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637c1.7-1.699 2.637-3.959 2.637-6.364s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"/></LogoutSvg>Sign Out</Logout>
         </SideBarContainer>
    </div>
  )
}

export default AgentSideBar