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
    const { Actions } = this.props;
    const id = 1
    Actions.fetchLearnInfo(id)
  }
 
  render() {
    const {userMessage,tableMessage} = this.props;
    return (
    <div className="wrap">
            <Link to="/lessonContent"> 
                  <Button className="button-box-right" style={{border:'2px solid #bbb',color:'#000'}}>返回</Button>
            </Link>
            <BasicMsg basicMsg={userMessage.basicMsg}/>
            <ClassDetailTable LearnList={tableMessage.LearnList} />
      </div>
    );
  }
}


function mapStateToProps(state){
    const {userMessage,tableMessage} = state;
    const props = {userMessage,tableMessage};
    return props;
  }  
  
const mapDispatchToProps = dispatch => {
    return {
      Actions: bindActionCreators(actionCreators, dispatch),
    }
  }
  
 export default connect(mapStateToProps,mapDispatchToProps)(ClassDetail);
  
  



 




