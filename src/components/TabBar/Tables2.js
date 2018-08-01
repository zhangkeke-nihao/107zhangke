import React, { Component } from 'react';
import { Table } from 'antd';
import './TabBar.css'
import '../Header/header.css'

export default class Tables2 extends Component{

    render(){
        const { StudentList,columns2 } = this.props;
        return (
            <div>
                <Table dataSource={StudentList} columns={columns2} bordered />
            </div>
        )
    }
}
