import * as ActionTypes from '../const/ActionType';


export default function homeworkdata(state = {},action){
    switch(action.type){
        case ActionTypes.CHANGE_WORK_STAUS:
            const newStates = {...state};
            newStates.homeworkList[action.idx].isExcellent = !newStates.homeworkList[action.idx].isExcellent;
            return newStates;
       
        default:
            return state;
        }
}