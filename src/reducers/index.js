import { combineReducers } from 'redux'
import userMessage from './userMessage'
import classesTable from '../reducers/classesTable'
import studentTables from '../reducers/studentTable'
import satisified from './satisified'
import entities from '../reducers/entities'

export default combineReducers({
  entities,
  studentTables,
  classesTable,
  satisified,
  userMessage,
  
});



