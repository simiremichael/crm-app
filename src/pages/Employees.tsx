
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import AdminTopBar from '../components/AdminTopBar';
import AdminSideBar from '../components/AdminSideBar';
import PersonalDetails from './PersonalDetails';
import EditAgent from '../components/EditAgent';

const StyledBox = styled(Box)`

`
const TopContainer = styled.div`
margin-top: 30px ;
`
const SearchContainer = styled.div`
border: 2px solid #C4C4C4;
width: 98%;
height: 38px;
border-radius: 10px;
display: flex;
align-items: center;
margin-left: -10px;
`
const Input = styled.input`
height: 96%;
width: 90%;
border: none;
outline: none;
margin-right: 3px;
border-radius: 10px;
`
const SearchSvg = styled.svg`
width: 20px;
height: 20px;
margin: 0 15px;
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
margin-top: 0;
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
margin-bottom: 5px;
`
const AllStaff = styled.button`
outline: none;
border: none;
background: inherit;
display: flex;
align-items: center;
cursor: pointer;
margin-left: 26%;
border: 0.5px solid #c4c4c4;
padding: 10px;
border-radius: 5px;
`
const AllStaffSvg = styled.svg`
width: 18px;
height: 18px;
margin-left: 10px;
`

const AddBtn = styled.button`
cursor: pointer;
color: #fff;
background: #000;
outline: none;
border: none;
display: flex;
align-items: center;
padding: 10px 12px;
border-radius: 5px;
margin-left: 18%;
`
const AddBtnSvg = styled.svg`
width: 18px;
height: 18px;
color: #fff;
`
const MenuContainer = styled.div`
background: #000;
width: 35px;
height: 35px;
border-radius: 10px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
margin-left: 35%;
`
const MenuSvg = styled.svg`
width: 25px;
height: 25px;
color: #fff;
`
const ShowContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const ShowSvg = styled.svg`
width: 20px;
height: 20px;
`
const PenContainer = styled.div`
margin-right: 10px;
cursor: pointer;
`
const DeleteContainer = styled.div`
cursor: pointer;
`
const EyeContainer = styled.div`
margin-left: 10px;
cursor: pointer;
`
const UserContainer = styled.div`
width: 100%;
height: 100%;
margin-right: 10px;
display: flex;
justify-content: center;
align-items: center;
margin: 0;
`
const UserName= styled.p`

`
const UserSvg = styled.svg`
width: 20px;
height: 20px;
margin-right: 5%;
`


