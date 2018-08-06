import * as ActionTypes from '../const/ActionType';

const initState = {
    StudentList:[],
    rawStudentList:[],
}

export default function studentTables(state = initState,action){
    switch(action.type){
        case ActionTypes.FETCH_STUDENT_INFO_SUC:
            const StudentList = action.response.data.map((row,i)=>({...row,student:{mid:row.mid,nick:row.nick}}));
            const rawStudentList = [].concat(StudentList);
            return Object.assign({...state}, { StudentList,rawStudentList })
        case ActionTypes.CHANGE_TABLE_ITEM:
            console.log(action.value)
            const newStudentarr = [];
            for(let i = 0;i < state.rawStudentList.length;i++){
                if( state.rawStudentList[i].mid == action.value || action.value == 0){
                    newStudentarr.push(state.rawStudentList[i]);
                }
            }
            const newState = {...state};
            newState.StudentList = newStudentarr;
            return newState
        default:
            return state;
        }
}