import React, { Component } from 'react';
import { Table } from 'antd';
import './TabBar/TabBar.css'
import './Header/header.css'

export default class Tables extends Component{
    constructor(){
        super();
    }

    render(){
        const { LessonsList,historyLessonsList,columns } = this.props;
        console.log('LessonsList ',LessonsList)

        return (
            <div>
                <Table dataSource={historyLessonsList} columns={columns} title={() => '在学课程'} bordered />
                <Table dataSource={historyLessonsList} columns={columns} title={() => '历史数据'} bordered />
            </div>
           
        )
    }
}
