import React, { Component } from 'react';
import './DialogView.css';

export default class newDialogView extends Component {

  handleClose = () => {
    this.props.onCloseClick(false);
  }

 
  render() {
    const { isActive } = this.props;
    const {addItem} = this.props;
    if (!isActive) {
      return null;
    }
    return (
      <div className="dialog">
        <div className="close" onClick={this.handleClose}>close</div>
        <div className="ipt">
          <form>
            标题：<input type="text" />
            描述：<input type="text" />
            时间：<input type="text" />
          </form>
          <div className="btn" onClick={addItem}>确认</div>
        </div>
      </div>
    );
  }
}

