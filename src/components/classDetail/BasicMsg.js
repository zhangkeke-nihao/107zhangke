import React, { Component } from 'react';
import './basicmsg.css'


export default class BasicMsg extends Component{
    
   

    renderBasicMsg = () => {
        const { basicMsg } = this.props;
        
        const userarr = [
            `班级 : ${basicMsg.name}`, 
            `班级ID : ${basicMsg.id}`,
            // `老师 : ${basicMsg.virtual_teacher.nick}`, 
            // `ID : ${basicMsg.virtual_teacher.id}`, 
            // `微信 : ${basicMsg.virtual_teacher.wx_code}`,
            // `负责员工 : ${basicMsg.real_teacher.name}`, 
            // `ID : ${basicMsg.real_teacher.mid}`, 
            // `微信 : ${basicMsg.real_teacher.wx_code}`
        ];
        const msgs = userarr.map((item) => {
            return <span>{item}&nbsp;&nbsp; </span>
        })
        return msgs;
    }

    render(){
        return (
            <div className="basicmsg">
               {this.renderBasicMsg()}
            </div>
        )
    }
}



