import React, { Component } from 'react';
import MessageItemView from './Message.js';
import NavItemView from './botnav.js';
import FloorItemView from './floor.js';
import TopItemView from './top.js';

// import logo from './logo.svg';
import './App.css';


const icon1 = require('./image/bg1.jpg')   //require():加载一个外部模块
const icon2 = require('./image/bg2.jpg')
const icon3 = require('./image/bg3.jpg')

const icon4= require('./image/message.png')
const icon5 = require('./image/list.png')
const icon6 = require('./image/find.png')
const icon7 = require('./image/wo.png')

const icon8 = require('./image/bg4.jpg')   //require():加载一个外部模块
const icon9 = require('./image/bg5.jpg')
const icon10 = require('./image/bg6.jpg')
const icon11 = require('./image/bg7.jpg')
const icon12 = require('./image/search.png')
const icon13 = require('./image/add.png')

class App extends Component {
    constructor(props){
      super(props);

      this.state={
        top : [
          {
            title : '微信',
            aicon : icon12,
            bicon : icon13
          }
        ],
        message : [
          {
            icon : icon1,
            name : '小年糕',
            description : 'hello 小年糕',
            time : '2018/7/18 11:00' 
          },
          {
            icon : icon2,
            name : '小板凳',
            description : 'hello 小板凳',
            time : '2018/7/19 12:00' 
          },
          {
            icon : icon3,
            name : '小豆包',
            description : 'hello 小豆包',
            time : '2018/7/19 13:00' 
          },
          {
            icon : icon8,
            name : '小年糕',
            description : 'hello 小年糕',
            time : '2018/7/19 13:00' 
          },
          {
            icon : icon9,
            name : '小豆包',
            description : 'hello 小豆包',
            time : '2018/7/19 13:00' 
          },
          {
            icon : icon10,
            name : '小板凳',
            description : 'hello 小板凳',
            time : '2018/7/19 13:00' 
          },
          {
            icon : icon11,
            name : '小豆包',
            description : 'hello 小豆包',
            time : '2018/7/19 13:00' 
          },
        ],
        nav : [
          {
            icon : icon4,
            title : '微信'
          },
          {
            icon : icon5,
            title : '通讯录'
          },
          {
            icon : icon6,
            title : '发现'
          },
          {
            icon : icon7,
            title : '我'
          }
        ],
        btn : [
          {
            word : '全选'
          },
          {
            word : '添加'
          },
          {
            word : '删除'
          },
          {
            word : '修改'
          }
        ],
        showDailog : false
      }
    }

   
    onItemClick = (message) =>{
        console.log(message);
        if(this.state.showDailog == 'flase'){
          this.setState({
            showDailog : true   
        })
        }else if(this.state.showDailog == 'true'){
          this.setState({
              showDailog : false
          })
        }
        
    }
    renderDailog = () => {
      if(this.setState.showDailog){
         return <FloorItemView onClick={this.onItemClick}/>
        
      }
      return null;
    }


    renderFloor = () => {
      const btnmsg = this.state.btn.map((item,idx) => {
        return <FloorItemView key={idx} item={item} />
      });
      return btnmsg;
    }








    //上层区域
    renderTop = () => {
      const topmsg = this.state.top.map((item,idx) => {
        return <TopItemView key={idx} item={item} />
      });
      return topmsg;
    }


    //渲染内容区域的方法
    renderMessages = () => {
        const msg = this.state.message.map((item,idx) => {
          return <MessageItemView key={idx} item={item} onClick={this.onItemClick}/>
      });
      return msg;
    }

    //渲染底部的方法
    renderBottomNav = () => {
       const botmsg = this.state.nav.map((item,idx) => {
         return <NavItemView key={idx} item={item}  />
      });
      return botmsg;
    }

   



    render() {
      return (
        <div id="wrap">
              <div className="top">
                  {
                    this.renderTop()
                  }
              </div>

            
              <ul>
                {
                  this.renderMessages()
                }
              </ul>

              <div className="bottom">
                {
                  this.renderBottomNav()
                }
              </div>

              <div className="floor">
                {
                  this.renderDailog()
                }
                {
                  this.renderFloor()
                }
              </div>
        </div>

    
      );
    }
}

export default App;
