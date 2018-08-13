import React, { Component } from 'react';
import { Button } from 'antd';
import './ReviewWrapper.css'
import ReviewDialog from '../../components/ReviewDialog/ReviewDialog'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../action/index';


class ReviewWrapper extends Component {

  state = {
    isActive: false,
  }
  handleShowActive = () =>{
    this.setState({
      isActive:true
    })
  }

  handleHideAction = () => {
    this.setState({
      isActive:false
    })
  }


  render() {
    return (
      <div className="wrap">
          <h4>点评权限</h4>
          <div className="Review-chose">
            <p>点评作业：拥有个人点评页，可以为学生作业进行点评</p>
            <Button style={{border:'2px solid #bbb'}} onClick={this.handleShowActive}>权限管理</Button>
          </div>
          <div className="Review-chose">
            <p>带课老师：拥有审核点评老师点评内容的权限，包括撤回点评、自行点评</p>
            <Button style={{border:'2px solid #bbb'}}>权限管理</Button>
          </div>
          
          <ReviewDialog 
          isActive={this.state.isActive} 
          onCancle={this.handleHideAction} 
          reviewtreedata={this.props.reviewtreedata}
          sureadd={this.props.sureadd}
          product={this.props.product}
          />
      </div>
      );
  }
}



function mapStateToProps(state){
  const { reviewtreedata,sureadd,product } = state;
  const props = { reviewtreedata,sureadd,product }; 
  return props;
} 

const mapDispatchToProps = dispatch => {
return {
  Actions: bindActionCreators(actionCreators, dispatch),
}
}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewWrapper);

