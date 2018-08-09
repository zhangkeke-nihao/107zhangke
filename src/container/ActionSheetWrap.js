import React, { Component } from 'react';
import ActionSheet from '../components/ActionSheet/ActionSheet'
import '../components/ActionSheet/ActionSheet.css'
import { Link } from 'react-router'

export default class AppWrapper extends Component {

  state = {
    isActionSheetActive: false,
    menus:[],
    title:'',
    type:''
  };

  handleShowActive = () =>{
    this.setState({
      type:'iOS',
      isActionSheetActive:true,
      title: '这是一个标题',
      menus:[{
        title: '示例菜单1',
        click: () => console.log('示例菜单1')
      },{
        title: '示例菜单2',
        click: () => console.log('示例菜单2')
      }]
    });
  }
  handleShowActive2 = () =>{
    this.setState({
      type:'Andriod',
      isActionSheetActive:true,
      menus:[{
        title: '示例菜单3',
        click: () => console.log('示例菜单3')
      },{
        title:'示例菜单4',
        click: () => console.log('示例菜单4')
      }]
    });
  }

  handleHideActionSheet = () => {
    this.setState({
      isActionSheetActive:false
    })
  }


  render() {

    return (
      <div className="wrap">
          <div className="top">
            <p>ActionSheet</p>
            <span>弹出式菜单</span>
            <Link to="/dialogWrap">
              <span>下一页</span>
            </Link>
          </div>
          <div className="nav" onClick={this.handleShowActive}>ios actionsheet</div>
          <div className="nav" onClick={this.handleShowActive2}>Android actionsheet</div>
          
          <ActionSheet 
            isActive={this.state.isActionSheetActive} 
            onCancle={this.handleHideActionSheet} 
            menus={this.state.menus}
            title={this.state.title}
            type={this.state.type}
          />
      </div>
      );
  }
}

