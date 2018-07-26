import React, { Component } from 'react';
import { DIALOG_SHOW_STATES } from '../const'
import { connect } from 'react-redux';
import '../App.css';

const icons = require('../image/search.png')
const icona = require('../image/add.png')

class TopBar extends Component{
    constructor(){
        super();
    }
    
    //点击加号，转换状态值
    handleShowAddDialog = () => {      
        const { todoActions } = this.props;
        todoActions.changeStatus(DIALOG_SHOW_STATES.SHOW_ADD_MESSAGE)
    }

    render(){
        return (
            <div className="top">
                <span>微信</span>
                <div className="right"> 
                    <img src={icons} alt="图片未显示" />
                    <img src={icona} alt="图片未显示" onClick={this.handleShowAddDialog}/>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){ 
    const props = state;
    return props;
}

export default connect(mapStateToProps)(TopBar);