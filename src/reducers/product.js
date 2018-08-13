import * as ActionTypes from '../const/ActionType';
import { initState } from './data'

export default function product(state = initState,action){
    switch(action.type){
        case ActionTypes.TREENODE_OPEN_MESSAG:
            console.log(action.id);

            const msgproduct = [];
            for(var i = 0;i < state.product.length;i++){
                if(state.product[i].id == action.id){
                    msgproduct.push(state.product[i])
                }
            }
            state.rawdeproduct = msgproduct;
            console.log(state.rawdeproduct)
            const newrawdeproduct = state.rawdeproduct;
            
            return {
                ...state,
                newrawdeproduct
            }


       
        default:
            return state;
        }
}