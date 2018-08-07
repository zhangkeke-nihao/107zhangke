import * as ActionTypes from '../const/ActionType';

// const initState = {
//     homeworkList:[],
//     rawhomeworkList:[]
// }

export default function homeworkdata(state = [],action){
    switch(action.type){
        case ActionTypes.FETCH_HOMEWORK_INFO_SUC:
            // const homeworkList = action.response.data;
            // const rawhomeworkList = [].concat(homeworkList);
            // return Object.assign({...state}, { homeworkList,rawhomeworkList });

            const result = action.response.result;
            return result;

        // case ActionTypes.FILTER_STUDENT:
        //     const newStudentarr = [];
        //     for(let i = 0;i < state.rawhomeworkList.length;i++){
        //         if( state.rawhomeworkList[i].author.mid == action.value || action.value == 0){
        //             newStudentarr.push(state.rawhomeworkList[i]);
        //         }
        //     }
        //     const newState = {...state};
        //     newState.homeworkList = newStudentarr;
        //     return newState
        default:
            return state;
        }
}