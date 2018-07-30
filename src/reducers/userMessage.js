import * as ActionTypes from '../const/ActionType'

const initState = {
    fixedMsg : {
        num: '学员编号',
        pay: '历史付费额',
        class: '在学课程',
        learningday: '累计学习天数',
        statrtime: '入学时间',
        lastlogintime: '最后登录时间',
    },
    personalMsg : {
        num: 'MID330900002',
        pay: '987',
        class: '摄影课 绘画课',
        learningday: '876天',
        statrtime: '2018-03-30',
        lastlogintime: '2018-03-30',
    },
}

export default function userMessage(state = initState,action){
    switch(action.type){
       
        default:
            return state;
    }
}