function Employees(props: {edit: any, setEdit: any, editAgent: any, setEditAgent: any}) {

    const [value, setValue] = React.useState<Date | null>(
        new Date(),
      );
      const [show, setShow] = useState(false);
      let edit = props.edit;
      let setEdit = props.setEdit;
       let editAgent = props.editAgent;
    let setEditAgent = props.setEditAgent;
      
  

    const handleShow = () => {
         setShow(!show) 
    }
    
    const handleEdit = () => {
        setEdit(!edit);
    }
    const handleEditAgent = () => {
        setEditAgent(!editAgent);
    }

  return (
    <>
    <AdminTopBar />
    <StyledBox>
    <Grid container>
    <Grid item lg={2} md={2} sm={2} xs={3}>
        <AdminSideBar />
         </Grid>
         <Grid item  lg={10} md={10} sm={10} xs={9}>
         <TopContainer>
       <Grid container spacing={2}>
       <Grid item lg={2} md={2} sm={2} xs={2}>
        <AllStaff>
            All staff
            <AllStaffSvg xmlns="http://www.w3.org/2000/svg" width="0.63em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4l96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/></AllStaffSvg>
            </AllStaff>
       </Grid>
       <Grid item lg={3} md={3} sm={3} xs={0}></Grid>
       <Grid item lg={5} md={5} sm={5} xs={5}>
       <SearchContainer>
        <SearchSvg  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m16.325 14.899l5.38 5.38a1.008 1.008 0 0 1-1.427 1.426l-5.38-5.38a8 8 0 1 1 1.426-1.426ZM10 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"/></SearchSvg>
        <Input  type='search' placeholder='Search here' />
        </SearchContainer>
       </Grid>
       <Grid item lg={2} md={2} sm={2} xs={2}>
        <AddBtn>
        <AddBtnSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601c-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/></AddBtnSvg>
            Add new
            </AddBtn>
       </Grid>
       </Grid>
       </TopContainer>
        <Grid container>
        <Grid item lg={0.5} md={0.5} sm={0} xs={0}></Grid>
          <Grid item lg={11} md={11} sm={12} xs={12}> 
          <Tables>
          <Thead>
         <Tr>
            <Th>Name</Th>
            <Th>ID</Th>
            <Th>Email</Th>
            <Th>Position</Th>
            <Th>Mobile</Th>
            <Th>Status</Th>
            <Th>Action</Th>
         </Tr>
         </Thead>
         <Tbody>
         <Tr>
            <Td>
            <UserContainer>
            <UserSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"/></UserSvg>
            <UserName>Jane Jones</UserName>
            </UserContainer>
            </Td>
            <Td>31003</Td>
            <Td>janejones@gmail.com</Td>
            <Td>Call Agent</Td>
            <Td>01-332-20-1234</Td>
            <Td>Active</Td>
            <Td>
            {!show && ( 
            <MenuContainer onClick={handleShow}>
            <MenuSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><circle cx="16" cy="8" r="2" fill="currentColor"/><circle cx="16" cy="16" r="2" fill="currentColor"/><circle cx="16" cy="24" r="2" fill="currentColor"/></MenuSvg>
            </MenuContainer>
            )}
            {show && ( 
            <ShowContainer>
            <PenContainer onClick={handleEditAgent}>
            <ShowSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="m290.74 93.24l128.02 128.02l-277.99 277.99l-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22l277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55l128.02 128.02l56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"/></ShowSvg>
            </PenContainer>
            <DeleteContainer onClick={handleShow}>
            <ShowSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M8.5 4h3a1.5 1.5 0 0 0-3 0Zm-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-1.194 10.344A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1h5ZM9 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V8Zm2.5-.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V8a.5.5 0 0 0-.5-.5Z"/></ShowSvg>
            </DeleteContainer>
            <EyeContainer onClick={handleEdit}>
            <ShowSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962Z"/><circle cx="12" cy="12" r="3"/></g></ShowSvg>
            </EyeContainer>
            </ShowContainer>
            )}
            </Td>
          </Tr>
         <Tr>
         <Td>
         <UserContainer>
            <UserSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"/></UserSvg>
            <UserName>Jane Jones</UserName>
            </UserContainer>
         </Td>
            <Td>31003</Td>
            <Td>janejones@gmail.com</Td>
            <Td>Call Agent</Td>
            <Td>01-332-20-1234</Td>
            <Td>Active</Td>
            <Td>
            {!show && ( 
            <MenuContainer onClick={handleShow}>
            <MenuSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><circle cx="16" cy="8" r="2" fill="currentColor"/><circle cx="16" cy="16" r="2" fill="currentColor"/><circle cx="16" cy="24" r="2" fill="currentColor"/></MenuSvg>
            </MenuContainer>
            )}
            {show && ( 
            <ShowContainer>
            <PenContainer>
            <ShowSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="m290.74 93.24l128.02 128.02l-277.99 277.99l-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22l277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55l128.02 128.02l56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"/></ShowSvg>
            </PenContainer>
            <DeleteContainer onClick={handleShow}>
            <ShowSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M8.5 4h3a1.5 1.5 0 0 0-3 0Zm-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-1.194 10.344A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1h5ZM9 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V8Zm2.5-.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V8a.5.5 0 0 0-.5-.5Z"/></ShowSvg>
            </DeleteContainer>
            <EyeContainer>
            <ShowSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962Z"/><circle cx="12" cy="12" r="3"/></g></ShowSvg>
            </EyeContainer>
            </ShowContainer>
            )}
            </Td>
          </Tr>
         <Tr>
         <Td>
         <UserContainer>
            <UserSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"/></UserSvg>
            <UserName>Jane Jones</UserName>
            </UserContainer>
         </Td>
            <Td>31003</Td>
            <Td>janejones@gmail.com</Td>
            <Td>Call Agent</Td>
            <Td>01-332-20-1234</Td>
            <Td>Active</Td>
            <Td>
            {!show && ( 
            <MenuContainer onClick={handleShow}>
            <MenuSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><circle cx="16" cy="8" r="2" fill="currentColor"/><circle cx="16" cy="16" r="2" fill="currentColor"/><circle cx="16" cy="24" r="2" fill="currentColor"/></MenuSvg>
            </MenuContainer>
            )}
            {show && ( 
            <ShowContainer>
            <PenContainer>
            <ShowSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="m290.74 93.24l128.02 128.02l-277.99 277.99l-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22l277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55l128.02 128.02l56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"/></ShowSvg>
            </PenContainer>
            <DeleteContainer onClick={handleShow}>
            <ShowSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M8.5 4h3a1.5 1.5 0 0 0-3 0Zm-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-1.194 10.344A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1h5ZM9 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V8Zm2.5-.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V8a.5.5 0 0 0-.5-.5Z"/></ShowSvg>
            </DeleteContainer>
            <EyeContainer>
            <ShowSvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962Z"/><circle cx="12" cy="12" r="3"/></g></ShowSvg>
            </EyeContainer>
            </ShowContainer>
            )}
            </Td>
          </Tr>
         </Tbody>
        </Tables>
        </Grid>
        </Grid>
        {edit && ( 
        <PersonalDetails edit={edit} setEdit={setEdit} editAgent={editAgent} setEditAgent={setEditAgent}  />
        )}
        {editAgent && (
            <EditAgent editAgent={editAgent} setEditAgent={setEditAgent} />
        )}
       </Grid>
       </Grid>
    </StyledBox></>
  )
}

export default Employees