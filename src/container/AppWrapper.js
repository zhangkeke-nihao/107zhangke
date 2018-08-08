import React, { Component } from 'react';
import Search from '../components/search/search'
import TabNav from "./tab/tabNav";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '..//action/index';


class AppWrapper extends Component {
  render() {
    const { 
      unReviewdata,
      reviewdata,
      allUnreviewdata,
      allReviewdata,
      homeworkdata
    } = this.props;

    


    return (
      <div className="wrap">
        <Search homeworkdata={homeworkdata}/>
        <TabNav unReviewdata={unReviewdata} reviewdata={reviewdata} allUnreviewdata={allUnreviewdata} allReviewdata={allReviewdata}/>
      </div>
      );
  }
}


const mapEntities = (list,entity) => {
  const newdata = list.map(id => {
      const homework = entity.homeworklist[id];
      const _comments = homework.comments.map((item) => {
          return entity.comments[item];
      })
      return {
          ...homework,
          classInfo: entity.classes[homework.classInfo],
          author: entity.author[homework.author],
          teacherInfo: entity.teacher[homework.teacherInfo],
          comments: _comments,
      }
  });
  return newdata;
}

function mapStateToProps(state){
  const { homeworkdata,entities } = state;
  const { 
    teacherUnreview,
    teacherReviewed,
    allUnreview,
    allReviewed
  } = homeworkdata;
  console.log(homeworkdata)
  
  const unReviewdata = mapEntities( teacherUnreview,entities );
  const reviewdata = mapEntities( teacherReviewed,entities )
  const allUnreviewdata = mapEntities( allUnreview,entities )
  const allReviewdata = mapEntities( allReviewed,entities );

  return {
      unReviewdata,
      reviewdata,
      allUnreviewdata,
      allReviewdata,
      homeworkdata
  }
} 

const mapDispatchToProps = dispatch => {
return {
  Actions: bindActionCreators(actionCreators, dispatch),
}
}

export default connect(mapStateToProps,mapDispatchToProps)(AppWrapper);

