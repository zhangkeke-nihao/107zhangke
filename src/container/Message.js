import React, { Component } from 'react';
import { connect } from 'react-redux';

import MessageList from '../components/MessageItem/MessageList'
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import DialogView from '../components/DialogView/DialogView';
import { DIALOG_SHOW_STATES } from '../const'
import '../App.css';
import {addDailog} from '../action/index'

class Message extends Component {
  constructor(props){
    super(props);

    this.state = {
      showDialog : DIALOG_SHOW_STATES.HIDE
    }
  }

  //点击加号，转换状态值
  handleShowAddDialog = () => {
    const {showDialog} = this.props;
    this.setState({
      showDialog: DIALOG_SHOW_STATES.SHOW_ADD_MESSAGE,
    })
  }
   //点击更多，转换状态值,把当前li的序号赋值给onIndex
  handleShowMoreDialog = ()=> {
    this.setState({
      showDialog: DIALOG_SHOW_STATES.SHOW_MORE_DIALOG,
      // onIndex: index,
    })
  }

//   //关闭转换状态
//   handleShowDialog = isActive => {
//     this.setState({
//       showDialog: isActive,
//     })
//   }


  //添加消息到最上面
  handleAddItem = (title,descript,time) => {
    console.log(1)
    const { dispatch } = this.props;
    const action = addDailog(title,descript,time);
    dispatch(action);

    // const newMessage = this.state.message.slice();
    // newMessage.unshift({
    //   icon : icon1,
    //   title,descript,time
    // })
    // this.setState({
    //   message : newMessage,
    //   showDialog : DIALOG_SHOW_STATES.HIDE
    // })
  }

//   //置顶
//   handleSetTop = () =>{
//     const {onIndex,message} = this.state;
//     const newMessage1 = message.slice();
//     const m = newMessage1[onIndex];
//     newMessage1.splice(onIndex,1);
//     newMessage1.unshift(m);
//     this.setState({
//       message: newMessage1,
//       showDialog:DIALOG_SHOW_STATES.HIDE,
//     })
//   }
//   //删除
//   handleDeleteItem = () =>{
//     const {onIndex,message} = this.state;
//     const newMessage1 = message.slice();
//     newMessage1.splice(onIndex,1);
//     this.setState({
//       message: newMessage1,
//       showDialog:DIALOG_SHOW_STATES.HIDE,
//     })
//   }

  render() {
    const { message,dispatch,showDialog } = this.props;
    return (
      <div className="wrap">
        <TopBar onShowAddDialog={this.handleShowAddDialog} showDialog={showDialog}/>
        <MessageList message={message} dispatch={dispatch} onShowMoreDialog={this.handleShowMoreDialog}/>
        <NavBar /> 
        <DialogView dispatch={dispatch} addItem={this.handleAddItem} isActive={this.state.showDialog}/>
      </div>
    );
  }
}


  function mapStateToProps(state,ownProp){
    const props= state;
    return props;
  }  
  export default connect(mapStateToProps)(Message);




