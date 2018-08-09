import React, { Component } from 'react';
import './Slider.css'
import { Slider } from 'antd';


export default class Sliderr extends Component{
    state = {
        defaultValue: {},
        showValue:{},      // 是否展示当前数值
        onChange:{}        // 滑动滑块之后的回调，回调当前滑块的value值
    }
    
    render(){
        
        return (
            <div className="slider-bar">
                <div className="slider">
                    <div className="bar"></div>
                    <span onTouchStart={(e) => console.log(e)} onTouchEnd={e => console.log(e)}></span>
                </div>
                
                

                
                <input type="range" name="points" min="0" max="10" />
                <Slider />
            </div>
        );
    }
}

  