import React, { Component } from 'react';
import './remarkdetail.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../action/index';

class RemarkDetail extends Component {

  handleChange = (id) => {
    const { Actions } = this.props;
    Actions.ChangeRejectStatus(id);
  }

  renderRemarkDetail = () => {
      const { item } = this.props;

      const msg = item.comments.map((value) => {
        if(value.from == 'author') {
          return <li>
                    <div className="content"> 
                      <span>{ value.nick }mid:{ value.id }</span>
                      <span>{ value.time }</span>
                    </div>
                    <span>{ value.content }</span>
                </li>
        }
        else if(value.from == 'teacher'){
          if(value.status == 'reject') {
            return  <li>
                        <div className="content">
                          <span>{ value.nick }( { value.commentator.role } { value.commentator.nick } ):</span>
                          <span>{ value.time }</span>
                        </div>
                        <span>{ value.content}</span>
                        <br />
                        <span className="red">( 消息被退回，退回原因:{value.reason} )</span>
                    </li>
          }
          else if(value.status == 'unrevised') {
            return  <li>
                        <div className="content">
                          <span>{ value.nick }( {value.commentator.role}{value.commentator.nick}):</span>
                          <span className="red" onClick={() => this.handleChange(value.id)}>退回</span>
                        </div>
                        <span>{ value.content }</span>
                    </li>
          }
        }
      })
      return msg;
  }
        
      
  render() {
    return (
      <div className="remarkdetail-wrap">
            <ul className="detail">
                {this.renderRemarkDetail()}
            </ul>
      </div>
      );
  }
}



function mapStateToProps(state){
  return state
} 

const mapDispatchToProps = dispatch => {
return {
  Actions: bindActionCreators(actionCreators, dispatch),
}
}

export default connect(mapStateToProps,mapDispatchToProps)(RemarkDetail);
