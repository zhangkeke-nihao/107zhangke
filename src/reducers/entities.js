import { combineReducers } from 'redux'
import * as ActionTypes from '../const/ActionType'

function author (state = {},action){
  switch(action.type){
    case ActionTypes.FETCH_HOMEWORK_UNREVIEW_INFO_SUC: 
    case ActionTypes.FETCH_HOMEWORK_REVIEWED_INFO_SUC: 
    case ActionTypes.FETCH_HOMEWORK_ALLUNREVIEW_INFO_SUC: 
    case ActionTypes.FETCH_HOMEWORK_ALLREVIEWED_INFO_SUC:
    {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.author
      };
    }
    default:
      return state;
  }
}

function teacher (state = {},action){
  switch(action.type){
    case ActionTypes.FETCH_HOMEWORK_UNREVIEW_INFO_SUC: 
    case ActionTypes.FETCH_HOMEWORK_REVIEWED_INFO_SUC: 
    case ActionTypes.FETCH_HOMEWORK_ALLUNREVIEW_INFO_SUC: 
    case ActionTypes.FETCH_HOMEWORK_ALLREVIEWED_INFO_SUC:
    {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.teacher
      };
    }
    default:
      return state;
  }
}

function classes (state = {},action){
  switch(action.type){
    case ActionTypes.FETCH_HOMEWORK_UNREVIEW_INFO_SUC: 
    case ActionTypes.FETCH_HOMEWORK_REVIEWED_INFO_SUC: 
    case ActionTypes.FETCH_HOMEWORK_ALLUNREVIEW_INFO_SUC: 
    case ActionTypes.FETCH_HOMEWORK_ALLREVIEWED_INFO_SUC:
    {
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

function comments (state = {},action){
  switch(action.type){
    case ActionTypes.FETCH_HOMEWORK_UNREVIEW_INFO_SUC: 
    case ActionTypes.FETCH_HOMEWORK_REVIEWED_INFO_SUC: 
    case ActionTypes.FETCH_HOMEWORK_ALLUNREVIEW_INFO_SUC: 
    case ActionTypes.FETCH_HOMEWORK_ALLREVIEWED_INFO_SUC: 
    {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.comments
      };
    }

    case ActionTypes.CHANGE_REJECT_STATUS:{   //退回
      const newState =  {
        ...state,
        [action.id]: {
          ...state[action.id],
          status: 'reject',
          reason: '评价太简单'
        }
      }
      console.log(newState);
      return newState
    }
    case ActionTypes.SEND_REVIEW:{    //发送显示
      const newState = {
        ...state,
        [action.json.id]:action.json
      }
      console.log(newState)
      return newState
    }




    default:
      return state;
  }
}

function homeworklist (state = {},action){
  switch(action.type){
    case ActionTypes.FETCH_HOMEWORK_UNREVIEW_INFO_SUC: 
    case ActionTypes.FETCH_HOMEWORK_REVIEWED_INFO_SUC: 
    case ActionTypes.FETCH_HOMEWORK_ALLUNREVIEW_INFO_SUC: 
    case ActionTypes.FETCH_HOMEWORK_ALLREVIEWED_INFO_SUC:
    {
        const entities =  action.response.entities;
        const results = action.response.result; 
        return {
          ...state,
          ...entities.homeworkList,
          ...entities.comments,
          results
        };
    }

    case ActionTypes.CHANGE_HOMEWORK_STAUS:   //改变作业状态（是否为佳作）
        const newStates = {
          ...state,
          [action.id]: {
                      ...state[action.id],
                      isExcellent: !state[action.id].isExcellent
                  }
        };
        console.log(newStates)
        return newStates;


    case ActionTypes.SEND_REVIEW:   //发送
        const id = action.json.id;
        const homeworkId = action.homeworkId;
        const newState = {
          ...state,
          [homeworkId]:{
            ...state[homeworkId],
            comments:[id].concat(state[homeworkId].comments)}
        }
        return newState



    // case ActionTypes.FILTER_HOMEWORK_ITEM:    //搜索
    //   const newhomelist = [];
    //   for(var i = 0;i < state.results.length;i++){
    //     console.log(state[state.results[i]])
    //     if(state[state.results[i]].author == action.value){
    //       newhomelist.push(state[state.results[i]]);
    //     }
    //   }

    //   const newState = {...state};
    //   newState.homeworklist = newhomelist;
    //   console.log(newState)
    //   return newState;
    
    default:
      return state;
  }
}

export default combineReducers({
  classes,
  homeworklist,
  comments,
  author,
  teacher
});

