import React, { Component } from 'react';
import { Button } from 'antd';
import '../components/TabBar/TabBar.css'

export default class ButtonBox extends Component{
    render(){
        return (
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
        )
    }
}
