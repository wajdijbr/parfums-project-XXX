import React from 'react'
import CardMedia from '@mui/material/CardMedia';

const getStepContent=(step)=>{
  switch(step){
    case 0:
      return   <CardMedia sx={{ height: 400, mb:'15px',ml:"15px",mr:"15px" , borderRadius:1}} image="" title="step1"/> ;
      case 1:
        return   <CardMedia sx={{ height: 400, mb:'15px',ml:"15px",mr:"15px" , borderRadius:1}} image="" title="step2"/> ;
        case 2:
          return   <CardMedia sx={{ height: 400, mb:'15px',ml:"15px",mr:"15px" , borderRadius:1}} image="" title="step3"/> ;
          case 3:
            return   <CardMedia sx={{ height: 400, mb:'15px',ml:"15px",mr:"15px" , borderRadius:1}} image="" title="step4"/> ;
            case 4:
              return   <CardMedia sx={{ height: 400, mb:'15px',ml:"15px",mr:"15px" , borderRadius:1}} image="" title="step5"/> ;
              default:
                return   <CardMedia sx={{ height: 400, mb:'15px',ml:"15px",mr:"15px" , borderRadius:1}} image="" title="step1"/> ;
              }
}
const RightSide = (props) => {


 


  return (
    <>
    {getStepContent(props.activeStep)}
    </>
  )
}

export default RightSide