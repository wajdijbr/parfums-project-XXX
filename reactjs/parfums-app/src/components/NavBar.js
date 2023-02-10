import { AppBar, Toolbar, Typography ,Button} from '@mui/material';
import {Link} from 'react-router-dom';
import Switch from '@mui/material/Switch';

import '../css/Navbar.css';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     background: 'transparent',
//     boxShadow: 'none',
//   },
//   title: {
//     flexGrow: 1,
//     textShadow: '2px 2px #000000',
//   },
//   logo: {
//     marginRight: theme.spacing(2),
//   },
// }));

function NavBar(props) {
//   const classes = useStyles();
const {checked,onChange} = props
  return (
    <AppBar position="static" color='inherit' >
      <Toolbar  >
        {/* <img src="" className='logo' /> */}
        <Typography variant="h6" className='titre'>
            store Name
        </Typography>
        
        <Link to="/" underline="hover" >
            <Button variant='text'   className='navbar'>Home</Button>
          </Link>
          <Link to="/about" underline="hover">
            <Button  variant='text'  className='navbar'>About</Button>
          </Link>
          <Link to="/contact" underline="hover">
            <Button  variant='text' className='navbar'>Contact</Button>
          </Link>
          <Link to="/register" underline="none">
            <Button  variant='text'  className='navbar'>Register</Button>
          </Link>
          <Switch checked={checked} onChange={onChange} />

      </Toolbar>
    </AppBar>
  );
}
export default NavBar;