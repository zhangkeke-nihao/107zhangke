import React, { Component } from 'react';
import Header from '../components/lessonContent/Header';
import LessonTable from '../components/lessonContent/lessontable';
import ButtonBox from '../components/button/ButtonBox'
import SatisifyTable from '../components/lessonContent/satisifyTable'
import '../App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../action';
import { Tabs  } from 'antd';


class LessonContent extends Component {

  componentDidMount(){   
    const { Actions } = this.props;
    const mid = this.props.params.mid
    Actions.fetchUserInfo(mid)
    Actions.fetchLessonInfo(mid)
    Actions.fetchSatisifyInfo(mid)
  }
 

  render() {
    const {userMessage,LessonsList,historyLessonsList,entities} = this.props;
    const TabPane = Tabs.TabPane;
    return (
      <div className="wrap">
            <Header userMessage={userMessage} />
            <Tabs defaultActiveKey="1" style={{color:'#bbb'}}>
                <TabPane tab="课程信息" key="1">
                    <ButtonBox back={this.props.router.goBack}/>
                    <LessonTable 
                        // LessonsList={LessonsList} 
                        // historyLessonsList={historyLessonsList} 
                    />
                </TabPane>
                <TabPane tab="满意度反馈" key="2">
                    <ButtonBox />
                    <SatisifyTable entities={entities} list={this.props.satisfiedInfo}/>
                </TabPane>
            </Tabs>
      </div>
    );
  }
}


function mapStateToProps(state,ownProps){
  const mid = ownProps.params.mid
    const {
      userMessage,
      classesTable:{
        currentLessonsList,
        historyLessonsList
      },
      entities,
      satisified
    } = state;

const list = satisified[mid];
    return  {
      userMessage,
      LessonsList:currentLessonsList,
      historyLessonsList:historyLessonsList,
      entities,
      satisfiedInfo: list
    };
  }  
  
const mapDispatchToProps = dispatch => {
    return {
      Actions: bindActionCreators(actionCreators, dispatch),
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(LessonContent);
  
  



 




