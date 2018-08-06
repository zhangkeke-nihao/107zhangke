import { combineReducers } from 'redux'
import * as ActionTypes from '../const/ActionType'


function classes (state = {},action){
  switch(action.type){
    case ActionTypes.FETCH_SATISIFY_INFO_SUC: {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.classes
      };
    }
    default:
      return state;
  }
}

function teachers (state = {},action){
  switch(action.type){
    case ActionTypes.FETCH_SATISIFY_INFO_SUC: {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.teachers
      };
    }
    default:
      return state;
  }
}

function satisfiled (state = {},action){
  switch(action.type){
    case ActionTypes.FETCH_SATISIFY_INFO_SUC: {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.satisfiled
      };
    }
    // case `${ActionTypes.REPLY_USER_FEED_BACK}`: {
    //   const { time } = action.params
      
    //   const targetItem = { ...state[time] }
    //   targetItem.reply_status = 1

    //   const nextState = { ...state, [time]: targetItem }
    //   return nextState
    // }
    default:
      return state;
  }
}


function currentLessonsList(state = {}, action) {
  switch(action.type){
    case ActionTypes.FETCH_LESSON_INFO_SUC:
      const { current } = action.response;
      return {
        ...state,
        ...current.entities.currentLessonsList,
      }
    default:
      return state
  }
}
function historyLessonsList(state = {}, action) {
  switch(action.type){
    case ActionTypes.FETCH_LESSON_INFO_SUC:
    const { history } = action.response;
      return {
        ...state,
        ...history.entities.historyLessonsList
      }
    default:
      return state
  }
}



export default combineReducers({
  classes,
  teachers,
  satisfiled,
  currentLessonsList,
  historyLessonsList
});