import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Nav from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <div style={{ minHeight: '100vh' }}>
        <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/Login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  )
}
export default App;

/* <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
 </Grid> */
    // <Home/>