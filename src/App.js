import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import routes from './routes'

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router,browserHistory } from 'react-router'

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router routes={routes} history={browserHistory}/>
      </Provider>
      );
  }
}

