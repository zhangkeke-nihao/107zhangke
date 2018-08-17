import { combineReducers } from 'redux';
import { score } from './score';
import { gamedata } from './gamedata';

export default combineReducers({
  score,
  gamedata
});

