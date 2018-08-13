import React, { Component } from 'react';
import './ReviewDialog.css'
import { Icon,Button,Input } from 'antd';
import ReviewTree from '../tree-choose/ReviewTree'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../action/index';

class ReviewDialog extends Component{
    getReviewClassName = () => {
        if(!this.props.isActive){
            return 'reviewDialog-wrap hide';
        }
        return 'reviewDialog-wrap show';
    }

    handlesure = (mid) => {
        const { Actions } = this.props;
        Actions.suremessage(mid)
    }

    renderrightItem = () =>{
        const { reviewtreedata,product } = this.props;
        if(reviewtreedata.rawdepartment){
            const msg = reviewtreedata.rawdepartment[0].child.map((item) => {
                return <li onClick={() => this.handlesure(item.mid)}><button>{item.nick}mid:{item.mid}</button></li>
            })
            return msg;
        }
        
        if(product.rawdeproduct ){
            const msg = product.rawdeproduct[0].child.map((item) => {
                return <li><button>{item.nick}mid:{item.mid}</button></li>
            })
            return msg;
        }
        
        else{
            return null
        }
    }


    renderleftItem = () => {
        console.log(2222222222222)
        const { Actions } = this.props;
        const { sureadd } = this.props;
        console.log(sureadd.rawdepartment1)
        if(sureadd.rawdepartment1){
            return  
                    // <li>
                    //     <button>{sureadd.rawdepartment1[0].nick}mid:{sureadd.rawdepartment1[0].mid}</button>
                    //     <div>
                    //         <Icon style={{position:'absolute',right:'0',top:'0',fontWeight:'bold'}} type="close" />
                    //     </div>
                    // </li>
                    <li>22222222222</li>
        }
        else{
            return null
        }
    }




    render(){
        const Search = Input.Search;
        return (
            <div className={this.getReviewClassName()}>

                <div className="review-head">
                    <p>点评作业：拥有个人点评页，可以为学生作业进行点评</p>
                    <div onClick={this.props.onCancle}>
                        <Icon type="close" style={{fontWeight:'bold'}}/>
                    </div>
                </div>

                <div className="review-content">
                    <div className="review-left">
                        <Button style={{border:'1px solid #ccc',color:'#000',marginRight:'10px'}}>删除</Button>
                        <Search
                            placeholder="名字"
                            enterButton="搜索"
                            // onSearch={(value) => {Actions.FilterHomeworkItem(value)}}
                            // onSearch={() => this.handleFilter(value)}
                            style={{ width: 200 }}
                        />
                        <ul className="review-list"> 
                            {this.renderleftItem()}
                        </ul>
                    </div>

                    <div className="review-tree">
                        <ReviewTree reviewtreedata={this.props.reviewtreedata} />
                    </div>

                    <div className="review-right">
                        <Search
                                placeholder="名字"
                                enterButton="搜索"
                                // onSearch={(value) => {Actions.FilterHomeworkItem(value)}}
                                // onSearch={() => this.handleFilter(value)}
                                style={{ width: 200 }}
                        />
                        <ul className="review-list">
                            {this.renderrightItem()}

                        </ul>
                    </div>
                </div>
                <div className="review-bot" onClick={this.renderleftItem}>
                    <Button style={{border:'2px solid #bbb',position:'absolute',right:'0'}}>确认</Button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { reviewtreedata,sureadd } = state;
    const props = { reviewtreedata }; 
    return props;
  } 
  
  const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(actionCreators, dispatch),
  }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(ReviewDialog);
  
  

