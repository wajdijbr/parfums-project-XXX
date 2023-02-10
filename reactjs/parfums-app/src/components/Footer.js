import {Link } from 'react-router-dom'
import '../css/Footer.css';
import {Grid, Typography} from '@mui/material'


const Footer =()=> {
     
          return (
               <>
               <Grid container sx={{backgroundColor:'inherit'}} className='footerback' > 



                              <Grid item container direction='column'  align="center" xs={12} lg={4} sm={4} md={4} >
              
                                         <Grid  ><h5 className="footer-menu-title">More Information </h5></Grid>
                                         <Grid > <Link to ="/about" className="footer-link" >About us</Link ></Grid>
                                         <Grid  >  <Link to ="/company" className="footer-link">Company</Link></Grid>
                                         <Grid > <Link to ="/contact" className="footer-link" >Contact us </Link> </Grid>
                                       
                              </Grid>


                              <Grid item container direction='column' align="center"  xs={12} lg={4} md={4} sm={4} >
              
                                         <Grid  item><h5 className="footer-menu-title">More Information </h5></Grid>
                                         <Grid  item>  <Link to ="/purchasepolicy" className="footer-link" >purchase policy</Link ></Grid>
                                         <Grid  item> <Link to ="/privceypolicy" className="footer-link">Privcey policy</Link></Grid>
                                         <Grid  item><Link to ="/refundpolicy" className="footer-link" >Refund Policy </Link> </Grid>
                              
                                       
                              </Grid>


                              <Grid item container  align="center" justifyContent='center'  xs={12} lg={4}  sm={4} md={4} >
              
                              <h5 className="footer-menu-title">Company Address </h5>
                                        <Typography className='address' >1765 street Street - near the city of street </Typography>
                                        <Typography className='address' > <i className="fa fa-envelope"></i> wajdijbr@gmail.com </Typography>
                                       
                              </Grid>

                  
                                   
               </Grid>     
               <div className='reserved'>
               <Typography variant='p'  >All Rights is reserved for BEN JABER LTD 2023</Typography>     
               </div>
               </>
          )
     }

export default Footer