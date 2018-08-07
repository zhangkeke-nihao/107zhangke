import React, { Component } from 'react';
import TabNav from '../components/tab/tabNav'
import './home.css'


export default class HomeRemarkWrap extends Component { 
  
  render() {
    const { homeworkdata } = this.props;
    return (
      <div className="home-wrap">
          <TabNav />
      </div>
      );
  }
}



