import * as ActionTypes from '../const/ActionType';

const initState = {
    teacherUnreview:[],
    teacherReviewed:[],
    allUnreview:[],
    allReviewed:[],
    filterMid:[]
}

export default function homeworkdata(state = initState,action){
    switch(action.type){
        case ActionTypes.FETCH_HOMEWORK_UNREVIEW_INFO_SUC:
            return { 
                ...state, 
                teacherUnreview: action.response.result 
            };
        case ActionTypes.FETCH_HOMEWORK_REVIEWED_INFO_SUC: 
            return { 
                ...state, 
                teacherReviewed: action.response.result 
            };
        case ActionTypes.FETCH_HOMEWORK_ALLUNREVIEW_INFO_SUC: 
            return { 
                ...state, 
                allUnreview: action.response.result 
            };
        case ActionTypes.FETCH_HOMEWORK_ALLREVIEWED_INFO_SUC: 
            return { 
                ...state, 
                allReviewed: action.response.result 
            };


            case ActionTypes.FILTER_HOMEWORK_ITEM:    //搜索
                return {
                    ...state,
                    filterMid : action.value,
                }
    
        default:
            return state;
        }
}