import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { children } = this.props
    return (
      <div className="wrap">
        {children}
      </div>
      );
  }
}

