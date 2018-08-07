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
                    <div>1111></div>
                    <div>222</div>
                    <div>333</div>
                    <div>444</div>
                    <div>5555</div>
                </Carousel>
            </div>
        )
    }
}


