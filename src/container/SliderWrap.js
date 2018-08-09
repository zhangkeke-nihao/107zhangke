import React, { Component } from 'react';
import Sliderr from '../components/Slider/Slider'
import { Link } from 'react-router'

export default class SliderWrap extends Component {

 

  render() {

    return (
      <div>
        <div className="slider-top">
            <p>Slider</p>
            <span>滑块</span>
            <Link to="/switchWrap">
              <span>下一页</span>
            </Link>
        </div>
        <Sliderr />
      </div>
      );
  }
}

