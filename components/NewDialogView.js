import React, { Component } from 'react';
import './DialogView.css';

export default class DialogView extends Component {

  handleClose = () => {
    this.props.onCloseClick(false);
  }

 
  render() {
    const { newActive } = this.props;
    if (!newActive) {
      return null;
    }
    return (
      <div className="dialog">
        <div className="close" onClick={this.handleClose}>close</div>
        <div className="ipt">
          <form className="form">
           <button value="置顶">置顶</button>
           <button value="删除">删除</button>
           <button value="多选删除">多选删除</button>
          </form>
        </div>
      </div>
    );
  }
}

