import React, { Component } from 'react';
import { Input } from 'antd';
import './remarkwork.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../action/index';


class RemarkWord extends Component {
  render() {
    const { Actions } = this.props;
    const Search = Input.Search;
    return (
      <div className="remark-wrap">
          <Search
            placeholder="请输入点评内容"
            enterButton="发送"
            size="large"
            onSearch={value => Actions.sendReview(value)}
        />
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

export default connect(mapStateToProps,mapDispatchToProps)(RemarkWord);
