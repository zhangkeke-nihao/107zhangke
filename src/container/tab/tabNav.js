import React, { Component } from 'react';
import { Tabs  } from 'antd';
import TabPaneWrap from '../tabpane/tabPanewrap'

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actionCreators from '../../action/index';


export default class TabNav extends Component {
    
    constructor(){
        super();
        this.initParams = {
            unreview: {
                token : 1,
                isReviewed :0
            },
            reviewed: {
                token : 1,
                isReviewed : 1
            },
            allunreview: {
                token : 0,
                isReviewed : 0
            },
            allreviewed: {
                token : 0,
                isReviewed : 1
            }
        }
    }

    render() {
        const TabPane = Tabs.TabPane;
        const { 
            unReviewdata,
            reviewdata,
            allUnreviewdata,
            allReviewdata
          } = this.props;
        return (
            <div className="tabs">
                <Tabs defaultActiveKey="1" style={{color:'#bbb'}} tabBarGutter={150} type='line'>
                    <TabPane tab="我的未点评&nbsp;&nbsp;&nbsp;&nbsp;今日已点评" key="1">
                            <ul>
                                <TabPaneWrap initParams={this.initParams.unreview} newdata={unReviewdata}/>
                            </ul>
                    </TabPane>
                    <TabPane tab="我的点评历史&nbsp;&nbsp;&nbsp;&nbsp;累计点评" key="2">
                            <ul>
                                <TabPaneWrap initParams={this.initParams.reviewed} newdata={reviewdata}/>
                            </ul>
                    </TabPane>
                    <TabPane tab="全部未点评" key="3">
                            <ul>
                                <TabPaneWrap initParams={this.initParams.allunreview} newdata={allUnreviewdata}/>
                            </ul>
                    </TabPane>
                    <TabPane tab="全部已点评" key="4">
                            <ul>
                                <TabPaneWrap initParams={this.initParams.allreviewed} newdata={allReviewdata}/>
                            </ul>
                    </TabPane>
                </Tabs>   
            </div>  
        );        
    }
}


// const mapEntities = (list,entity) => {
//     const newdata = list.map(id => {
//         const homework = entity.homeworklist[id];
//         const _comments = homework.comments.map((item) => {
//             return entity.comments[item];
//         })
//         return {
//             ...homework,
//             classInfo: entity.classes[homework.classInfo],
//             author: entity.author[homework.author],
//             teacherInfo: entity.teacher[homework.teacherInfo],
//             comments: _comments,
//         }
//     });
//     return newdata;
// }

// function mapStateToProps(state){
//     const { homeworkdata,entities } = state;
//     const { 
//       teacherUnreview,
//       teacherReviewed,
//       allUnreview,
//       allReviewed
//     } = homeworkdata;
//     console.log(homeworkdata)

//     const unReviewdata = mapEntities( teacherUnreview,entities );
//     const reviewdata = mapEntities( teacherReviewed,entities )
//     const allUnreviewdata = mapEntities( allUnreview,entities )
//     const allReviewdata = mapEntities( allReviewed,entities );

//     return {
//         unReviewdata,
//         reviewdata,
//         allUnreviewdata,
//         allReviewdata
//     }
// } 

// const mapDispatchToProps = dispatch => {
//   return {
//     Actions: bindActionCreators(actionCreators, dispatch),
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(TabNav);


 




