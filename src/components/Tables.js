import React, { Component } from 'react';
import { Table } from 'antd';
import './TabBar/TabBar.css'
import './Header/header.css'

export default class Tables extends Component{

    render(){
        const { LessonsList,historyLessonsList,columns } = this.props;
        return (
            <div>
                <Table dataSource={LessonsList} columns={columns} title={() => '在学课程'} bordered />
                <Table dataSource={historyLessonsList} columns={columns} title={() => '历史数据'} bordered />
            </div>
           
        )
    }
}
