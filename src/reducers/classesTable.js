import * as ActionTypes from '../const/ActionType';

import { combineReducers } from 'redux'
const initState = {
    LessonsList:[],
    historyLessonsList:[],

    LearnList:[],
}

// export default function classesTable(state = initState,action){
//     switch(action.type){
//         case ActionTypes.FETCH_LESSON_INFO_SUC:
//             const LessonsList = action.response.data.currentLessonsList;
//             const historyLessonsList = action.response.data.historyLessonsList;
//             return Object.assign({...state},{LessonsList,historyLessonsList})
       
//         case ActionTypes.FETCH_LEARN_INFO_SUC:
//             const LearnList = action.response.data.list;
//             return Object.assign({...state}, { LearnList })
//         default:
//             return state;
//         }
// }



function currentLessonsList(state = {}, action) {
  switch(action.type){
    case ActionTypes.FETCH_LESSON_INFO_SUC:
      console.log(action.mid)
      return { ...state, [action.mid]: [ ...action.response.current.result ] }
    default:
      return state
  }
}
function historyLessonsList(state = {}, action) {
  switch(action.type){
    case ActionTypes.FETCH_LESSON_INFO_SUC:
      return { ...state, [action.mid]: [ ...action.response.history.result ] }
    default:
      return state
  }
}

const classesTable = combineReducers({
  currentLessonsList,
  historyLessonsList
})

export default classesTable