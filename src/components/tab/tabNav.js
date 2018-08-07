import React, { Component } from 'react';
import { Tabs  } from 'antd';
import WrapBottom from '../wrap-bottom/wrap-bottom'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../action/index';



class TabNav extends Component {

    componentDidMount(){   
        const { Actions } = this.props;
        const token = 1;
        const isReviewed = 0
        Actions.fetchHomeWorkInfo(token,isReviewed)
    }

    renderWrapBottom = () => {
        
        // const homeworkmsg = homeworkdata.homeworkList.map((item,idx) => {
        //     return  <li>
        //                 <WrapBottom key={idx} item={item} idx={idx}/> 
        //             </li>
        // })
        // return homeworkmsg;
    }
    render() {
        const { homeworkdata,entities } = this.props;
        const TabPane = Tabs.TabPane;
        return (
        <div className="tabs">
            <Tabs defaultActiveKey="1" style={{color:'#bbb'}} tabBarGutter={150} type='line'>
                <TabPane tab="我的未点评&nbsp;&nbsp;&nbsp;&nbsp;今日已点评" key="1">
                        <ul>
                            <WrapBottom homeworkdata={homeworkdata} entities={entities}/> 
                        </ul>
                </TabPane>
                <TabPane tab="我的点评历史&nbsp;&nbsp;&nbsp;&nbsp;累计点评" key="2">
                        <ul>
                        <WrapBottom /> 
                        </ul>
                </TabPane>
                <TabPane tab="全部未点评" key="3">
                        <ul>
                        <WrapBottom /> 
                        </ul>
                </TabPane>
                <TabPane tab="全部已点评" key="4">
                        <ul>
                        <WrapBottom /> 
                        </ul>
                </TabPane>
            </Tabs>   
        </div>  
        );        
    }
}


function mapStateToProps(state){
      const { homeworkdata,entities } = state;
      return  { homeworkdata,entities };
    } 
  
const mapDispatchToProps = dispatch => {
    return {
      Actions: bindActionCreators(actionCreators, dispatch),
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(TabNav);
  
 



 




