import Nav from './components/nav/Nav'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import CountryPage from './components/pages/CountryPage'

import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { getInitialCountries } from './components/Api/index'


function App() {



  return (

    <Router>

      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/country/:country" component={CountryPage} />
          <Route component={NotFound} />
        </Switch>

      </>

    </Router>

  );
}

export default App;
