import React, { Component } from 'react';
import './App.css';


export default class FloorItem extends Component{
    constructor(props){
        super(props);
    }








    
    onMsgClick = () => {
        const { onClick,item } = this.props;
        if(onClick){   //判断这个对象是否存在
            onClick(item);
        }
        console.log(item.word);
    }



    render(){
        const {item} = this.props;
        return(
                <button onClick={this.onMsgClick}>{item.word}</button>
        
        )
    }
}

