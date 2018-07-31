import { combineReducers } from 'redux'
import userMessage from '../reducers/userMessage'
import tableMessage from '../reducers/tableMessage'
import tableColums from '../reducers/tableColums'

export default combineReducers({
  userMessage,
  tableMessage,
  tableColums
});



