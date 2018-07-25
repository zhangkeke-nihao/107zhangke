import React,{Component} from 'react';
import '../App.css';
import { DIALOG_SHOW_STATES } from '../const'
import { connect } from 'react-redux';
const icons = require('../image/search.png')
const icona = require('../image/add.png')

class TopBar extends Component{
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


function mapStateToProps(state,ownProps){ 
    const props = state;
    return props;
}
export default connect(mapStateToProps)(TopBar);