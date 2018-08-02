import React, { Component } from 'react';
import { Table } from 'antd';
import { Icon } from 'antd'


export default class ClassDetailTable extends Component{

    render(){
        const columns3 = [{
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
        const { LearnList } = this.props;

        return (
            <div>
                <Table dataSource={LearnList} columns={columns3} bordered />
            </div>
        )
    }
}
