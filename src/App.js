import React, { Component } from 'react';
import Message from './container/Message'

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
        <Message />
      </Provider>
      
    );
  }
}

export default App;
