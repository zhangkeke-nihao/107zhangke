import React, { Component } from 'react';
import { Table } from 'antd';
import './TabBar.css'
import '../Header/header.css'

export default class Tables extends Component{

    render(){
        const { LessonsList,historyLessonsList,columns1 } = this.props;
        return (
            <div>
                <Table dataSource={LessonsList} columns={columns1} title={() => '在学课程'} bordered />
                <Table dataSource={historyLessonsList} columns={columns1} title={() => '历史数据'} bordered />
            </div>
           
        )
    }
}
