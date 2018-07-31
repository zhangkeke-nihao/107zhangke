import * as ActionTypes from '../const/ActionType';
const initState = {
    LessonsList:[],
    historyLessonsList:[]
}

export default function tableMessage(state = initState,action){
    switch(action.type){
        case ActionTypes.FETCH_GITHUB_TABLE_SUC:
            let LessonsList = action.data.currentLessonsList;
            let historyLessonsList = action.data.historyLessonsList;
            console.log(LessonsList)
            return Object.assign({...state}, { LessonsList, historyLessonsList })
        default:
            return state;
        }
}