import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchBar from './SearchBar'
import { fontSize, margin } from "@mui/system";
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import paper from './img/paper.png';

const NewButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 24,
    fontFamily: 'Cambria',
    padding: '6px 20px',
    border: '3px solid',
    lineHeight: 1.5,
    backgroundColor: 'linen',
    borderColor: '#8E3E3E',
    minWidth: '30%',
    minHeight: '60px',
    margin: '10px',
    color: '#8E3E3E',
    '&:hover': {
      backgroundColor: '#8E3E3E',
      boxShadow: 'none',
      color: 'linen'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

export default function PeoplePage() {
    const theme = createTheme({
        typography: {
          button: {
            fontSize: 24,
            fontFamily: '"Cambria"',
          },
          h2: {
            fontSize: 40,
            fontFamily: '"Cambria"',
            fontColor: "Black",
            fontStyle: "italic",
          },
          p: {
            fontSize: 20,
            fontFamily: '"Cambria"',
            fontColor: "Black",
          }
        },
      });

    return(
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 3 }} style={{ backgroundImage: `url(${paper})`, position: 'absolute', left: 0, right: 0, top: 0, height: '100%'}}>
              <Box class="styledTextField" style={{position: 'static', maxWidth: '85%', margin: 'auto', marginTop: '150px'}}>
                <Typography variant="h2"> Contact </Typography>
                <Typography variant="p"> For more information, please contact... </Typography>
              </Box>
            </Box>
        </ThemeProvider>
    );
}