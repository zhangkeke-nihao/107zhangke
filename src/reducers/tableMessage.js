import * as ActionTypes from '../const/ActionType';
const initState = {
    LessonsList:[],
    historyLessonsList:[],
    StudentList:[],
    LearnList:[],

    rawStudentList:[]
}

export default function tableMessage(state = initState,action){
    switch(action.type){
        case ActionTypes.FETCH_LESSON_INFO_SUC:
            const LessonsList = action.response.data.currentLessonsList;
            const historyLessonsList = action.response.data.historyLessonsList;
            return Object.assign({...state}, { LessonsList, historyLessonsList })
        case ActionTypes.FETCH_STUDENT_INFO_SUC:
            const StudentList = action.response.data;
const rawStudentList = [].concat(StudentList);
            return Object.assign({...state}, { StudentList,rawStudentList })
        case ActionTypes.FETCH_LEARN_INFO_SUC:
            const LearnList = action.response.data.list;
            return Object.assign({...state}, { LearnList })
        case ActionTypes.CHANGE_TABLE_ITEM:
            console.log(action.value)
            const newStudentarr = [];
            for(let i = 0;i < state.rawStudentList.length;i++){
                if( state.rawStudentList[i].mid == action.value){
                    newStudentarr.push(state.rawStudentList[i]);
                }
            }
            const newState = {...state};
            newState.StudentList = newStudentarr;
            return newState
        default:
            return state;
        }
}