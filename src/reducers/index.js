import { DIALOG_SHOW_STATES } from '../const'
import { ADD_LIST,CHANGE_STATUS } from '../const/ActionType';
const icon1 = require('../image/bg1.jpg')
const icon2 = require('../image/bg2.jpg')
const icon3 = require('../image/bg3.jpg')


const initialState = {
    message:[
        {
          icon: icon1,
          title: '小年糕',
          descript: 'Hello 小年糕',
          time: '2018-7-21'
        },
        {
          icon: icon2,
          title: '小板凳',
          descript: 'Hello 小板凳',
          time: '2018-7-22'
        },
        {
          icon: icon3,
          title: '小豆包',
          descript: 'Hello 小豆包',
          time: '2018-7-23'
        },
      ],
      showDialog: DIALOG_SHOW_STATES.HIDE,
      onIndex: null
}
export default function todoMsgList(state = initialState,action){
  console.log('reducer running',action);
  switch(action.type){
    case ADD_LIST:{          //添加新消息
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
    case CHANGE_STATUS:{
      const newState = { ...state };
      newState.showDialog = DIALOG_SHOW_STATES.HIDE;
      return newState;
    }
  
    default:
        return initialState;
  }
}