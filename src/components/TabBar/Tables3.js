import React, { Component } from 'react';
import { Table } from 'antd';
import './TabBar.css'
import '../Header/header.css'

export default class Tables3 extends Component{

    render(){
        const { LearnList,columns3 } = this.props;
        return (
            <div>
                <Table dataSource={LearnList} columns={columns3} bordered />
            </div>
        )
    }
}
