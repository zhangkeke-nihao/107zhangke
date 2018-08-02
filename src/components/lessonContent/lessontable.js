import React, { Component } from 'react';
import { Table } from 'antd';
import { Popover,Button } from 'antd';
import { Icon } from 'antd';
import { Link } from 'react-router'
import '../table.css'

export default class LessonTable extends Component{

    render(){
        const { LessonsList,historyLessonsList } = this.props;
        // const content = (
        //     <div>
        //       {LessonsList.teacherInfo.id}
        //     </div>
        //   );
        const columns1 = [{
            title: '班级',
            dataIndex: 'classInfo',
            key: 'classInfo',
            align: 'center',
            render: text => {
              return  <div>
                        <Link to="/classDetail">
                          <Icon type="exclamation-circle" />
                          <span>{text.name}</span>
                        </Link>
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
            align:'center',
            render: text => {
              return  <div>
                        <Popover content={`老师：${text.nick}; id：${text.mid}; 微信：${text.wxCode}`} >
                            <Button style={{border:'none',width:'10px'}}><Icon type="smile" /></Button>
                        </Popover>
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
          }]
       
        return (
            <div>
                <Table dataSource={LessonsList} columns={columns1} title={() => '在学课程'} bordered />
                <Table dataSource={historyLessonsList} columns={columns1} title={() => '历史数据'} bordered />
            </div>
           
        )
    }
}
