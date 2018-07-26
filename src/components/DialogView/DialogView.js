import React,{ Component } from 'react';
import { DIALOG_SHOW_STATES } from '../../const'
import './DialogView.css'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as TodoActionCreators from '../../action'


class DialogView extends Component{
    constructor(){
        super();

        this.title = '';
        this.descript = '';
        this.time = '';
    }
    //更新input值
    handleTitleChange = event => {
        this.title = event.target.value
    }
    handleDescriptChange = event => {
        this.descript = event.target.value
    }
    handleTimeChange = event => {
        this.time = event.target.value
    }
     //点击提交
    handleSubmitClick = () => {
        const { todoActions } = this.props;
        todoActions.addDailog(this.title,this.descript,this.time);
        todoActions.changeStatus(DIALOG_SHOW_STATES.HIDE)
    }

    //关闭
    handleClose = () => {
        const { todoActions } = this.props;
        todoActions.changeStatus(DIALOG_SHOW_STATES.HIDE)
    }

    //置顶
    handleSetToTop = () => {
        const { todoActions,data } = this.props;
        const newMessage = data.message.slice();
        const m = newMessage[data.onIndex];
        newMessage.splice(data.onIndex,1);
        newMessage.unshift(m);
        todoActions.controlItem(newMessage)
        todoActions.changeStatus(DIALOG_SHOW_STATES.HIDE)
    }

    //删除
    handleDeleteItem = () => {
        const { todoActions,data } = this.props;
        const newMessage = data.message.slice();
        newMessage.splice(data.onIndex,1);
        todoActions.controlItem(newMessage)
        todoActions.changeStatus(DIALOG_SHOW_STATES.HIDE)
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
        return (
            <div>
                <div className="close" onClick={this.handleClose}>close</div>
                <div className="ipt">
                    <div className="form">
                        <button value="置顶" onClick={this.handleSetToTop}>置顶</button>
                        <button value="删除" onClick={this.handleDeleteItem}>删除</button>
                        <button value="多选删除">多选删除</button>
                    </div>
                </div>
            </div>
        )
    }

    renderContent = () => {
        const { dialogStatus } = this.props;
        switch (dialogStatus.showDialog){
            case DIALOG_SHOW_STATES.SHOW_ADD_MESSAGE:
                return this.renderAddDialog();
            case DIALOG_SHOW_STATES.SHOW_MORE_DIALOG:
                return this.renderMoreDialog();
            default:
                return null;
        }
    }

    render(){
        const { dialogStatus} = this.props;
        if(!dialogStatus.showDialog){
            return null;
        }
        return (
            <div className="dialog">
                {this.renderContent()}
            </div>
        )
    }
}



function mapStateToProps(state){
    const { data,dialogStatus }= state;
    const props = { data,dialogStatus };
    return props;
  }  
  function mapDispatchToProps(dispatch){
    return {
      todoActions: bindActionCreators(TodoActionCreators, dispatch)   //所有的方法都在todoActions里面
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(DialogView);
  
  
  
    