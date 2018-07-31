import React, { Component } from 'react';
import { Tabs  } from 'antd';
import ButtonBox from '../ButtonBox'
import Tables from '../Tables'
import './TabBar.css'

export default class TabBar extends Component{
    constructor(){
        super();
    }

    render(){
        const {LessonsList,historyLessonsList,columns} = this.props;
        console.log(LessonsList)
        // console.log('columns再次：'+columns)
        const TabPane = Tabs.TabPane;
        
        return (
            <div>
               <Tabs defaultActiveKey="1" style={{color:'gray'}}>
                    <TabPane tab="课程信息" key="1">
                        <ButtonBox />
                        <Tables LessonsList={LessonsList} historyLessonsList={historyLessonsList} columns={columns}/>
                    </TabPane>
                    <TabPane tab="满意度反馈" key="2"></TabPane>
                </Tabs>
            </div>
        )
    }
}
