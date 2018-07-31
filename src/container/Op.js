import React, { Component } from 'react';
import Header from '../components/Header/Header';
import TabBar from '../components/TabBar/TabBar';
import '../App.css';
import { connect } from 'react-redux';
import * as api from '../api/api';

class Op extends Component {

  
  componentDidMount(){   
    const { dispatch } = this.props;
    api.user_post(dispatch);
    api.table_post(dispatch);
  }
 

  render() {
    const {userMessage,tableMessage,tableColums} = this.props;
    
    console.log('tableMessage here',tableMessage);
    return (
      <div className="wrap">
        <Header 
            msg={userMessage.msg}
        />
        <TabBar 
            LessonsList={tableMessage.LessonsList} 
            historyLessonsList={tableMessage.historyLessonsList} 
            columns={tableColums.columns}
        />
      </div>
    );
  }
}



function mapStateToProps(state){
  const {userMessage,tableMessage,tableColums} = state;
  const props = {userMessage,tableColums,tableMessage};

  return props;
  console.log('columns再次：'+tableColums)


}  

export default connect(mapStateToProps)(Op);



  



 




