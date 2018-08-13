import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import ReviewWrapper from './container/ReviewWrap/ReviewWrapper'

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <ReviewWrapper />
      </Provider>
      );
  }
}

