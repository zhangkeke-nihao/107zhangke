import React, { Component } from 'react';
import { Switch } from 'antd';
import './workdetail.css'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../action/index';

const icon = require('../../../image/5.jpg')

class WorkWrap extends Component {

  handleChangeStatus = () => {
    const { item:{id},Actions } = this.props;
    Actions.ChangeHomeWorkStatus(id);
  }
  
  render() {
    const { item } = this.props;
    return (
      <div className="workdetail-wrap">
           <div>
                <span>{item.id}</span><img src={icon} />
           </div>
           <div>
                <span>作业：{item.description}</span> 
                <p>
                    <span>{item.author.nick}mid:{item.author.mid}</span>
                     &nbsp;&nbsp;
                    <span>{item.classInfo.name}/{item.commentator}</span>
                    &nbsp;&nbsp;
                    <span>点评人:{item.teacherInfo.nick}</span>
                    &nbsp;
                    <span>提交时间:{item.time}</span>
                </p>
           </div>
           <div>
                佳作：<Switch defaultChecked={item.isExcellent} onChange={this.handleChangeStatus} />
           </div>
      </div>
      );
  }
}

function mapStateToProps(state){
  const { homeworkdata } = state;
  return  { homeworkdata };
} 

const mapDispatchToProps = dispatch => {
return {
  Actions: bindActionCreators(actionCreators, dispatch),
}
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkWrap);



