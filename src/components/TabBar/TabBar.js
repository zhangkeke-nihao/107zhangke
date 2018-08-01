import React, { Component } from 'react';
import { Tabs  } from 'antd';
import ButtonBox from './ButtonBox'
import Tables1 from './Tables1'
import Tables2 from './Tables2'
import Tables3 from './Tables3'
import Search from './search'
import BasicMsg from './BasicMsg'
import './TabBar.css'


export default class TabBar extends Component{

    render(){
        const {
            LessonsList,
            historyLessonsList,
            StudentList,
            LearnList,
            basicMsg,
            columns1,
            columns2,
            columns3
        } = this.props;
        const TabPane = Tabs.TabPane;

        return (
            <div>
               <Tabs defaultActiveKey="1" style={{color:'gray'}}>
                    <TabPane tab="课程信息" key="1">
                        <ButtonBox />
                        <Tables1 
                            LessonsList={LessonsList} 
                            historyLessonsList={historyLessonsList} 
                            columns1={columns1}
                        />
                    </TabPane>

                    <TabPane tab="学员档案" key="2">
                        <Search />
                        <Tables2 StudentList={StudentList} columns2={columns2}/>
                    </TabPane>

                    <TabPane tab="上课详情" key="3">
                        <BasicMsg basicMsg={basicMsg}/>
                        <Tables3 LearnList={LearnList} columns3={columns3}/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
