import React, { Component } from 'react';
import { Tabs  } from 'antd';
import { Table } from 'antd';
import { Button } from 'antd';
import Tables from '../Tables'
import './TabBar.css'

export default class TabBar extends Component{
    constructor(){
        super();
    }


    render(){
        const { dataSource,columns,dataSource2,columns2 } = this.props;
        const TabPane = Tabs.TabPane;
        return (
            <div>
               <Tabs defaultActiveKey="1" style={{color:'gray'}}>
                    <TabPane tab="课程信息" key="1">
                        <div className="button-box-wrap">
                            <div className="button-box-left">
                                <Button style={{border:'2px solid #bbb',color:'#000'}}>汇总</Button>
                                <Button style={{background:'#ccc',margin:'0 10px',border:'2px solid #ccc',color:'#000'}}>摄影课</Button>
                                <Button style={{border:'2px solid #bbb',color:'#000'}}>绘画课</Button>
                            </div>
                            <div className="button-box-right">
                                <Button className="button-box-right" style={{border:'2px solid #bbb',color:'#000'}}>返回</Button>
                            </div>
                        </div>
                        
                        <Tables 
                            dataSource={dataSource} 
                            columns={columns} 
                            dataSource2={dataSource2} 
                            columns2={columns2}
                        />
                    </TabPane>
                    <TabPane tab="满意度反馈" key="2"></TabPane>
                </Tabs>
            </div>
        )
    }
}
