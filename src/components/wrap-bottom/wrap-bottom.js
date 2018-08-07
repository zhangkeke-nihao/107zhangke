import React, { Component } from 'react';

import Picture from './pic/picture';
import WorlDetail from './workDeatail/WorlDetail'
import RemarkWord from './remarkword/RemarkWord'
import RemarkDetail from './remarkdetail/RemarkDetail'
import './wrap-bottom.css'




export default class WrapBottom extends Component {

 
    render() {
        const { homeworkdata,entities} = this.props;
        let newdata = homeworkdata;
        if(newdata){
            newdata = homeworkdata.map(id=>{
            const homeworkdata = entities.homeworkList[id];
            return {
              ...homeworkdata,
              classInfo: entities.classes[homeworkdata.classInfo],
              author:entities.author[homeworkdata.author],
              comments:entities.comments[homeworkdata.comments],
              teacherInfo:entities.teacher[homeworkdata.teacherInfo]
            //   class_info: entities.classes[homeworkdata.class_info],
            //   teacher_info: entities.teachers[satisfiled.teacher_info]
            }
          });
        }
        console.log(newdata)

        return (
            <div className="bottom-wrap">
                <div className="left">
                    <Picture />
                    <WorlDetail />
                    <RemarkWord />  
                </div>
                <div className="right">
                    <RemarkDetail />
                </div>
            </div>   
        );        
    }
}









