import React from 'react'
import '../css/AboutPage.css';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  margin: "1rem",
   
    textAlign : "center"
}));

function AboutPage() {
  return (
    <>
<Grid
  container
  direction="row"
>
<Grid item xs={12}>
          <Item>
          <Card sx={12}>
      <CardMedia
        sx={{ height: 550}}
        image="https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/243111287_1810087422526932_13319834843027101_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zbPHxBz8nNgAX-pgh3r&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfCa0j0FTezZZJe4xwqzHpKrhhjlp2YxDPXse8XPg2Usqg&oe=63D2195A"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h1" >
          BEN JABER LTD
        </Typography>
        <Typography variant="body2" color="text.secondary">
      Culpa ullamco eu non eu nostrud deserunt laboris voluptate tempor minim enim eu incididunt. Aliquip minim ipsum pariatur magna sint voluptate exercitation id ipsum. Laborum officia ad consectetur laborum sit. Non occaecat do reprehenderit dolor laborum laborum quis quis qui in ipsum.
             </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Contact Us</Button>
      </CardActions>
    </Card>


          </Item>
        </Grid>
       
</Grid>
    </>
  )
}

export default AboutPage