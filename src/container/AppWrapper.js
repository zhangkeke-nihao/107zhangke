import React, { Component } from 'react';

export default class AppWrapper extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="wrap">
        {children}
      </div>
      );
  }
}

