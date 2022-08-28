import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import AgentTopBar from '../components/AgentTopBar';
import AgentSideBar from '../components/AgentSideBar';
import { useNavigate } from "react-router-dom";

const StyledBox = styled(Box)`
`
const ReporHeading = styled.h3`
text-align: start;
margin: 30px 0 30px 6.6%;
`
const CardContainer = styled.div`

`
const Card = styled.div`
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
width: 200px;
height: 100px;
margin-left: 20%;
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;
transition: transform 0.3s;
:hover{
    elevate: 0.1px;
    transform: scale(1.1);
}
`
const Totals = styled.p`
 font-weight: bold;
 margin: 30px 0 5px 0;
`
const Nums = styled.p`
font-weight: bold;
margin: 5px 0 0 0;
`

function Report() {

   let navigate = useNavigate();
    const handleNavigate1 = () => {
        navigate('/report/totalcalls');
    }
    const handleNavigate2 = () => {
        navigate('/report/totalmessage');
    }

  return (
    <>
    <AgentTopBar />
    <StyledBox>
    <Grid container>
    <Grid item lg={2} md={2} sm={2} xs={3}>
        <AgentSideBar />
         </Grid>
         <Grid item  lg={10} md={10} sm={10} xs={9}>
         <ReporHeading>Report</ReporHeading>
         <CardContainer>
            <Grid container>
            <Grid item lg={4} md={4} sm={4} xs={12}>
            <Card onClick={handleNavigate1}>
         <Totals>Toal Calls</Totals>
         <Nums>250</Nums>
        </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
        <Card onClick={handleNavigate2}>
         <Totals>Toal Messages</Totals>
         <Nums style={{color: '#F9AD10'}}>120</Nums>
        </Card> 
        </Grid>
        </Grid>
         </CardContainer>
         </Grid>
         </Grid>
         </StyledBox>
          </>
  )
}

export default Report