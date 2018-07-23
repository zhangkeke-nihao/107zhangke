import React,{Component} from 'react';

const iconm = require('../image/message.png')
const iconl = require('../image/list.png')
const iconf = require('../image/find.png')
const iconw = require('../image/wo.png')
export default class NavBar extends Component{
    constructor(){
        super();

    }

    render(){
        return (
            <div className="nav">
                <div className="item">
                    <img className="icon" src={iconm} alt="" />
                    <div className="botname">微信</div>
                </div>
                <div className="item">
                    <img className="icon" src={iconl} alt="" />
                    <div className="botname">通讯录</div>
                </div>
                <div className="item">
                    <img className="icon" src={iconf} alt="" />
                    <div className="botname">发现</div>
                </div>
                <div className="item">
                    <img className="icon" src={iconw} alt="" />
                    <div className="botname">我</div>
                </div>
            </div>
        )
    }
}