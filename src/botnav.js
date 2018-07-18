import React, { Component } from 'react';
import './App.css';


export default class NavItem extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        const {item} = this.props;
        return(
            <div>
                <img src={item.icon} alt="图片未显示"/><br/>
                <p>{item.title}</p>
            </div>
        )
    }
}

