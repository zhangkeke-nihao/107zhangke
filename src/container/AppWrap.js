import React, { Component } from 'react';

export default class AppWrap extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="wrap">
        {children}
      </div>
      );
  }
}

