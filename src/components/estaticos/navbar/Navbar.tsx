import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
  return (
    <Grid container className='nav'>
      
        <AppBar position="static">
          <Toolbar variant="dense">
            <Box style={{ cursor: "pointer" }} >
              <Typography variant="h5" color="inherit">
                BlogPessoal
              </Typography>
            </Box>
            <Box display="flex" justifyContent="start">
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  home
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  postagens
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  temas
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  cadastrar tema
                </Typography>
              </Box>
              <Link to='/login' className='text-decorator-none'>
                <Box mx={1} style={{ cursor: "pointer", color: "white" }}>
                  <Typography variant="h6" color="inherit">
                    logout
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
    
    </Grid>
  )
}

export default Navbar;