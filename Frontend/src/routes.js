import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import NewSpot from './pages/New/NewSpot';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component = {Login}/>
        <Route path='/dashboard' component = {Dashboard}/>
        <Route path= '/newSpot' component ={NewSpot}/>
      </Switch>
    </BrowserRouter>
  )
}
