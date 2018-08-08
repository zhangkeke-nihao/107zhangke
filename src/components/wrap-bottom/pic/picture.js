import React, { Component } from 'react';
import { Carousel } from 'antd';
import './pic.css'


const icon = require('../../../image/5.jpg')
export default class Picture extends Component{

    
    render(){
        const { item } = this.props
        function onChange(a, b, c) {
            console.log(a, b, c);
        }
        return (
            <div>
               <Carousel afterChange={onChange}>
                    <div><img src={item.photos[0]} /></div>
                    <div><img src={item.photos[1]} /></div>
                    <div><img src={item.photos[2]} /></div>
                    <div><img src={item.photos[3]} /></div>
                    <div><img src={item.photos[4]} /></div>
                </Carousel>
            </div>
        )
    }
}


