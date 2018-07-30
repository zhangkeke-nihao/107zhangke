import React, { Component } from 'react';
import { Table } from 'antd';

import './TabBar/TabBar.css'
import './Header/header.css'
export default class TabBar extends Component{
    constructor(){
        super();
    }


    render(){
        const { dataSource,columns,dataSource2,columns2 } = this.props;
        return (
            <div>
                <div className="p1"><p>在学课程</p></div>
                <Table dataSource={dataSource} columns={columns} />

                <div className="p2"><p>历史数据</p></div>
                <Table dataSource={dataSource2} columns={columns2} />
                 
            
            </div>
        )
    }
}
