import React, { useState } from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Login from './pages/Login';
import {
  Routes,
  Route,
} from "react-router-dom";
import Table from './pages/Table';
import AgentDashboard from './pages/AgentDashboard';
import Logs from './pages/Logs';
import Outbound from './pages/OutboundCalls';
import Messages from './pages/Messages';
import Report from './pages/Report';
import TotalCalls from './pages/TotalCalls';
import TotalMessage from './pages/TotalMessage';
import MissedCalls from './pages/MissedCalls';
import CallsOnQueue from './pages/CallsOnQueue';
import CreateQueue from './pages/CreateQueue';
import HeadOfCrmDashboard from './pages/HeadOfCrmDashboard';
import Performance from './pages/Performance';
import ActiveAgent from './pages/ActiveAgent';
import HcrmReport from './pages/HcrmReport';
import HcrmAllMessages from './pages/HcrmAllMessages';
import HcrmStatistics from './pages/HcrmStatistics';
import HcrmCalls from './pages/HcrmCalls';
import HcrmCallStats from './pages/HcrmCallStats';
import HcrmCallReportByQueue from './pages/HcrmCallReportBy Queue';
import UserProfile from './pages/UserProfile';
import HcrmMissedCalls from './pages/HcrmMissedCalls';
import Analytics from './pages/Analytics';
import LiveCall from './pages/LiveCall';
import AdminDashboard from './pages/AdminDashboard';
import CallDetails from './pages/CallDetails';
import Employees from './pages/Employees';
import PersonalDetails from './pages/PersonalDetails';
import EditAgent from './components/EditAgent';
import AdminReport from './pages/AdminReport';
import CallFlow from './pages/CallFlow';
import Calender from './pages/Calender';

        function App() {  
          const [show, setShow] = useState(false);
          const [edit, setEdit] = useState(false);
          const [editAgent, setEditAgent] = useState(false);
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Login/>} />
     <Route path="/calender" element={<Calender />} />
     <Route path="/callflow" element={<CallFlow/>} />
     <Route path="/employees/report" element={<AdminReport/>} />
     <Route path="/editagent" element={<EditAgent editAgent={editAgent} setEditAgent={setEditAgent} />} />
     <Route path="/employees/personaldetails" element={<PersonalDetails edit={edit} setEdit={setEdit} editAgent={editAgent} setEditAgent={setEditAgent} />} />
     <Route path="/employees" element={<Employees edit={edit} setEdit={setEdit} editAgent={editAgent} setEditAgent={setEditAgent}  />} />
     <Route path="/hcrmdashboard/livecall" element={<LiveCall/>} />
     <Route path="/livecall:callId" element={<LiveCall />} />
     <Route path="/analytics" element={<Analytics/>} />
     <Route path="/hcrmreport/userprofile" element={<UserProfile/>} />
     <Route path="/hcrmdashboard/hcrmmissedcalls" element={<HcrmMissedCalls/>} />
     <Route path="hcrmreport/hcrmcallreportbyqueue" element={<HcrmCallReportByQueue/>} />
     <Route path="/hcrmreport/hcrmcallstats" element={<HcrmCallStats/>} />
     <Route path="/hcrmreport/hcrmcalls" element={<HcrmCalls/>} />
     <Route path="/hcrmreport/hcrmstatistics" element={<HcrmStatistics/>} />
     <Route path="/hcrmreport/hcrmallmessages" element={<HcrmAllMessages/>} />
     <Route path="/hcrmreport" element={<HcrmReport/>} />
     <Route path="hcrmreport/activeagent" element={<ActiveAgent/>} />
      <Route path="/hcrmdashboard" element={<HeadOfCrmDashboard/>} />
      <Route path="/agentdashboard" element={<AgentDashboard/>} />
      <Route path="admindashboard" element={<AdminDashboard />} />
      <Route path="admindashboard/callhistory" element={<Table show={show} setShow={setShow} />} />
      <Route path="/report/totalcalls" element={<TotalCalls />} />
      <Route path="/report" element={<Report />} />
      <Route path="/logs" element={<Logs/>} />
      <Route path="/missedcalls" element={<MissedCalls />} />
      <Route path="/queuecalls" element={<CallsOnQueue />} />
      <Route path="/logs/outboundcalls" element={<Outbound />} />
      <Route path="/report/totalmessage" element={<TotalMessage />} />
      <Route path="/logs/messages" element={<Messages />} />
      <Route path="/logs/createqueue" element={<CreateQueue />} />
      <Route path="/performance" element={<Performance />} />
      </Routes>
    </div>
  );
}

export default App;
