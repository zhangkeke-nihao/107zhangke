import React, { Component } from 'react';
import Header from '../components/lessonContent/Header';
import LessonTable from '../components/lessonContent/lessontable';
import ButtonBox from '../components/lessonContent/ButtonBox'
import SatisifyTable from '../components/lessonContent/satisifyTable'
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../action';
import { Tabs  } from 'antd';


class LessonContent extends Component {

  componentDidMount(){   
    const { Actions, params } = this.props;
    const { mid } = params;
    Actions.fetchUserInfo(mid)
    Actions.fetchLessonInfo(mid)
    Actions.fetchSatisifyInfo(mid)
  }
 

  render() {
    const {userMessage,tableMessage} = this.props;
    const TabPane = Tabs.TabPane;
    
    return (
      <div className="wrap">
            <Header userMsg={userMessage.userMsg} />
            <Tabs defaultActiveKey="1" style={{color:'#bbb'}}>
                <TabPane tab="课程信息" key="1">
                    <ButtonBox />
                    <LessonTable 
                        LessonsList={tableMessage.LessonsList} 
                        historyLessonsList={tableMessage.historyLessonsList} 
                    />
                </TabPane>
                <TabPane tab="满意度反馈" key="2">
                    <ButtonBox />
                    <SatisifyTable SatisifyList={tableMessage.SatisifyList}/>
                </TabPane>
            </Tabs>
      </div>
    );
  }
}


function mapStateToProps(state){
    const {userMessage,tableMessage} = state;
    const props = {userMessage,tableMessage};
    return props;
  }  
  
const mapDispatchToProps = dispatch => {
    return {
      Actions: bindActionCreators(actionCreators, dispatch),
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(LessonContent);
  
  



 




