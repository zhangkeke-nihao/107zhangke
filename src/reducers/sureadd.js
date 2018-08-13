import * as ActionTypes from '../const/ActionType';
import { initState } from './data'

export default function sureadd(state = initState,action){
    switch(action.type){
        case ActionTypes.SURE_MESSAGE:
            const msgdepartment1 = [];
            for(var i = 0;i < state.department.length;i++){
                for(var j = 0;j < state.department[i].child.length;j++){
                    if(state.department[i].child[j].mid == action.mid){
                        msgdepartment1.push(state.department[i].child[j])
                    }
                }
            }
            console.log(msgdepartment1)

            state.rawdepartment1 = msgdepartment1;
            
            const newrawdepartment1 = state.rawdepartment1;
            console.log(newrawdepartment1)
           
            return {
                ...state,
                newrawdepartment1,
            }
        default:
            return state;
        }
}