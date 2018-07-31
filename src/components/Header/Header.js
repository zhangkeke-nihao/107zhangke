import React, { Component } from 'react';
import './header.css';
import { Avatar } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import { Icon } from 'antd';

export default class Header extends Component {

    renderHeadMsg() {
        // const { fixedMsg,personalMsg } = this.props;
        // const msg = Object.values(fixedMsg).map((item,idx) => {
        //    return <div><span>{item} : {Object.values(personalMsg)[idx]}</span></div>
        // })
        // return msg;


        const { msg } = this.props;
        const userarr = ['学员编号', '历史付费额', '手机号码', '在学课程', '累计学习天数', '微信号码', '入学时间', '最后登录时间', '备注']
        // const userarr = [{mid:'学员编号', mid:'历史付费额', '手机号码', '在学课程', '累计学习天数', '微信号码', '入学时间', '最后登录时间', '备注'}]

        const msgs = userarr.map((item, idx) => {
            return <div><span>{item} :{Object.values(msg)[idx]} </span></div>
        })
        return msgs;
    }


    render() {
        return (
            <div className="header-wrap">
                <Avatar size="large" src={require('../../image/icon.png')} style={{ width: "100px", height: "100px" }} />
                <div>
                    <span className="head">三班人</span>
                    <div className="header-content">
                        {this.renderHeadMsg()}
                    </div>
                </div>
            </div>
        )
    }
}
