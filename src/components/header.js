import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';
//import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme ({
  palette:{
    primary: purple
  }
});

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/*  
              <MenuIcon />
              */}
            </IconButton>
            <ThemeProvider theme={theme}>
              <Typography color="primary" variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Gerenciamento de Projetos
              </Typography>
            </ThemeProvider>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
 
export default Header;