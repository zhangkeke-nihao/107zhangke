import React, { Component } from 'react';
import MessageItem from './components/MessageItem.js';
import TopBar from './components/TopBar.js';
import NavBar from './components/NavBar.js';
import DialogView from './components/DialogView.js';
import DeleteView from './components/DeleteView.js';
import {DIALOG_SHOW_STATES} from './const'
import './App.css';

const icon1 = require('./image/bg1.jpg')
const icon2 = require('./image/bg2.jpg')
const icon3 = require('./image/bg3.jpg')


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      message:[
        {
          icon: icon1,
          title: '小年糕',
          descript: 'Hello 小年糕',
          time: '2018-7-21'
        },
        {
          icon: icon2,
          title: '小板凳',
          descript: 'Hello 小板凳',
          time: '2018-7-22'
        },
        {
          icon: icon3,
          title: '小豆包',
          descript: 'Hello 小豆包',
          time: '2018-7-23'
        },
      ],
      showDialog: DIALOG_SHOW_STATES.HIDE,
      deleArr: null,
      handleIndex: null
    }
  }

  //点击加号，转换状态值
  handleShowAddDialog = () => {
    this.setState({
      showDialog: DIALOG_SHOW_STATES.SHOW_ADD_MESSAGE,
    })
  }
   //点击更多，转换状态值,把当前li的序号赋值给handleIndex
  handleShowMoreDialog = index => {
    this.setState({
      showDialog: DIALOG_SHOW_STATES.SHOW_MORE_DIALOG,
      handleIndex: index,
    })
  }

  //关闭转换状态
  handleShowDialog = isActive => {
    this.setState({
      showDialog: isActive,
    })
  }
  //添加消息到最上面
  handleAddItem = item => {
    const newMessage = this.state.message.slice();
    newMessage.unshift({
      icon : icon1,
      ...item
    })
    this.setState({
      message : newMessage,
      showDialog : DIALOG_SHOW_STATES.HIDE
    })
  }

  //渲染内容页面
  renderMessageItem = () => {
    const msg = this.state.message.map((item,idx) => {
      return  <MessageItem 
                key={idx} 
                item={item} 
                index={idx} 
                onShowMoreDialog={this.handleShowMoreDialog} 
                deleArr={this.state.deleArr}
                onSelectItem={this.handleSelectItem}
              />
    })
    return msg;
  }
  //置顶
  handleSetTop = () =>{
    const {handleIndex,message} = this.state;
    const newMessage1 = message.slice();
    const m = newMessage1[handleIndex];
    newMessage1.splice(handleIndex,1);
    newMessage1.unshift(m);
    this.setState({
      message: newMessage1,
      showDialog:DIALOG_SHOW_STATES.HIDE,
    })
  }
  //删除
  handleDeleteItem = () =>{
    const {handleIndex,message} = this.state;
    const newMessage1 = message.slice();
    newMessage1.splice(handleIndex,1);
    this.setState({
      message: newMessage1,
      showDialog:DIALOG_SHOW_STATES.HIDE,
    })
  }

  //点击多选，把当前序号放到delearr数组中，关闭dialog
  handleChioceClick = () => {
    const { handleIndex } = this.state;
    this.setState({
      deleArr: [handleIndex],
      showDialog: DIALOG_SHOW_STATES.HIDE,
    })
  }

   //点击多选选择的函数  //还有点问题
   handleSelectItem = index => {
    const { deleArr } = this.state;
    const deleArrTmp = deleArr.slice();

    const idx = deleArrTmp.findIndex(item => item === index);
    if(idx >= 0){
      deleArrTmp.splice(idx,1)
    } else {
      deleArrTmp.push(index)
    }
    this.setState({
      deleArr: deleArrTmp,
    })
  }

  //点击删除  //还有点问题
  handleDeleteMultiple = () => {
    const {deleArr,message} = this.state;
    const messageTmp = message.slice();
    deleArr.reverse();
    deleArr.forEach(item => {
        messageTmp.splice(item,1)
      })
    this.setState({
      message: messageTmp,
      deleArr: null
    })
  }



  render() {
    return (
      <div className="wrap">
        <TopBar onShowAddDialog={this.handleShowAddDialog}/>
        {this.renderMessageItem()}
        <NavBar /> 
        <DialogView 
          isActive={this.state.showDialog} 
          onCloseClick={this.handleShowDialog} 
          addItem={this.handleAddItem}
          onSetTop={this.handleSetTop}
          onDeleteItem={this.handleDeleteItem}
          onChioceItemClick={this.handleChioceClick}
        />
        <DeleteView deleArr={this.state.deleArr} onDeleteMultiple={this.handleDeleteMultiple}/>
      </div>
    );
  }
}

export default App;
