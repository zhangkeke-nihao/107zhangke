import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router'
import './button.css'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../action';

class ButtonBox extends Component{
    constructor(props) {
        super(props)
        
        // this.handleConfirmAddClick = this.handleConfirmAddClick.bind(this)
    }
    // handleConfirmAddClick = () => {
    //     const { router } = this.props
    //     router.goBack()
    // }
    goback=()=>{
        this.props.history.goBack()  
    }
    render(){
        return (
                <div className="button-box-wrap">
                    <div className="button-box-left">
                        <Button style={{border:'2px solid #bbb',color:'#000'}}>汇总</Button>
                        <Button style={{background:'#ccc',margin:'0 10px',border:'2px solid #ccc',color:'#000'}}>摄影课</Button>
                        <Button style={{border:'2px solid #bbb',color:'#000'}}>绘画课</Button>
                    </div>
                    <div className="button-box-right">
                        <Button onClick={this.props.back} className="button-box-right" style={{border:'2px solid #bbb',color:'#000'}}>返回</Button>
                    </div>
                </div>
        )
    }
}


function mapStateToProps(state,ownProps){
    const {userMessage,classesTable} = state;
    // const {history} = ownProps.history;
    const props = {userMessage,classesTable};
    return props;
    console.log(ownProps)
  }  
  
const mapDispatchToProps = dispatch => {
    return {
      Actions: bindActionCreators(actionCreators, dispatch),
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(ButtonBox);
  
  