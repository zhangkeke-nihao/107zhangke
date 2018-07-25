import React, { Component } from 'react';
import Message from './container/Message'

import { Provider } from 'react-redux';
import { createStore } from 'redux';  
import rootReducer from './reducers';
const store = createStore(rootReducer)


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
