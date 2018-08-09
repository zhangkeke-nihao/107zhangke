import React, { Component } from 'react';
import Dialog from '../components/Dialog/Dialog'
import '../components/ActionSheet/ActionSheet.css'
import { Link } from 'react-router'

export default class AppWrapper extends Component {

    state = {
        isActionSheetActive: false,
        menus:[],
        title:'',
        content:'',
        type:'',
        botword:''
      };
    
      handleShowActiveIOS1 = () =>{
        this.setState({
          type:'iOS1',
          isActionSheetActive:true,
          title: '弹窗标题',
          content: '弹窗内容，告知当前状态、信息和解决办法，描述文字尽量控制在三行内',
          menus:[{
            title: '辅助操作',
            click: () => console.log('辅助操作')
          },{
            title: '主操作',
            click: () => console.log('主操作')
          }]
        });
      }


      handleShowActiveIOS2 = () =>{
        this.setState({
          type:'iOS2',
          isActionSheetActive:true,
          content: '弹窗内容，告知当前状态、信息和解决办法，描述文字尽量控制在三行内',
          botword:'知道了'
        });
      }

      handleShowActiveAndroid1 = () =>{
        this.setState({
          type:'Android1',
          isActionSheetActive:true,
          title: '弹窗标题',
          content: '弹窗内容，告知当前状态、信息和解决办法，描述文字尽量控制在三行内',
          menus:[{
            title: '辅助操作',
            click: () => console.log('辅助操作')
          },{
            title: '主操作',
            click: () => console.log('主操作')
          }]
        });
      }


      handleShowActiveAndroid2 = () =>{
        this.setState({
          type:'Android2',
          isActionSheetActive:true,
          content: '弹窗内容，告知当前状态、信息和解决办法，描述文字尽量控制在三行内',
          menus:[{
            title: '辅助操作',
            click: () => console.log('辅助操作')
          },{
            title: '主操作',
            click: () => console.log('主操作')
          }]
        });
      }

    
      handleHideDialog = () => {
        this.setState({
          isActionSheetActive:false
        })
      }
 


  render() {

    return (
      <div className="dailog-wrap">
          <div className="dailog-top">
            <p>Dialog</p>
            <span>对话框</span>
            <Link to="/progressWrap">
              <span>下一页</span>
            </Link>
          </div>
          <div className="dailog-nav" onClick={this.handleShowActiveIOS1}>ios dialog样式一</div>
          <div className="dailog-nav" onClick={this.handleShowActiveIOS2}>ios dialog样式二</div>
          <div className="dailog-nav" onClick={this.handleShowActiveAndroid1}>Android dialog样式一</div>
          <div className="dailog-nav" onClick={this.handleShowActiveAndroid2}>Android dialog样式二</div>
          
          <Dialog 
            isActive={this.state.isActionSheetActive} 
            onCancle={this.handleHideDialog} 
            menus={this.state.menus}
            title={this.state.title}
            type={this.state.type}
            content={this.state.content}
            botword={this.state.botword}
          />
      </div>
      );
  }
}

