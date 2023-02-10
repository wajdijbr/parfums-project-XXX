import React from 'react'
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';

import { Button, Grid} from '@mui/material';

const getStepContent=(step)=>{
  switch(step){
    case 0:
      return <Step1 /> ;
      case 1:
        return <Step2 /> ;
        case 2:
          return <Step3 /> ;
          case 3:
            return <Step4 /> ;
            case 4:
              return <Step5 /> ;
              default:
                return <Step1/> ;
  }
}
const LeftSide = (props) => {

  const step =  props.activeStep 
    const nextStep=()=>{
        if(step < 4)
      props.setActiveStep((currentStep)=> currentStep +1)  

    }

    const prevStep =()=>{
        if(step !== 0)

        props.setActiveStep((currentStep)=> currentStep -1)  

    }
  
  return (
    <>
    <Grid container direction="column" justifyContent='space-between' sx={{padding:"1rem"}}>


        <Grid item sx={{ height:'450px'}}>
            {getStepContent(step)}
        </Grid>


        <Grid item container justifyContent="space-between" >
            <Button variant='outlined' color='error' onClick={prevStep}>Back</Button>
            <Button variant='outlined' color='success' onClick={nextStep}>next</Button>
        </Grid> 

    </Grid>
    </>
  )
}

export default LeftSide