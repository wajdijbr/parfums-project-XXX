import './App.css';
import AppRouter from './AppRouter';
import {  BrowserRouter } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

import React,{useState} from 'react';


function App() {

  const [darkMode,setDarkMode] = useState(false)
  const theme = createTheme( {
  
    palette: {
      mode: darkMode ? "dark" : "light" ,
  

  

    },
  //   typography: {
  //     fontFamily: 'Open Sans',
  //   },
  //   shape: {
  //     borderRadius: 4,
  //   },
   
    
   });
  


  return (
    <>
 <ThemeProvider theme={theme} >   
<BrowserRouter>

<AppRouter checked ={darkMode}  onChange={()=> setDarkMode(!darkMode)}/>

</BrowserRouter>
</ThemeProvider >    

    </>
  );
}

export default App;
