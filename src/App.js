import React from 'react';
import useDatabase from './hooks/useDatabase';

import Header from './components/Header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import RecipePage from './pages/Recipe/RecipePage.js';
import Wishlist from './pages/Wishlist/Wishlist';

function App() {
  const {getDocument, setDocument} = useDatabase();

  const get = async () => {
    const a = await getDocument('users');
  }
  get()

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/"><MainPage/></Route>
        <Route path="/recipe/:id"><RecipePage/></Route>
        <Route path="/wishlist/"><Wishlist/></Route>
      </Switch>
    </Router>
  );
}

export default App;
