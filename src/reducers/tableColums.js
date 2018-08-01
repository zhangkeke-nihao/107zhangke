import React from 'react';
import { Icon } from 'antd';

const initState = {
    columns1: [{
      title: '班级',
      dataIndex: 'classInfo',
      key: 'classInfo',
      align: 'center',
      render: text => {
        return  <div>
                  <Icon type="exclamation-circle" />
                  <span>{text.name}</span>
                </div>
      }
    }, {
      title: '课程状态',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
    }, {
      title: '开课时间',
      dataIndex: 'startTime',
      key: 'startTime',
      align: 'center',
    },{
      title: '老师',
      dataIndex: 'teacherInfo',
      key: 'teacherInfo',
      align: 'center',
      render: text => {
        return  <div>
                  <Icon type="smile" />
                  <span>{text.nick}</span>
                </div>
      }
    },{
      title: '上课率',
      dataIndex: 'enterRate',
      key: 'enterRate',
      align: 'center',
      render:text=>{
        let num1=parseInt(text.split("/")[0],10);
        let num2=parseInt(text.split("/")[1],10);
        let num=num1/num2;
        if(num<0.8){
          return <span className="Red">{text}</span>
        }else if(num>0.95){
          return <span className="Orange">{text}</span>
        }else{
          return <span>{text}</span>
        }
      }
    },{
      title: '作业提交率',
      dataIndex: 'homeworkSubmitRate',
      key: 'homeworkSubmitRate',
      align: 'center',
      render:text=>{
        let num=parseInt(text, 10);
        if(num<80){
          return <span className="Red">{text}</span>
        }else if(num>95){
          return <span className="Orange">{text}</span>
        }else{
        return <span>{text}</span>
        }
      }
    },{
      title: '被点评情况',
      dataIndex: 'beCommenttedRate',
      key: 'beCommenttedRate',
      align: 'center',
      render:text=>{
        let num=parseInt(text, 10);
        if(num<80){
          return <span className="Red">{text}</span>
        }else if(num>95){
          return <span className="Orange">{text}</span>
        }else{
          return <span>{text}</span>
        }
      }
    },{
      title: '打卡率',
      dataIndex: 'signRate',
      key: 'signRate',
      align: 'center',
      render:text=>{
        let num1=parseInt(text.split("/")[0],10);
        let num2=parseInt(text.split("/")[1],10);
        let num=num1/num2;
        if(num<0.8){
          return <span className="Red">{text}</span>
        }else if(num>0.95){
          return <span className="Orange">{text}</span>
        }else{
          return <span>{text}</span>
        }
      }
    },{
      title: '满意度',
      dataIndex: 'satisfyRate',
      key: 'satisfyRate',
      align: 'center',
      render:text=>{
        let num=parseInt(text, 10);//字符串转成10进制
        if(num<80){
          return <span className="Red">{text}</span>
        }else if(num>95){
          return <span className="Orange">{text}</span>
        }else{
          return <span>{text}</span>
        }
      }
    }],


    columns2: [{
        title: '   ',
        dataIndex: 'hurl',
        key: 'hurl',
        align: 'center',
        render: text => {
          return  <div>
                    <img src={text} style={{width:'20px',height:'20px'}}/>
                  </div>
        }
    },{
      title: '学员名',
      dataIndex: 'nick',
      key: 'nick',
      align: 'center',
    }, {
      title: '学员编号/MID',
      dataIndex: 'mid',
      key: 'mid',
      align: 'center',
    }, {
      title: '入学时间',
      dataIndex: 'start_time',
      key: 'start_time',
      align: 'center',
    },{
      title: '开课时间',
      dataIndex: 'enter_time',
      key: 'enter_time',
      align: 'center',
    },{
      title: '在学课程',
      dataIndex: 'learning_lessons',
      key: 'learning_lessons',
      align: 'center',
    },{
      title: '负责老师',
      dataIndex: 'teachers',
      key: 'teachers',
      align: 'center',
      render: text => {
        return  <div>
                  <span>{text[0]}</span>
                </div>
      }
    }],

    columns3: [{
      title: '课程内容',
      dataIndex: 'course_name',
      key: 'course_name',
      align: 'center',
    }, {
      title: '上课时间',
      dataIndex: 'time',
      key: 'time',
      align: 'center',
    }, {
      title: '上课情况',
      dataIndex: 'enter_status',
      key: 'enter_status',
      align: 'center',
      render:text => {
        if(text === 0){
          return <span><Icon type="close" /></span>
        }
        else if(text === 1){
          return <span><Icon type="check" /></span>
        }
      }
    },{
      title: '作业提交情况',
      dataIndex: 'homework_status',
      key: 'homework_status',
      align: 'center',
      render:text => {
        if(text === 0){
          return <span><Icon type="close" /></span>
        }
        else if(text === 1){
          return <span><Icon type="check" /></span>
        }
        else if( text === -1){
          return <span><Icon type="minus" /></span> 
        }
      }
    },{
      title: '被点评情况',
      dataIndex: 'review_status',
      key: 'review_status',
      align: 'center',
      render:text => {
        if(text === 0){
          return <span><Icon type="close" /></span>
        }
        else if(text === 1){
          return <span><Icon type="check" /></span>
        }
        else if( text === -1){
          return <span><Icon type="minus" /></span> 
        }
      }
    },{
      title: '打卡情况',
      dataIndex: 'clockin_status',
      key: 'clockin_status',
      align: 'center',
      render:text => {
        if(text === 0){
          return <span><Icon type="close" /></span>
        }
        else if(text === 1){
          return <span><Icon type="check" /></span>
        }
        else if( text === -1){
          return <span><Icon type="minus" /></span> 
        }
      }
    },{
      title: '满意度评分',
      dataIndex: 'satisfied_score',
      key: 'satisfied_score',
      align: 'center',
      render:text=>{
        if( text < 5 ){
          return <span className="Red">{text}</span>
        }
        else{
          return <span>{text}</span>
        }
      }
    }]
}

export default function tableColums(state = initState,action){
  switch(action.type){
    default:
      return state;
  }   
}