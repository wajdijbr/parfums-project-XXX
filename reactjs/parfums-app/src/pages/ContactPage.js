import React from 'react'
import '../css/ContactPage.css'

import { Button, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import CardMedia from '@mui/material/CardMedia';

// const Item = styled(Paper)(({ theme }) => ({
//     textAlign : "center",
//     alignContent : 'center'

// }));


const ContactPage = () => {
  return (
    <>
     <Typography component="h1" variant='h5' align='center' color="primary" sx={{padding:"1rem"}}> Contact US </Typography>

      <Grid container Spacing={6} >
              <Grid Item  justifyContent="center" alignItems="center" xs={12} sm={6} md={6} xl={4}>


                    <Grid Item className='text-field'>
                    <CardMedia
                        sx={{ height: 400, mb:'15px',ml:"15px",mr:"15px" , borderRadius:1}}
                        image="https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/243111287_1810087422526932_13319834843027101_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zbPHxBz8nNgAX-pgh3r&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfCa0j0FTezZZJe4xwqzHpKrhhjlp2YxDPXse8XPg2Usqg&oe=63D2195A"
                        title="green iguana"
                      />
                    </Grid>

               </Grid>

        <Grid Item  justifyContent="center" alignItems="center" xs={12} sm={6} md={6} xl={4}>


                      <Grid Item className='text-field'>
                        <TextField fullWidth required id="nom" label="First Name" />
                      </Grid>

                      <Grid Item className='text-field'>
                        <TextField fullWidth required id="prenom" label="Last Name" />
                      </Grid>

                      <Grid Item className='text-field'>
                        <TextField fullWidth required id="email" label="E-mail" />
                      </Grid>

                      <Grid Item className='text-field'>
                        <TextField fullWidth required id="subject" label="Subject" />
                      </Grid>
                    
                      <Grid Item className='text-field'>
                         <TextField id="filled-multiline-flexible" label="Message" multiline  fullWidth  />    
                      </Grid>

                      <Grid Item className='text-field'>
                         <Button variant='contained' >click</Button>   
                      </Grid>


        </Grid>



    

      </Grid>


    </>
     )
}

export default ContactPage