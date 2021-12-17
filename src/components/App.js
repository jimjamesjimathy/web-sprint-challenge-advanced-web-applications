import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import PrivateRoute from './PrivateRoute';
import Header from './Header';
import BloomHeader from './BloomHeader';
import Login from './Login';
import View from './View';
import Logout from './Logout';





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

//Task List
//1. Create and import PrivateRoute component. x
//2. Create a Route for Login pointing to '/login.' x
//3. Create a PrivateRoute for View component point to '/view.' x
//4. Create a PrivateRoute for Logout component pointing to '/logout.' x


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
