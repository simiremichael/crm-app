import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from "react-router-dom";
import AdminTopBar from '../components/AdminTopBar';
import AdminSideBar from '../components/AdminSideBar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, dateFnsLocalizer, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'


const StyledBox = styled(Box)`
`

const BodyContainer = styled.div`
`
const CalendarContainer = styled.div`
 margin: 70px 4% 0 4%;
 @media screen and (max-width: 680px) {
  
}
 `
 const BigCalendarContainer = styled.div`
 margin: 70px 4% 15px 4%;
 height: 500px;
 @media screen and (max-width: 680px) {
  margin-top: 30px;
}
 `
 const ContactsTitle = styled.p`
 font-size: 1.5rem;
 font-weight: 600;
 color: #383838;
 `
 const ContactsContent = styled.p`
 text-align: start;
 font-size: 2.5vmin;
 `
 const CreateContactsContainer = styled.div`
 
 `
 const CreateContacts = styled.button`
 outline: none;
 border: 0.5px solid #FF2525;
 height: 36px;
 background-color: #FF2525;
 color: #ffffff;
 font-weight: 500;
 font-size: 1rem;
 border-radius: 5px;
 cursor: pointer;
 margin-right: 10px;
 `
const PlusTitleContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 `
 const DateTitleInput = styled.input`
 width: 100%;
 margin-bottom: 10px;
 height: 30px;
 outline: none;
 border-radius: 5px;
 border: 0.5px solid #D3D3D3;
 `
 const DateButton = styled.button`
 width: 100%;
 outline: none;
 background-color: #FF2525;
 color: #ffffff;
 font-weight: bold;
 border: none;
 height: 30px;
 width: 100%;
 border-radius: 5px;
 cursor: pointer;
 margin-top: 20px;
 `
 const DatePickers = styled(DatePicker)`
 width: 50%;
 outline: none;
 border-radius: 5px;
 height: 30px;
 border: 0.5px solid #D3D3D3;
 color: #494949;
 cursor: pointer;
 `
 const P = styled.p`
 margin: 0;
 color: #494949;
 `


const localizer = momentLocalizer(moment)

/*
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
*/
const eventsList = [
  {
  title: 'Lost Id Card',
  allDay: true,
  start: new Date(2022,6,13),
  end:  new Date(2022,6,13) 
  },
  {
    title: 'Insurancee',
    start: new Date(2022,7,15),
    end: new Date(2022,7,15)
    },
    {
      title: 'Forget Password',
      start: new Date(2022,7,16),
      end: new Date(2022,7,16)
      }
  ]

function Calender() {

    const [startDate, setStartDate] = useState(new Date());
    const [newEvent, setNewEvent] = useState({title: '', start: new Date() , end: new Date() });
    const [allEvents, setAllEvents] = useState(eventsList);
  
    const handleAddEvent = () => {
        setAllEvents([...allEvents, newEvent]);
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
         <BodyContainer>
         <Grid container>
        <Grid item lg={3} md={3} sm={12} xs={12}>
        <CalendarContainer>
              
              <DateTitleInput type='text' placeholder='Add Tittle' 
              value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} />
              <P> Start date </P>
             <DatePickers placeholderText='Start Date'
                selected={newEvent.start} onChange={(start: Date) => setNewEvent({...newEvent, start})} 
                dateFormat="Pp"
                showTimeSelect              
             />
             <P> End date </P>
              <DatePickers placeholderText='End Date'
                 selected={newEvent.end} onChange={(end: Date) => setNewEvent({...newEvent, end })}  
                 dateFormat="Pp"
                 showTimeSelect  
               />
              <DateButton  onClick={handleAddEvent}>Add Event</DateButton>
 
        </CalendarContainer>
        </Grid>
        <Grid item lg={9} md={9} sm={12} xs={12}>
        <BigCalendarContainer>
              <Calendar
                 localizer={localizer}
                 events={allEvents}
                 startAccessor="start"
                 endAccessor="end"
               />
              </BigCalendarContainer>
        </Grid>
        </Grid>
         </BodyContainer>
         </Grid>
         </Grid>
         </StyledBox>
    </>
  )
}

export default Calender