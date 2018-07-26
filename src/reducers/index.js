import { combineReducers } from 'redux'
import data from '../reducers/data'
import dialogStatus from '../reducers/dialog'

export default combineReducers({
  data,
  dialogStatus,
});



