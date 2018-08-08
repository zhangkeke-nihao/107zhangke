import React, { Component } from 'react';
import Picture from '../../components/wrap-bottom/pic/picture';
import WorlDetail from '../../components/wrap-bottom/workDeatail/WorlDetail'
import RemarkWord from '../../components/wrap-bottom/remarkword/RemarkWord'
import RemarkDetail from '../../components/wrap-bottom/remarkdetail/RemarkDetail'
import './tabpane.css'


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../action/index';



class TabPaneWrap extends Component {

    componentDidMount(){   
        const { Actions,initParams } = this.props;
        Actions.fetchUnReviewInfo(initParams);
        // Actions.fetchReviewedInfo(initParams);
        // Actions.fetchAllUnReviewInfo(initParams);
        // Actions.fetchAllReviewedInfo(initParams);
    }

    renderWrapBottom = () => {
        const { newdata } = this.props;
        const homeworkmsg = newdata.map((item) => {
            return  <li>
                        <div className="bottom-wrap">
                            <div className="left">
                                <Picture item={item}/>
                                <WorlDetail item={item}/>
                                <RemarkWord />  
                            </div>
                            <div className="right">
                                <RemarkDetail item={item}/>
                            </div>
                        </div> 
                    </li>
        })
        return homeworkmsg;
    }


    render() {
        return (
            <div>   
                {this.renderWrapBottom()}
            </div>  
        );        
    }
}


function mapStateToProps(state){
     return state;
} 
  
const mapDispatchToProps = dispatch => {
    return {
      Actions: bindActionCreators(actionCreators, dispatch),
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(TabPaneWrap);
  
 



 




