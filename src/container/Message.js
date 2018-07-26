import React, { Component } from 'react';
import MessageList from '../components/MessageItem/MessageList'
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import DialogView from '../components/DialogView/DialogView';
import '../App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as TodoActionCreators from '../action'


class Message extends Component {
  render() {
    const { todoActions,data } = this.props;
    return (
      <div className="wrap">
        <TopBar todoActions={todoActions} />
        <MessageList message={data.message} todoActions={todoActions} />
        <NavBar /> 
        <DialogView />
      </div>
    );
  }
}


function mapStateToProps(state){
  const { data,dialogStatus } = state;
  const props = { data,dialogStatus };
  return props;
}  
function mapDispatchToProps(dispatch){
  return {
    todoActions: bindActionCreators(TodoActionCreators, dispatch)   
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Message);



  



 




