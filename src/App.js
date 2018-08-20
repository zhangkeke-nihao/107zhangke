import React from 'react';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import GameHome from './container/GameHome/GameHome';
import './App.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <GameHome />
  </Provider>
);

export default App;
