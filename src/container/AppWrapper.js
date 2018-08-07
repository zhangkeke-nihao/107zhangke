import React, { Component } from 'react';
import Search from '../components/search/search'
import HomeRemarkWrap from "./homeremarkwrap";

export default class AppWrapper extends Component {
  render() {
    return (
      <div className="wrap">
        <Search />
        <HomeRemarkWrap />
      </div>
      );
  }
}

