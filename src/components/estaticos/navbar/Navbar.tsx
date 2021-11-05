import React from "react";
import { AppBar, Toolbar, Typography,  Grid } from "@material-ui/core";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className="toolbar">
          <Box className="boxTopo" display="flex">
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={6}>
                <Box className="cursor">
                  <Typography variant="h5" className="cor-font-typography">
                    BlogPessoal
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                  className="margin-left"
                >
                  <Box mx={1} className="cursor hover">
                    <Typography variant="h6" className="cor-font-typography">
                      HOME
                    </Typography>
                  </Box>
                  <Box mx={1} className="cursor hover">
                    <Typography variant="h6" className="cor-font-typography">
                      POSTAGENS
                    </Typography>
                  </Box>
                  <Box mx={1} className="hover">
                    <Typography variant="h6" className="cor-font-typography">
                      TEMAS
                    </Typography>
                  </Box>
                  <Box mx={1} className="hover">
                    <Typography variant="h6" className="cor-font-typography" noWrap>
                      CADASTRAR TEMA
                    </Typography>
                  </Box>

                  <Box mx={1} className="hover">
                    <Link to="/login" className="text-decorator-none">
                      <Typography variant="h6" className="cor-font-typography">
                        LOGOUT
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
