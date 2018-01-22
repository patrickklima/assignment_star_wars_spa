import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import starWarsApp from './reducers';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

var store = createStore(starWarsApp, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, 
document.getElementById('root'));
