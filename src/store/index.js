import { DIALOG_SHOW_STATES } from '../const'

const icon1 = require('../image/bg1.jpg')
const icon2 = require('../image/bg2.jpg')
const icon3 = require('../image/bg3.jpg')


export const initState = {
    message:[
        {
          icon: icon1,
          title: '小年糕',
          descript: 'Hello 小年糕',
          time: '2018-7-21',
          isToTop: false,
        },
        {
          icon: icon2,
          title: '小板凳',
          descript: 'Hello 小板凳',
          time: '2018-7-22',
          isToTop: false,
        },
        {
          icon: icon3,
          title: '小豆包',
          descript: 'Hello 小豆包',
          time: '2018-7-23',
          isToTop: false,
        },
      ],
      showDialog: DIALOG_SHOW_STATES.HIDE,
      onIndex: null
}