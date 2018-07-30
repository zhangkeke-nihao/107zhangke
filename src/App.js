import React, { Component } from 'react';
import Op from './container/Op'

import 'antd/dist/antd.css';


import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';  
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
const logger = createLogger();  

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
  )
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Op />
      </Provider>    
    );
  }
}

export default App;
