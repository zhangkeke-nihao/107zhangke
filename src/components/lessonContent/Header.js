import React, { Component } from 'react';
import './header.css';
import { Avatar } from 'antd';


export default class Header extends Component {

    renderHeadMsg() {
        const { userMsg } = this.props;
        const userarr = [
            `学员编号 : ${userMsg.mid}`, 
            `历史付费额 : ${userMsg.history_pay}`, 
            `手机号码 : ${userMsg.tel}`, 
            `在学课程 : ${userMsg.learningLesson}`, 
            `累计学习天数 : ${userMsg.totalLearningDays}`,
            `微信号码 : ${userMsg.weiChatCode}`, 
            `入学时间 : ${userMsg.enterDate}`,
            `最后登录时间 : ${userMsg.lastLoginDate}`, 
            `备注 : ${userMsg.remark}`
        ]
        const msgs = userarr.map((item) => {
            return <div><span>{item} </span></div>
        })
        return msgs;
    }

    render() {
        const { userMsg } = this.props;
        return (
            <div className="header-wrap">
                <Avatar size="large" src={userMsg.hurl} style={{ width: "100px", height: "100px" }} />
                <div>
                    <span className="head">三班人</span>
                    {/* <Link to="/studenLib">三班人</Link> */}
                    <div className="header-content">
                        {this.renderHeadMsg()}
                    </div>
                </div>
            </div>
        )
    }
}
