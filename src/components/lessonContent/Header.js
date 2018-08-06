
import React, { Component } from 'react';
import './header.css';
import { Avatar } from 'antd';


export default class Header extends Component {

    renderHeadMsg() {
        const { 
            userMessage: {
              mid,
              history_pay,
              tel,
              learningLesson,
              totalLearningDays,
              weiChatCode,
              enterDate,
              lastLoginDate,
              remark
            } 
          } = this.props
          if (!mid) return null
          return (
            <div>
              <span className='basic-info-item'>{`学员编号: ${mid}`}</span>
              <span className='basic-info-item'>{`历史付费额: ${history_pay}`}</span>
              <span className='basic-info-item'>{`手机号码: ${tel}`}</span>
              <span className='basic-info-item'>{`在学课程: ${learningLesson}`}</span>
              <span className='basic-info-item'>{`累计学习天数: ${totalLearningDays}`}</span>
              <span className='basic-info-item'>{`微信号码: ${weiChatCode}`}</span>
              <span className='basic-info-item'>{`入学时间: ${enterDate}`}</span>
              <span className='basic-info-item'>{`最后登录时间: ${lastLoginDate}`}</span>
              <span className='basic-info-item'>{`备注: ${remark}`}</span>
            </div>
          )
    }

    render() {
        const { 
            userMessage: {
              nick,
              hurl
            } 
          } = this.props
        return (
            <span className="header-wrap">
                <Avatar size="large" src={hurl} style={{ width: "100px", height: "100px" }} />
                <span>
                    <span className="head">{nick}</span>
                    <span className="header-content">
                        {this.renderHeadMsg()}
                    </span>
                </span>
            </span>
        )
    }
}




// import React, { Component } from 'react';
// import './header.css';
// import { Avatar } from 'antd';


// export default class Header extends Component {

//     renderHeadMsg() {
//         const { userMsg } = this.props;
//         const userarr = [
//             `学员编号 : ${userMsg.mid}`, 
//             `历史付费额 : ${userMsg.history_pay}`, 
//             `手机号码 : ${userMsg.tel}`, 
//             `在学课程 : ${userMsg.learningLesson}`, 
//             `累计学习天数 : ${userMsg.totalLearningDays}`,
//             `微信号码 : ${userMsg.weiChatCode}`, 
//             `入学时间 : ${userMsg.enterDate}`,
//             `最后登录时间 : ${userMsg.lastLoginDate}`, 
//             `备注 : ${userMsg.remark}`
//         ]
//         const msgs = userarr.map((item) => {
//             return <div><span>{item} </span></div>
//         })
//         return msgs;
//     }

//     render() {
//         const { userMsg } = this.props;
//         return (
//             <div className="header-wrap">
//                 <Avatar size="large" src={userMsg.hurl} style={{ width: "100px", height: "100px" }} />
//                 <div>
//                     <span className="head">{userMsg.nick}</span>
//                     <div className="header-content">
//                         {this.renderHeadMsg()}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

