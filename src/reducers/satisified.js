import * as ActionTypes from '../const/ActionType';

const initState = {
}

export default function satisified(state = initState,action){
    switch(action.type){
        // case ActionTypes.FETCH_SATISIFY_INFO_SUC:
        //     const SatisifyList = action.response.data.list;
        //     return Object.assign({...state}, { SatisifyList })
        // case ActionTypes.CHANGE_MAIL_STAUS:
        //     console.log(action.status,action.i)
        //     const newStates = {...state};
        //     newStates.SatisifyList[action.i].reply_status = 1;
        //     return newStates;


        case ActionTypes.FETCH_SATISIFY_INFO_SUC:
            const result = action.response.result;
            console.log(action.mid)
            return { ...state, [action.mid]: result }
        default:
            return state;
        }
}