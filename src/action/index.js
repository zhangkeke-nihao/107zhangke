import { ADD_LIST,CHANGE_STATUS,CONTROL_ITEM,ON_INDEX } from '../const/ActionType'

//添加新消息
export function addDailog( title,descript,time ){
    return {
        type: ADD_LIST,
        title,
        descript,
        time,
    }
}

//获取index
export function onIndex( index ){
    return {
        type: ON_INDEX,
        index,
    }
}

//操作列表项（置顶，删除）
export function controlItem( message ){
    return {
        type: CONTROL_ITEM,
        message,
    }
}

//改变状态
export function changeStatus( showDialog,index ){
    return {
        type: CHANGE_STATUS,
        showDialog,
        index,
    }
}