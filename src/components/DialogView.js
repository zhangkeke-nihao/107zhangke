import React,{Component} from 'react';
import {DIALOG_SHOW_STATES} from '../const'
import './DialogView.css'

export default class TopBar extends Component{
    constructor(){
        super();

        this.state = {
            title:'',
            descript: '',
            time:''
        }
    }

    //关闭，把状态值false传参给父组件
    handleClose = () => {
        const { onCloseClick } = this.props;
        onCloseClick(false)
    }

    //更新input值
    handleTitleChange = event => {
        this.setState({
            title:event.target.value,
        })
    }
    handleDescriptChange = event => {
        this.setState({
            descript:event.target.value,
        })
    }
    handleTimeChange = event => {
        this.setState({
            time:event.target.value,
        })
    }

     //点击提交
     handleSubmitClick = () => {
        const {title,descript,time} = this.state;
        const {addItem} = this.props;
        addItem({
            title: title,    //title,
            descript: descript,  //descript,
            time: time     //time,
        })
    }


    //点击加号出来的页面
    renderAddDialog = () => {
        return (
            <div>
                <div className="close" onClick={this.handleClose}>close</div>
                <div className="ipt">
                    <form>
                        标题：<input type="text" onChange={this.handleTitleChange}/>
                        描述：<input type="text" onChange={this.handleDescriptChange}/>
                        时间：<input type="text" onChange={this.handleTimeChange}/>
                    </form>
                    <div className="btn" onClick={this.handleSubmitClick}>确认</div>
                </div>
            </div>
        );
    }

    //点击更多出来的页面
    renderMoreDialog = () => {
        const { onSetTop,onDeleteItem,onChioceItemClick } = this.props;
        return (
            <div>
                <div className="close" onClick={this.handleClose}>close</div>
                <div className="ipt">
                    <div className="form">
                        <button value="置顶" onClick={onSetTop}>置顶</button>
                        <button value="删除" onClick={onDeleteItem}>删除</button>
                        <button value="多选删除" onClick={onChioceItemClick}>多选删除</button>
                    </div>
                </div>
            </div>
        )
    }

    renderContent = () => {
        const { isActive } = this.props;
        switch (isActive){
            case DIALOG_SHOW_STATES.SHOW_ADD_MESSAGE:
                return this.renderAddDialog();
            case DIALOG_SHOW_STATES.SHOW_MORE_DIALOG:
                return this.renderMoreDialog();
            default:
                return null;
        }
    }



    render(){
        const { isActive } = this.props;
        if(!isActive){
            return null;
        }
        return (
            <div className="dialog">
                {this.renderContent()}
            </div>
        )
    }
}