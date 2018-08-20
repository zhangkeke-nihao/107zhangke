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

export function gamedata(state = initState, action) {
  switch (action.type) {
    case ActionTypes.RESTART_GAME_NUM: // 重新开始
      return {
        ...state,
        gameGrid: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        initdispaly: false,
        score: 0,
        isMoved: true,
        scoreAdd: 0,
        bestScoreAdd: 0
      };
    case ActionTypes.CHANGE_STATUS:{   // 更新初始状态，RANDOM_NUMBER
      return {
        ...state,
        initdispaly: true,
        isGameOver: false
      }
    }
    case ActionTypes.IS_MOVE:{  // 判断是否有移动
      return {
        ...state,
        isMoved: false
      }
    }
    case ActionTypes.CLICK_MOVE_UP: // 上移
      let upgameGrid = state.gameGrid.slice();
      const newupflag = [ 
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ];
      let isUpMoved = state.isMoved;
      let scoreup = state.score;
      let bestscoreup = state.bestScore;
      let scoreAddup = 0;
      let bestscoreAddup = 0;
      for (let m = 3;m > 0;m--) {
        for (let j = 0; j < 4; j++) {
          for (let i = 0; i < 3; i++) {
            if (upgameGrid[i][j] == 0 && upgameGrid[i + 1][j] != 0) { 
              upgameGrid[i][j] = upgameGrid[i + 1][j];
              upgameGrid[i + 1][j] = 0;
              isUpMoved = true;
            }
          }
        }
      }
      for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 3; i++) {
          if (upgameGrid[i][j] != 0 && upgameGrid[i][j] == upgameGrid[i + 1][j]) {
            upgameGrid[i][j] *= 2; 
            upgameGrid[i + 1][j] = 0;
            scoreAddup = scoreAddup + upgameGrid[i][j];
            bestscoreAddup = bestscoreAddup + upgameGrid[i][j];
            scoreup = scoreup + upgameGrid[i][j]; 
            if(bestscoreup < scoreup){
              bestscoreup = scoreup;
            }
            isUpMoved = true;
            newupflag[i][j] = 1; 
          }
        }
      }
      for (let j = 0; j < 4; j++) {
        for (let n = 0; n < 2; n++) {
          for (let i = 0; i < 3; i++) {
              if (upgameGrid[i][j] == 0 && upgameGrid[i + 1][j] != 0) {
                upgameGrid[i][j] = upgameGrid[i + 1][j];
                upgameGrid[i + 1][j] = 0;
                if (newupflag[i + 1][j] == 1) { // 数值的样式标志需要跟着上移
                  newupflag[i][j] = newupflag[i + 1][j];
                  newupflag[i + 1][j] = 0;
                }
              }
          }
        }
      }
      return {
        ...state,
        gameGrid: upgameGrid,
        isMoved:isUpMoved,
        flag: newupflag,
        score: scoreup,
        scoreAdd: scoreAddup,
        bestScore: bestscoreup,
        bestScoreAdd: bestscoreAddup
      };
      case ActionTypes.CLICK_MOVE_DOWN: // 下移
        const downgameGrid = state.gameGrid.slice();
        const newdownflag = [ 
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ];
        let isdownMove = state.isMoved;
        let scoredown = state.score;
        let bestscoredown = state.bestScore;
        let scoreAdddown = 0;
        let bestscoreAdddown = 0;
        for (let n = 3;n > 0;n--) {
          for (let i = 3; i > 0; i--) {
            for (let j = 0; j < 4; j++) {
              if (downgameGrid[i][j] == 0 && downgameGrid[i - 1][j] != 0) {
                downgameGrid[i][j] = downgameGrid[i - 1][j];
                downgameGrid[i - 1][j] = 0;
                isdownMove = true;
              }
            }
          }
        }
        for (let i = 3; i > 0; i--) {
          for (let j = 0; j < 4; j++) {
            if (downgameGrid[i][j] != 0 && downgameGrid[i][j] == downgameGrid[i - 1][j]) {
              downgameGrid[i][j] *= 2;
              downgameGrid[i - 1][j] = 0;
              isdownMove = true;
              newdownflag[i][j] = 1;
              scoreAdddown = scoreAdddown + downgameGrid[i][j];
              bestscoreAdddown = bestscoreAdddown + downgameGrid[i][j];
              scoredown = scoredown + downgameGrid[i][j];
              if(bestscoredown < scoredown){
                bestscoredown = scoredown;
              }
            }
          }
        }

        for (let i = 3; i > 0; i--) {
          for (let n = 0; n < 2; n++) {
            for (let j = 0; j < 4; j++) {
              if (downgameGrid[i][j] == 0 && downgameGrid[i - 1][j] != 0) {
                downgameGrid[i][j] = downgameGrid[i - 1][j];
                downgameGrid[i - 1][j] = 0;
                if (newdownflag[i - 1][j] == 1) {
                  newdownflag[i][j] = newdownflag[i - 1][j];
                  newdownflag[i - 1][j] = 0;
                }
              }
            }
          }
        }
        return {
          ...state,
          gameGrid: downgameGrid,
          flag: newdownflag,
          isMoved: isdownMove,
          score: scoredown,
          scoreAdd: scoreAdddown,
          bestScore: bestscoredown,
          bestScoreAdd: bestscoreAdddown
      };
      case ActionTypes.CLICK_MOVE_LEFT: // 左移
        let leftgameGrid = state.gameGrid.slice();
        let newleftflag = [ 
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ];
        let isleftMove = state.isMoved;
        let scoreleft = state.score;
        let bestscoreleft = state.bestScore;
        let scoreAddleft = 0;
        let bestscoreAddleft = 0;
        for ( let o = 3;o > 0;o--) {
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
              if (leftgameGrid[i][j] == 0 && leftgameGrid[i][j + 1] != 0) {
                leftgameGrid[i][j] = leftgameGrid[i][j + 1];
                leftgameGrid[i][j + 1] = 0;
                isleftMove = true;
              }
            }
          }
        }

        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 3; j++) {
            if (leftgameGrid[i][j] != 0 && leftgameGrid[i][j] == leftgameGrid[i][j + 1]) {
              leftgameGrid[i][j] *= 2;
              leftgameGrid[i][j + 1] = 0;
              isleftMove = true;
              newleftflag[i][j] = 1;
              scoreAddleft = scoreAddleft + leftgameGrid[i][j];
              bestscoreAddleft = bestscoreAddleft + leftgameGrid[i][j];
              scoreleft = scoreleft + leftgameGrid[i][j];
              if(bestscoreleft < scoreleft){
                bestscoreleft = scoreleft
              }
            }
          }
        }

        for (let i = 0; i < 4; i++) {
          for (let n = 0; n < 2; n++) {
            for (let j = 0; j < 3; j++) {
              if (leftgameGrid[i][j] == 0 && leftgameGrid[i][j + 1] != 0) {
                leftgameGrid[i][j] = leftgameGrid[i][j + 1];
                leftgameGrid[i][j + 1] = 0;
                if (newleftflag[i][j + 1] == 1) {
                  newleftflag[i][j] = newleftflag[i][j + 1];
                  newleftflag[i][j + 1] = 0;
                }
              }
            }
          }
        }
        return {
          ...state,
          gameGrid: leftgameGrid,
          isMoved: isleftMove,
          flag: newleftflag,
          score: scoreleft,
          scoreAdd: scoreAddleft,
          bestScore: bestscoreleft,
          bestScoreAdd: bestscoreAddleft
        };
      case ActionTypes.CLICK_MOVE_RIGHT: // 右移
        const rightgameGrid = state.gameGrid.slice();
        const newrightflag = [ 
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ];
        let isrightMove = state.isMoved;
        let scoreright = state.score;
        let bestscoreright = state.bestScore;
        let scoreAddright = 0;
        let bestscoreAddright = 0;
        for (let p = 3;p > 0;p--) {
          for (let j = 3; j > 0; j--) {
            for (let i = 0; i < 4; i++) {
              if (rightgameGrid[i][j] == 0 && rightgameGrid[i][j - 1] != 0) {
                rightgameGrid[i][j] = rightgameGrid[i][j - 1];
                rightgameGrid[i][j - 1] = 0;
                isrightMove = true;
              }
            }
          }
        }

        for (let j = 3; j > 0; j--) {
          for (let i = 0; i < 4; i++) {
            if (rightgameGrid[i][j] != 0 && rightgameGrid[i][j] == rightgameGrid[i][j - 1]) {
              rightgameGrid[i][j] *= 2;
              rightgameGrid[i][j - 1] = 0;
              isrightMove = true;
              scoreAddright = scoreAddright + rightgameGrid[i][j];
              bestscoreAddright = bestscoreAddright + rightgameGrid[i][j];
              newrightflag[i][j] = 1;
              scoreright = scoreright + rightgameGrid[i][j];
              if(bestscoreright < scoreright){
                bestscoreright = scoreright;
              }
            }
          }
        }

        for (let j = 3; j > 0; j--) {
          for (let n = 0; n < 2; n++) {
            for (let i = 0; i < 4; i++) {
              if (rightgameGrid[i][j] == 0 && rightgameGrid[i][j - 1] != 0) {
                rightgameGrid[i][j] = rightgameGrid[i][j - 1];
                rightgameGrid[i][j - 1] = 0;
                if (newrightflag[i][j - 1] == 1) {
                  newrightflag[i][j] = newrightflag[i][j - 1];
                  newrightflag[i][j - 1] = 0;
                }
              }
            }
          }
        }
        return {
          ...state,
          gameGrid: rightgameGrid,
          isMoved: isrightMove,
          flag: newrightflag,
          score: scoreright,
          bestScore: bestscoreright,
          scoreAdd: scoreAddright,
          bestScoreAdd: bestscoreAddright
        };
    default:
      return state;
  }
}
