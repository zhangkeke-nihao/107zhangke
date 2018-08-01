import React, { Component } from 'react';
import Header from '../components/Header/Header';
import TabBar from '../components/TabBar/TabBar';
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../action';


class Op extends Component {

  componentDidMount(){   
    const { Actions } = this.props;
    const mid = 1;
    const id = 2;
    Actions.fetchUserInfo(mid)
    Actions.fetchLessonInfo(mid)
    Actions.fetchStudentInfo(id)
    Actions.fetchLearnInfo(id)
  }
 

  render() {
    const {userMessage,tableMessage,tableColums} = this.props;
    return (
      <div className="wrap">
        <Header 
            userMsg={userMessage.userMsg}
        />
        <TabBar 
            LessonsList={tableMessage.LessonsList} 
            historyLessonsList={tableMessage.historyLessonsList} 
            StudentList={tableMessage.StudentList}
            LearnList={tableMessage.LearnList}
            basicMsg={userMessage.basicMsg}
            columns1={tableColums.columns1}
            columns2={tableColums.columns2}
            columns3={tableColums.columns3}
        />
      </div>
    );
  }
}



function mapStateToProps(state){
  const {userMessage,tableMessage,tableColums} = state;
  const props = {userMessage,tableColums,tableMessage};
  return props;
}  

const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(actionCreators, dispatch),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Op);



  



 




