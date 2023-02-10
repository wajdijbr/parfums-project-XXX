import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { makeStyles } from '@mui/styles';
import { Grid} from '@mui/material';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


// const Item = styled(Paper)(({ theme }) => ({
//     textAlign : "center",
//     alignContent : 'center'

// }));


const useStyles = makeStyles({
container:{
padding: "2rem"
},
label:{
  paddingTop: '2rem',
  textAlign : 'center',
  fontWeight : 'bold'
},
sidebarright:{
  paddingTop: '1rem',
  paddingBottom: '1rem',
  background : "#5EABFF",
  textAlign : 'center',
  height : '500px',
  borderTopRightRadius : '8px',
  borderBottomRightRadius : '8px',
  boxShadow: "0 0 15px 5px rgba(178, 178, 178, 0.8)",


  
},
sidebarleft: {
    // background: "linear-gradient(to right, #5EABFF, pink)",
    background :"#E7E6E6",

  textAlign : 'center',
  height : '500px',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  borderTopLeftRadius : '8px',
  borderBottomLeftRadius : '8px',
  boxShadow: "0 0 15px 3px rgba(178, 178, 178, 0.8)",

}

});
const FormPage = () => {
    const [activeStep,setActiveStep]=   useState(0)
    const classes = useStyles()


  return (
    <>
    <Typography className={classes.label} variant='h5' component='h1' color='primary' >Order now</Typography>
    <Stepper activeStep={activeStep} alternativeLabel sx={{m:"2rem"}}>
      <Step>
        <StepLabel>
          first
        </StepLabel>
      </Step>
 
      <Step>
        <StepLabel>
          second
        </StepLabel>
      </Step>

      <Step>
        <StepLabel>
          third
        </StepLabel>
      </Step>

      <Step>
        <StepLabel>
          fourth
        </StepLabel>
      </Step>

      <Step>
        <StepLabel>
          fifth
        </StepLabel>
      </Step>
</Stepper>
    <Grid container align="center"  className={classes.container}  justifyContent='center' >
        <Grid  container  justifyContent='space-between' align="center"  maxWidth='sm' >
          <Box className={classes.sidebarleft} width="60%" xs={8} lg={8} md={8} sm={8}>
            <LeftSide activeStep={activeStep} setActiveStep={setActiveStep}/>
          </Box>
          <Box  className={classes.sidebarright} width="40%" xs={4} lg={4} md={4} sm={4}>
            <RightSide activeStep={activeStep} />
          </Box>
          </Grid>
          </Grid>

    </>
  )
}

export default FormPage