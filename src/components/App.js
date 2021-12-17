import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import PrivateRoute from './PrivateRoute';
import Header from './Header';
import BloomHeader from './BloomHeader';
import Login from './Login';
import View from './View';
import Logout from './Logout';


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`

const App = () => {
  return (
    <AppContainer>
      <BloomHeader/>
      <Header/>
      <RouteContainer>
        <Route exact path='/'>
          <Login/>
        </Route> 
        <Route exact path='/login'>
          <Login/>
        </Route>
        <PrivateRoute exact path='/view' component={View} />
        <PrivateRoute exact path='/logout' component={Logout} />                
      </RouteContainer>
    </AppContainer>
  )
}

export default App;

