import * as ActionTypes from '../const/ActionType';
import { Row } from '../../node_modules/antd';
const initState = {
    LessonsList:[],
    historyLessonsList:[],
    StudentList:[],
    LearnList:[],
    rawStudentList:[],
    SatisifyList:[]

}

export default function tableMessage(state = initState,action){
    switch(action.type){
        case ActionTypes.FETCH_LESSON_INFO_SUC:
            const LessonsList = action.response.data.currentLessonsList;
            const historyLessonsList = action.response.data.historyLessonsList;
            return Object.assign({...state}, { LessonsList, historyLessonsList })
        case ActionTypes.FETCH_STUDENT_INFO_SUC:
            const StudentList = action.response.data.map((row,i)=>({...row,student:{mid:row.mid,nick:row.nick}}));
            const rawStudentList = [].concat(StudentList);
            return Object.assign({...state}, { StudentList,rawStudentList })
        case ActionTypes.FETCH_LEARN_INFO_SUC:
            const LearnList = action.response.data.list;
            return Object.assign({...state}, { LearnList })
        case ActionTypes.FETCH_SATISIFY_INFO_SUC:
            console.log('===================================================')
            const SatisifyList = action.response.data.list;
            return Object.assign({...state}, { SatisifyList })
        case ActionTypes.CHANGE_TABLE_ITEM:
            console.log(action.value)
            const newStudentarr = [];
            for(let i = 0;i < state.rawStudentList.length;i++){
                if( state.rawStudentList[i].mid == action.value || action.value == 0){
                    newStudentarr.push(state.rawStudentList[i]);
                }
            }
            const newState = {...state};
            newState.StudentList = newStudentarr;
            return newState
        case ActionTypes.CHANGE_MAIL_STAUS:
            console.log(action.id)
            const newStates = {...state};
            newStates.StudentList.reply_status = 1;
            console.log(newStates.StudentList.reply_status)
            return newStates 
        default:
            return state;
        }
}