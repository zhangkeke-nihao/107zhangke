/* eslint-disable */
import * as ActionTypes from '../const/ActionType';
export const CLICK_UP = 'CLICK_UP';


export function updateGameNum(newarr) {
  return {
    type: ActionTypes.UPDATE_GAME_NUM,
    newarr
  };
}

export function changestatus(status) {
  return {
    type: ActionTypes.CHANGE_STATUS,
    status
  };
}

export function restartGameNum(num) {
  return {
    type: ActionTypes.RESTART_GAME_NUM,
    num
  };
}

export function moveup(num) {
  return {
    type: ActionTypes.CLICK_MOVE_UP,
    num
  };
}

export function movedown(num) {
  return {
    type: ActionTypes.CLICK_MOVE_DOWN,
    num
  };
}


export function moveleft(num) {
  return {
    type: ActionTypes.CLICK_MOVE_LEFT,
    num
  };
}


export function moveright(num) {
  return {
    type: ActionTypes.CLICK_MOVE_RIGHT,
    num
  };
}

