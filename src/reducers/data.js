import * as ActionTypes from '../const/ActionType'
import { initState } from '../store';

export default function data(state = initState,action){
    switch(action.type){
        case ActionTypes.ADD_LIST:{       //添加新消息
            const newMessage = state.message.slice();
            newMessage.unshift({
                title: action.title,
                descript: action.descript,
                time: action.time
            })
            const newState = { ...state };
            newState.message = newMessage;
            return newState;
        }
        case ActionTypes.CONTROL_ITEM:{  //改变message
            return { ...state,
                message: action.message,
            }
        }
        case ActionTypes.ON_INDEX:{      //改变onIndex序号
            return Object.assign({...state},{onIndex:action.index});
        }
        default:
            return state;

    }
}