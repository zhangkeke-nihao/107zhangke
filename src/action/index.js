import { ADD_LIST,CHANGE_STATUS,SET_TO_TOP } from '../const/ActionType'

export function addDailog(title,descript,time ){
    return {
        type: ADD_LIST,
        title,
        descript,
        time,
    }
}

export function changeStatus( showDialog ){
    return {
        type: CHANGE_STATUS,
        showDialog,
    }
}

export function SetToTop(){
    return {
        type: SET_TO_TOP,
        // icon,
        // title,
        // descript,
        // time,
    }
}