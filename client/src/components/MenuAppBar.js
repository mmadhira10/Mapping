import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";


export default function MenuAppBar() {
  const theme = createTheme({
    typography: {
      button: {
        fontSize: 18,
        letterSpacing: '3px',
        fontFamily: '"Cambria"',
        color: "#E9D1B5"
      },
      link: {
        color: "#E9D1B5", 
        textDecoration: "none"
      }
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" style={{backgroundColor: '#441F1F'}}>
        <Toolbar>
          <Button color="inherit" style={{maxWidth: '407px', maxHeight: '75px', minWidth: '25%', minHeight: '60px'}}><Link style={{color: "#E9D1B5", textDecoration: "none"}} to="/">HOME</Link></Button>
          <Button color="inherit"  style={{maxWidth: '407px', maxHeight: '75px', minWidth: '25%', minHeight: '60px'}}><Link style={{color: "#E9D1B5", textDecoration: "none"}}  to="/map">MAP</Link></Button>
          <Button color="inherit"  style={{maxWidth: '407px', maxHeight: '75px', minWidth: '25%', minHeight: '60px'}}><Link style={{color: "#E9D1B5", textDecoration: "none"}}  to="/about">ABOUT</Link></Button>
          <Button color="inherit"  style={{maxWidth: '407px', maxHeight: '75px', minWidth: '25%', minHeight: '60px'}}><Link style={{color: "#E9D1B5", textDecoration: "none"}} to="/contact">CONTACT</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}