import { combineReducers } from 'redux'
import userMessage from '../reducers/userMessage'
import tableMessage from '../reducers/tableMessage'

export default combineReducers({
  userMessage,
  tableMessage,
});



