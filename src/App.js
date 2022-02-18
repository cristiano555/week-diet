import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyles from './helpers/styles.js';
import Header from './components/Header/Header'
import MealPlan from './components/MealPlan/MealPlan'
import InformationBar from './components/InformationBar/InformationBar'

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Router>
          <Header/>      
          <Switch>
            <Route exact path="/">
              <MealPlan />
              <InformationBar />   
            </Route>
          </Switch>
      </Router> 
    </>
  );
}

export default App;
