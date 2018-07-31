import React from 'react';
import { Icon } from 'antd';

const initState = {
columns: [{
    title: '班级',
    dataIndex: 'classInfo',
    key: 'classInfo',
    align: 'center',
    render: text => {
      console.log(text);
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
  },
  {
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
  },
  {
    title: '上课率',
    dataIndex: 'enterRate',
    key: 'enterRate',
    align: 'center',
    render:
    text=>{
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
    // renderColor(text,type1)
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
],

columns2: [{
    title: '班级',
    dataIndex: 'class',
    key: 'class',
  }, {
    title: '课程状态',
    dataIndex: 'classStatus',
    key: 'classStatus',
  }, {
    title: '开课时间',
    dataIndex: 'startTime',
    key: 'startTime',
  },
  {
    title: '教学组负责人',
    dataIndex: 'teacher',
    key: 'teacher',
  },
  {
    title: '上课率',
    dataIndex: 'classRate',
    key: 'classRate',
  },
  {
    title: '作业提交率',
    dataIndex: 'submitRate',
    key: 'submitRate',
  },
  {
    title: '被点评情况',
    dataIndex: 'review',
    key: 'review',
  },
  {
    title: '打卡率',
    dataIndex: 'clock',
    key: 'clock',
  },
  {
    title: '满意度',
    dataIndex: 'satisfaction',
    key: 'satisfaction',
  },
],
 }

export default function tableColums(state = initState,action){
  switch(action.type){
    default:
      return state;
  }   
  
}