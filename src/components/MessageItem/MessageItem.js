import React,{Component} from 'react';

export default class TopBar extends Component{
    constructor(){
        super();
    }

    // handleMoreClick = () => {
    //     const {onShowMoreDialog,index} = this.props;
    //     onShowMoreDialog(index);
    // }



    render(){
        const {item,onShowMoreDialog} = this.props;
        return (
            <li className="message"> 
                <img src={item.icon} alt="" />
                <div className="content">
                    <div className="name">
                        <h2 className="title">{item.title}</h2>
                        <div className="time">{item.time}</div>
                    </div>
                    <div className="msg">
                        <span className="recentMsg">{item.descript}</span>
                        <span className="button" onClick={onShowMoreDialog}>更多</span>
                    </div>
                </div>
            </li>
        )
    }
}