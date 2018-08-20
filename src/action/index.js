/* eslint-disable */
import * as ActionTypes from '../const/ActionType';
export const CLICK_UP = 'CLICK_UP';

//改变初始状态
export function changestatus(status) {
  return {
    type: ActionTypes.CHANGE_STATUS,
    status
  };
}

// 是否有滑动
export function ismove() {
  return {
    type: ActionTypes.IS_MOVE,
  };
}
// 游戏是否结束
export function isgameover() {
  return {
    type: ActionTypes.IS_GAMEOVER,
  };
}
// 重新开始
export function restartGameNum(num) {
  return {
    type: ActionTypes.RESTART_GAME_NUM,
    num
  };
}
// 上移
export function moveup(num) {
  return {
    type: ActionTypes.CLICK_MOVE_UP,
    num
  };
}
// 下移
export function movedown(num) {
  return {
    type: ActionTypes.CLICK_MOVE_DOWN,
    num
  };
}
// 左移
export function moveleft(num) {
  return {
    type: ActionTypes.CLICK_MOVE_LEFT,
    num
  };
}
// 右移
export function moveright(num) {
  return {
    type: ActionTypes.CLICK_MOVE_RIGHT,
    num
  };
}

