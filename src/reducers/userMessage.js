import * as ActionTypes from '../const/ActionType';
const initState = {
    msg:[],
}

export default function userMessage(state = initState,action){
    switch(action.type){
        case ActionTypes.FETCH_GITHUB_USER_SUC:
            let msg = action.data;
            return Object.assign({...state}, { msg })
        default:
        return state;
        }
}