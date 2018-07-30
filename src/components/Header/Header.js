import React, { Component } from 'react';
import './header.css';
import { Avatar } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import { Icon } from 'antd';

export default class Header extends Component{

    renderHeadMsg() {
        const { fixedMsg,personalMsg } = this.props;
        const msg = Object.values(fixedMsg).map((item,idx) => {
           return <div><span>{item} : {Object.values(personalMsg)[idx]}</span></div>
        })
        return msg;
    }


    render(){
        return (
            <div className="header-wrap">
               <Avatar size="large" src={require('../../image/icon.png')} style={{width:"100px",height:"100px"}}/>
                <div>               
                    <span className="head">三班人</span>
                    <div className="header-content-left">
                        {this.renderHeadMsg()}
                    </div>
                </div>
                <div className="header-content-right">
                    <div>
                        <span className="num">手机号码：<span>1311238756</span></span>
                        <Icon style={{fontSize:'16px'}} type="file" />
                    </div>
                    <div>
                        <span>微信号码：</span>
                        <Input style={{width:'100px'}} size="small" placeholder="" />
                        <Button style={{width:'30px',height:'25px',fontSize:'12px',padding:'0',color:'#000'}}>提交</Button>
                    </div>
                    <div>
                        <span className="remark">备注：</span>
                        <Input style={{width:'100px'}} size="small" placeholder="" />
                        <Button style={{width:'30px',height:'25px',fontSize:'12px',padding:'0',color:'#000'}}>提交</Button>
                    </div>
               </div>
           </div>
        )
    }
}
