import React, { Component } from 'react';
import MessageList from './components/MessageItem/MessageList'
import TopBar from './components/TopBar/TopBar';
import NavBar from './components/NavBar/NavBar';
import {DIALOG_SHOW_STATES} from './const'
import './App.css';

const iconm = require('./image/message.png')
const iconl = require('./image/list.png')
const iconf = require('./image/find.png')
const iconw = require('./image/wo.png')

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      messages:[
        {
          icon: iconm,
          txt: '微信',
          color: ['red','pink','black','yellow'],
          botxt: '微信',
          isChanged: false
        },
        {
          icon: iconl,
          txt: '通讯录',
          color: ['red','pink','black','yellow'],
          botxt: '通讯录',
          isChanged: false
        },
        {
          icon: iconf,
          txt: '发现',
          color: ['red','pink','black','yellow'],
          botxt: '发现',
          isChanged: false
        },
        {
          icon: iconw,
          txt: '我',
          color: ['red','pink','black','yellow'],
          botxt: '我',
          isChanged: false
        }
      ],
    }
  }



  render() {
    return (
      <div className="wrap">
        <TopBar />
        <MessageList messages={this.state.messages} />
        <NavBar messages={this.state.messages} /> 
      </div>
    );
  }
}

export default App;

