import React, { Component } from 'react';
import Op from './container/Op'
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Op />
      </Provider>
    );
  }
}
