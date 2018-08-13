import * as ActionTypes from '../const/ActionType';
import { initState } from './data'

export default function reviewtreedata(state = initState,action){
    switch(action.type){
        case ActionTypes.TREENODE_OPEN_MESSAG:
            const msgdepartment = [];
            for(var i = 0;i < state.department.length;i++){
                if(state.department[i].id == action.id){
                    msgdepartment.push(state.department[i])
                }
            }

            state.rawdepartment = msgdepartment;
            const newrawdepartment = state.rawdepartment;
            return {
                ...state,
                newrawdepartment,
            }


        

        case ActionTypes.CANCLE_MESSAGE:
            for(var i = 0;i < state.department.length;i++){
                for(var j = 0;j < state.department[i].child.length;j++){
                    if(state.department[i].child[j].mid == action.mid){
                        state.department[i].child.splice(state.department[i].child[j],1)
                    }
                }
            }
            console.log(state.department)

            const newState = {...state}
            newState.rawdepartment2 = state.department
            const newrawdepartmentone = newState.rawdepartment2;
            console.log(newState)
            return {
                ...state,
                newrawdepartmentone
            };
          
       
        default:
            return state;
        }
}