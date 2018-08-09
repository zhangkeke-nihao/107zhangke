import React, { Component } from 'react';
import Progress from '../components/Progress/Progress'
import '../components/Progress/Progress.css'
import { Link } from 'react-router'

export default class ProgressWrap extends Component {

  state = {
    isProgressActive: false,
  };

  handleProgress = () => {
    const { isProgressActive } = this.state;
    this.setState({
      isProgressActive:!isProgressActive,
      
    })
  }

  handleHideProgress = () => {
    this.setState({
      isProgressActive:false
    })
  }


  render() {

    return (
      <div>
        <div className="progress-top">
            <p>Progress</p>
            <span>进度条</span>
            <Link to="/sliderWrap">
              <span>下一页</span>
            </Link>
        </div>
         <Progress isActive={this.state.isProgressActive} onCancle={this.handleHideProgress}/>
         <div classNameName="weui_btn_area">
            <button onClick={this.handleProgress}>上传</button>
         </div>
      </div>
      );
  }
}

