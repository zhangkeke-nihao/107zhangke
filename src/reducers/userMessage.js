import * as ActionTypes from '../const/ActionType';
const initState = {
    userMsg:''
}

export default function userMessage(state = initState,action){
    switch(action.type){
        case ActionTypes.FETCH_GITHUB_USER_SUC:
            const userMsg = action.data;
            console.log('==============='+userMsg)
            return Object.assign({...state}, { userMsg, })

            // return {
            //     ...state,
            //     ...action.data,
            // }
        default:
            return state;
        }
}