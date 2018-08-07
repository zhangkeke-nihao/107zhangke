import { combineReducers } from 'redux'
import homeworkdata from './homeworkdata'
import status from './status'
import entities from './entities'

export default combineReducers({
  homeworkdata,
  status,
  entities
});



