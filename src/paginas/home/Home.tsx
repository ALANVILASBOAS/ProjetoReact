import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#11051C" }}>
                <Grid alignItems="flex-start" item xs={6}>
                    <Box paddingX={3} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#FF003A", fontWeight: "bold" }}>Seja bem vindo!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#CD012F", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://imgur.com/s4aaFus.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;




// <>
//     <Paper>
//         <Box p={2}>
//             <Box display="flex" justifyContent="center">
//                 <h1>Título</h1>
//             </Box>
//                 <img src="https://storage.googleapis.com/atados-v3/user-uploaded/images/8010b1b6-32bc-4dd4-bc11-a4a607c9974c.png"  alt="" style={{width:'100%', height:'100%'}} />
//             <Box display='flex' justifyContent='center' p={2}>
//                 <Button variant="contained" color="primary">opção 1</Button>
//                 <Button variant="contained" color="secondary">opção 2</Button>
//             </Box>
//         </Box>
//     </Paper>
// </>



{/* 
    <Grid container spacing={1}>
        *↓ Se a tela for pequena (sx) preencha 12, se for médio e acima, preencha 8 *
        <Grid item xs={12} sm={8}> 
            <Paper style={{height:"100vh",background:"lightgrey"}}/> 
        </Grid>
        *↓ Vai agir como coluna, e se a tela for pequena (sx) preencha 12, se for médio e acima, preencha 8 *
        <Grid item container direction='column' xs={12} sm={4} spacing={1}> 
            <Grid item>
                <Paper style={{height:"49vh",background:"orange"}}/>
            </Grid>
            <Grid item>
                <Paper style={{height:"49vh",background:"green"}}/>
            </Grid>

        </Grid>
    </Grid> */}
{/* <h1 className="titulo">Minha primeira pagina usando React!</h1>
            <img src="https://i.imgur.com/RZoeopR.jpeg" alt="imagem tela inicial" className='img' /> */}
