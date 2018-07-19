import React, { Component } from 'react';

export default class MessageItem extends Component {

  // onMsgClick = () => {
  //   const { onClick, item } = this.props;
  //   if (onClick) {
  //     onClick(item);
  //   }
  // }

  render(){
    const { item } = this.props;
    const {newDialog} = this.props;

    return(
      <li className="message">
        <img src={item.icon} alt="" />
        <div className="content">
          <div className="name">
            <h2 className="title">{item.title}</h2>
            <div className="time">{item.time}</div>
          </div>
          <div className="msg">
            <div className="recentMsg">{item.descript}</div>
            <button className="button" onClick={newDialog.bind(this, true)}>更多</button>
          </div>
        </div>
      </li>
    );
  }
}

