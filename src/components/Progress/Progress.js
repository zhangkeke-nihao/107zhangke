import React, { Component } from 'react';
import './Progress.css'
import {Icon} from 'antd'

export default class Progress extends Component{

    getProgressInbarClassName = () => {
        console.log(!this.props.isActive)
        if(!this.props.isActive){
            return 'weui_progress_inner_bar hideProgress';
        }
        return 'weui_progress_inner_bar showprogress';
    }

    render(){
        
        return (
            <div className="progress-bar">
                <div className="weui_progress">
                    <div className="weui_progress_bar">
                        <div className={this.getProgressInbarClassName()} ></div>
                    </div>
                    <div onClick={this.props.onCancle}>
                        <Icon type="close-circle-o" style={{fontSize:'18px',color:'red',float:'right',marginTop:'-43px',marginRight:'30px'}}/>
                    </div>
                </div>
            </div>
        );
    }
}

  