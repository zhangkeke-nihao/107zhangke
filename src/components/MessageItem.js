import React,{Component} from 'react';

export default class TopBar extends Component{
    constructor(){
        super();
    }

    handleMoreClick = () => {
        const {onShowMoreDialog,index} = this.props;
        onShowMoreDialog(index);
    }

      //点击多选选择按钮的函数
      handleSelectItem = () => {
        const {onSelectItem,index} = this.props;
        onSelectItem(index)
    }

    //渲染按钮页面
    renderSelectItem = () => {
        const { deleArr,index } = this.props;
        if(!Array.isArray(deleArr)){
            return null;
        }
        if(deleArr.includes(index)){
            return (
                <div className="selectBtnCon" onClick={this.handleSelectItem}>
                    <div className="selectBtn selected"/>
                </div>
            )
        }
        return (
            <div className="selectBtnCon" onClick={this.handleSelectItem}>
                <div className="selectBtn noSelected"/>
            </div>
        )
        
    }


    render(){
        const {item} = this.props;
        return (
            <li className="message"> 
                {this.renderSelectItem()}
                <img src={item.icon} alt="" />
                <div className="content">
                    <div className="name">
                        <h2 className="title">{item.title}</h2>
                        <div className="time">{item.time}</div>
                    </div>
                    <div className="msg">
                        <span className="recentMsg">{item.descript}</span>
                        <span className="button" onClick={this.handleMoreClick}>更多</span>
                    </div>
                </div>
            </li>
        )
    }
}