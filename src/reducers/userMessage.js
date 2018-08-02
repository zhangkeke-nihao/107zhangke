import * as ActionTypes from '../const/ActionType';
const initState = {
    userMsg:{},
    basicMsg:{}
}

export default function userMessage(state = initState,action){
    switch(action.type){
        case ActionTypes.FETCH_USER_INFO_SUC:
            const userMsg = action.response.data;
            return Object.assign({...state}, { userMsg, })
        case ActionTypes.FETCH_LEARN_INFO_SUC:
            const basicMsg = action.response.data.basic_info;
            return Object.assign({...state}, { basicMsg,})
        default:
            return state;
        }
}