import * as ActionTypes from '../const/ActionType';
const initState = {
    LessonsList:'',
    historyLessonsList:''
}

export default function tableMessage(state = initState,action){
    switch(action.type){
        case ActionTypes.FETCH_GITHUB_TABLE_SUC:
            const LessonsList = action.data.currentLessonsList;
            const historyLessonsList = action.data.historyLessonsList;
            return Object.assign({...state}, { LessonsList, historyLessonsList })
            // return [...state,...action.data.currentLessonsList,...action.data.historyLessonsList]
        default:
            return state;
        }
}