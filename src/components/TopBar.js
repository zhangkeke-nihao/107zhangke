import React,{Component} from 'react';

const icons = require('../image/search.png')
const icona = require('../image/add.png')

export default class TopBar extends Component{
    constructor(){
        super();

    }

    render(){
        const { onShowAddDialog } = this.props;
        return (
            <div className="top">
                <span>微信</span>
                <div className="right"> 
                    <img src={icons} alt="图片未显示" />
                    <img src={icona} alt="图片未显示" onClick={onShowAddDialog}/>
                </div>
            </div>
        )
    }
}