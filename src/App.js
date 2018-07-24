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
          botxt: '微信',
          
        },
        {
          icon: iconl,
          txt: '通讯录',
          botxt: '通讯录'
        },
        {
          icon: iconf,
          txt: '发现',
          botxt: '发现'
        },
        {
          icon: iconw,
          txt: '我',
          botxt: '我'
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

