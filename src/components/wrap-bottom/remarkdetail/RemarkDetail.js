import React, { Component } from 'react';
import './remarkdetail.css'
import Item from '../../../../node_modules/antd/lib/list/Item';

export default class RemarkDetail extends Component {


  renderRemarkDetail = () => {
    const { homeworkList } = this.props;
    console.log(homeworkList)
    // const msg = homeworkList.map((value,i) => {

      
    //   const msg1 = value[i].comments.map((item,idx) => {
    //     if(item.from == 'autor') {
    //       return <li>
    //                 <span>  { item.nick }   mid: { value.id }    </span>
    //                 <span>  { item.time }    </span>
    //                 <span>  { item.content }    </span>
    //             </li>
    //     }
    //     if(item.status == 'reject') {
    //       return  <li>
    //                   <span> { value.nick } ( { value.commentator.role } { value.commentator.nick } ):   </span>
    //                   <span> { value.content} </span>
    //                   <span> { value.time } </span>
    //                   <span> ( 消息被退回，退回原因： {value.reason} )</span>
    //               </li>
    //     }
    //     if(item.status == 'unrevised') {
    //       return  <li>
    //                   <span>   { value.nick } ( {value.commentator.role}   {value.commentator.nick}):     </span>
    //                   <span> 退回  </span>
    //                   <span>{ value.content }</span>
    //               </li>
    //     }
    //   })
    //   return msg1;
    // })
    //   return msg;
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

