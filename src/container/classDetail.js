import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router'
import { Button } from 'antd'

import ClassDetailTable from '../components/classDetail/ClassDetailTable'
import BasicMsg from '../components/classDetail/BasicMsg'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../action';


class ClassDetail extends Component {
  componentDidMount(){   
    const { Actions} = this.props;
    const id = 1;
    Actions.fetchLearnInfo(id)
  }
 
  render() {
    const {userMessage,classesTable} = this.props;
    const { params } = this.props;
    const { mid } = params;
    return (
    <div className="wrap">
            <Button onClick={this.props.router.goBack} className="button-box-right" style={{border:'2px solid #bbb',color:'#000'}}>返回</Button>
            <BasicMsg basicMsg={userMessage.basicMsg}/>
            <ClassDetailTable LearnList={classesTable.LearnList} />
      </div>
    );
  }
}


function mapStateToProps(state){
    const {userMessage,classesTable} = state;
    const props = {userMessage,classesTable};
    return props;
  }  
  
const mapDispatchToProps = dispatch => {
    return {
      Actions: bindActionCreators(actionCreators, dispatch),
    }
  }
  
 export default connect(mapStateToProps,mapDispatchToProps)(ClassDetail);
  
  



 




