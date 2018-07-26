import { CHANGE_STATUS } from '../const/ActionType'
import { initState } from '../store/index';

export default function dialogStatus(state = initState,action){
    switch(action.type){
        case CHANGE_STATUS:{   //转换状态值
            return Object.assign({...state},{showDialog:action.showDialog,onIndex:action.index});
          }
        default:
            return state;
    }
}