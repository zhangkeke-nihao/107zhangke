/* eslint-disable */
import * as ActionTypes from '../const/ActionType';

const initState = {
  gameGrid: [ // 数字矩阵
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  flag: [ // 数字矩阵
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  initdispaly: false,
  isMoved: true,
  score: 0,
  scoreAdd: 0,
  bestScore: 0,
  bestScoreAdd: 0
};
initrandomNum(initState);
function initrandomNum (state){ // 初始函数，取得随机位置、随机值
   // 判断是否赢得游戏
  for (let i = 0; i < 4; i++) {  
    for (let j = 0; j < 4; j++) {
      if (state.gameGrid[i][j] == 2048) {
        alert("You win the Game2048!");
        break;
      }
    }
  }
  // 判断全满且没有相同可以合并时，游戏结束
  let xCount = 0;
  let yCount = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if ((state.gameGrid[i][j] != 0) && (state.gameGrid[i][j + 1] != 0) && (state.gameGrid[i][j] != state.gameGrid[i][j + 1])) {
        xCount++;
      }
    }
  }
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 3; i++) {
      if ((state.gameGrid[i][j] != 0) && (state.gameGrid[i + 1][j] != 0) && (state.gameGrid[i][j] != state.gameGrid[i + 1][j])) {
        yCount++;
      }
    }
  }
  if (xCount == 12 && yCount == 12) {  // 判断全满且没有相同可以合并时，游戏结束
    alert("Game Over! Please click the \"Restart\" to restart the Game2048!")
  }
  // 先判断是否有滑动
  if(state.isMoved === true) { 
    let randnum = Math.ceil(Math.random() * 4); // 生成随机数  [1,2,3,4]
    if (randnum !== 4) {
      randnum = 2;
    }
    const x = Math.floor(Math.random() * 4); // 生成随机位置 [n,1,2,3]
    const y = Math.floor(Math.random() * 4); // 生成随机位置 [n,1,2,3]
    if (state.gameGrid[x][y] !== 0) {
      initrandomNum(state);
    } else {
      state.gameGrid[x][y] = randnum;
      state.flag[x][y] = 2;
    }
    if (state.initdispaly === false) {
      state.initdispaly = true;
      initrandomNum(state);
    }else {
      state.isMoved = false;
    } 
  }
  
}
export function gamedata(state = initState, action) {
  switch (action.type) {
    case ActionTypes.RESTART_GAME_NUM: // 重新开始
      state.gameGrid = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ];
      state.initdispaly = false;
      state.isMoved = true;
      state.score = 0;
      state.scoreAdd = 0;
      state.bestScoreAdd = 0; 
      initrandomNum(state);
      return {
        ...state,
      };

    case ActionTypes.CLICK_MOVE_UP: // 上移
      const newupflag = [ 
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ];
      let scoreAddup = 0;
      let bestscoreAddup = 0;

      for (let m = 3;m > 0;m--) {
        for (let j = 0; j < 4; j++) {
          for (let i = 0; i < 3; i++) {
            if (state.gameGrid[i][j] == 0 && state.gameGrid[i + 1][j] != 0) { 
              state.gameGrid[i][j] = state.gameGrid[i + 1][j];
              state.gameGrid[i + 1][j] = 0;
              state.isMoved = true;
            }
          }
        }
      }
      for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 3; i++) {
          if (state.gameGrid[i][j] != 0 && state.gameGrid[i][j] == state.gameGrid[i + 1][j]) {
            state.gameGrid[i][j] *= 2; 
            state.gameGrid[i + 1][j] = 0;
            scoreAddup = scoreAddup + state.gameGrid[i][j];
            bestscoreAddup = bestscoreAddup + state.gameGrid[i][j];
            state.score = state.score + state.gameGrid[i][j]; 
            if(state.bestScore < state.score){
              state.bestScore = state.score;
            }
            state.isMoved = true;
            newupflag[i][j] = 1; 
          }
        }
      }
      for (let j = 0; j < 4; j++) {
        for (let n = 0; n < 2; n++) {
          for (let i = 0; i < 3; i++) {
              if (state.gameGrid[i][j] == 0 && state.gameGrid[i + 1][j] != 0) {
                state.gameGrid[i][j] = state.gameGrid[i + 1][j];
                state.gameGrid[i + 1][j] = 0;
                state.isMoved = true;
                if (newupflag[i + 1][j] == 1) {
                  newupflag[i][j] = newupflag[i + 1][j];
                  newupflag[i + 1][j] = 0;
                }
              }
          }
        }
      }
      initrandomNum(state);
      return {
        ...state,
        flag: newupflag,
        scoreAdd: scoreAddup,
        bestScoreAdd: bestscoreAddup
      };
      case ActionTypes.CLICK_MOVE_DOWN: // 下移
        const newdownflag = [ 
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ];
        let scoreAdddown = 0;
        let bestscoreAdddown = 0;

        for (let n = 3;n > 0;n--) {
          for (let i = 3; i > 0; i--) {
            for (let j = 0; j < 4; j++) {
              if (state.gameGrid[i][j] == 0 && state.gameGrid[i - 1][j] != 0) {
                state.gameGrid[i][j] = state.gameGrid[i - 1][j];
                state.gameGrid[i - 1][j] = 0;
                state.isMoved = true;
              }
            }
          }
        }
        for (let i = 3; i > 0; i--) {
          for (let j = 0; j < 4; j++) {
            if (state.gameGrid[i][j] != 0 && state.gameGrid[i][j] == state.gameGrid[i - 1][j]) {
              state.gameGrid[i][j] *= 2;
              state.gameGrid[i - 1][j] = 0;
              state.isMoved = true;
              newdownflag[i][j] = 1;
              scoreAdddown = scoreAdddown + state.gameGrid[i][j];
              bestscoreAdddown = bestscoreAdddown + state.gameGrid[i][j];
              state.score = state.score + state.gameGrid[i][j];
              if(state.bestScore < state.score){
                state.bestScore = state.score;
              }
            }
          }
        }

        for (let i = 3; i > 0; i--) {
          for (let n = 0; n < 2; n++) {
            for (let j = 0; j < 4; j++) {
              if (state.gameGrid[i][j] == 0 && state.gameGrid[i - 1][j] != 0) {
                state.gameGrid[i][j] = state.gameGrid[i - 1][j];
                state.gameGrid[i - 1][j] = 0;
                state.isMoved = true;
                if (newdownflag[i - 1][j] == 1) {
                  newdownflag[i][j] = newdownflag[i - 1][j];
                  newdownflag[i - 1][j] = 0;
                }
              }
            }
          }
        }
        initrandomNum(state);
        return {
          ...state,
          scoreAdd: scoreAdddown,
          bestScoreAdd: bestscoreAdddown
      };
      case ActionTypes.CLICK_MOVE_LEFT: // 左移
        let newleftflag = [ 
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ];
        let scoreAddleft = 0;
        let bestscoreAddleft = 0;
        for ( let o = 3;o > 0;o--) {
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
              if (state.gameGrid[i][j] == 0 && state.gameGrid[i][j + 1] != 0) {
                state.gameGrid[i][j] = state.gameGrid[i][j + 1];
                state.gameGrid[i][j + 1] = 0;
                state.isMoved = true;
              }
            }
          }
        }

        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 3; j++) {
            if (state.gameGrid[i][j] != 0 && state.gameGrid[i][j] == state.gameGrid[i][j + 1]) {
              state.gameGrid[i][j] *= 2;
              state.gameGrid[i][j + 1] = 0;
              state.isMoved = true;
              newleftflag[i][j] = 1;
              scoreAddleft = scoreAddleft + state.gameGrid[i][j];
              bestscoreAddleft = bestscoreAddleft + state.gameGrid[i][j];
              state.score = state.score + state.gameGrid[i][j];
              if(state.bestScore < state.score){
                state.bestScore = state.score
              }
            }
          }
        }

        for (let i = 0; i < 4; i++) {
          for (let n = 0; n < 2; n++) {
            for (let j = 0; j < 3; j++) {
              if (state.gameGrid[i][j] == 0 && state.gameGrid[i][j + 1] != 0) {
                state.gameGrid[i][j] = state.gameGrid[i][j + 1];
                state.gameGrid[i][j + 1] = 0;
                state.isMoved = true;
                if (newleftflag[i][j + 1] == 1) {
                  newleftflag[i][j] = newleftflag[i][j + 1];
                  newleftflag[i][j + 1] = 0;
                }
              }
            }
          }
        }
        initrandomNum(state);
        return {
          ...state,
          scoreAdd: scoreAddleft,
          bestScoreAdd: bestscoreAddleft
        };
      case ActionTypes.CLICK_MOVE_RIGHT: // 右移
        const newrightflag = [ 
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ];
        let scoreAddright = 0;
        let bestscoreAddright = 0;

        for (let p = 3;p > 0;p--) {
          for (let j = 3; j > 0; j--) {
            for (let i = 0; i < 4; i++) {
              if ( state.gameGrid[i][j] == 0 &&  state.gameGrid[i][j - 1] != 0) {
                 state.gameGrid[i][j] =  state.gameGrid[i][j - 1];
                 state.gameGrid[i][j - 1] = 0;
                 state.isMoved = true;
              }
            }
          }
        }

        for (let j = 3; j > 0; j--) {
          for (let i = 0; i < 4; i++) {
            if ( state.gameGrid[i][j] != 0 &&  state.gameGrid[i][j] ==  state.gameGrid[i][j - 1]) {
              state.gameGrid[i][j] *= 2;
              state.gameGrid[i][j - 1] = 0;
              state.isMoved = true;
              scoreAddright = scoreAddright +  state.gameGrid[i][j];
              bestscoreAddright = bestscoreAddright +  state.gameGrid[i][j];
              newrightflag[i][j] = 1;
              state.score = state.score +  state.gameGrid[i][j];
              if(state.bestScore < state.score){
                state.bestScore = state.score;
              }
            }
          }
        }

        for (let j = 3; j > 0; j--) {
          for (let n = 0; n < 2; n++) {
            for (let i = 0; i < 4; i++) {
              if ( state.gameGrid[i][j] == 0 &&  state.gameGrid[i][j - 1] != 0) {
                state.gameGrid[i][j] =  state.gameGrid[i][j - 1];
                state.gameGrid[i][j - 1] = 0;
                state.isMoved = true;
                if (newrightflag[i][j - 1] == 1) {
                  newrightflag[i][j] = newrightflag[i][j - 1];
                  newrightflag[i][j - 1] = 0;
                }
              }
            }
          }
        }
        initrandomNum(state);
        return {
          ...state,
          flag: newrightflag,
          scoreAdd: scoreAddright,
          bestScoreAdd: bestscoreAddright
        };
    default:
      return state;
  }
}
