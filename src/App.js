import React from 'react';

import Header from './components/Header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import RecipePage from './pages/Recipe/RecipePage.js';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/"><MainPage/></Route>
        <Route path="/recipe/:id"><RecipePage/></Route>
      </Switch>
    </Router>
  );
}

export default App;
