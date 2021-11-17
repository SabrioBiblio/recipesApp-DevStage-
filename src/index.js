import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {initializeApp} from 'firebase/app';
import 'firebase/auth';
import {composeWithDevTools} from 'redux-devtools-extension';
import useDatabase from './hooks/useDatabase';

import './index.css';
import App from './App';
import recipesReducer from './store/recipesReducer';

const app = initializeApp({
  apiKey: 'AIzaSyDT1n9ArMbqjAwtTb77aPx11pONvtKeGo8',
  authDomain: 'recipesapp-44662.firebaseapp.com',
  projectId: 'recipesapp-44662',
  storageBucket: 'recipesapp-44662.appspot.com',
  messagingSenderId: '585892664897',
  appId: '1:585892664897:web:62d073dde70974687798c0',
  measurementId: 'G-4ZEXY0L8WH',
});
const {getDocument, setDocument} = useDatabase();
const get = async () => {
  const a = await getDocument('users');
}
get()

const rootReducer = combineReducers({
  recipesReducer,
});


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(

    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
);
