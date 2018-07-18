import React, { Component } from 'react';
import './App.css';


export default class TopItem extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        const {item} = this.props;
        return(
            <div>
                <span>{item.title}</span>
                <div className="right">
                    <img className="left" src={item.aicon} alt="图片未显示"/>
                    <img src={item.bicon} alt="图片未显示"/>
                </div>
            </div>
        
        )
    }
}

