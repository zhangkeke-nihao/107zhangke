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
  equaljude: false,
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
      };
    case ActionTypes.CHANGE_STATUS:{
      return {
        ...state,
        initdispaly: true
      }
    }
    case ActionTypes.CLICK_MOVE_UP: // 上移
      let m = 3;
      const t = 2;
      const upgameGrid = state.gameGrid.slice();
      const newupflag = state.flag.slice();
      let scoreup = state.score;
      let scoreAddup = state.scoreAdd;
      let jude = state.equaljude;
      let ismove = state.isMoved;
      for(m;m > 0;m--) {
        for (let j = 0; j < 4; j++) {
          for (let i = 0; i < 3; i++) {
            //上一行=0，下一行！=0，下一行的数字移动到上一行，同时下一行置为0
            if (upgameGrid[i][j] == 0 && upgameGrid[i + 1][j] !== 0) { 
              upgameGrid[i][j] = upgameGrid[i + 1][j];
              upgameGrid[i + 1][j] = 0;
            }
            // 相邻行都不为0且相等，上一行等于两行的和，下一行置为0
            else if (upgameGrid[i][j] !== 0 && upgameGrid[i][j] == upgameGrid[i + 1][j]) {
              if(jude == false){
                upgameGrid[i][j] = upgameGrid[i][j] + upgameGrid[i + 1][j];
                upgameGrid[i + 1][j] = 0;
                newupflag[i + 1][j] = 1;
                jude = true;
              }else {
                upgameGrid[i][j] = upgameGrid[i][j];
                jude = false
              }
              scoreAddup = upgameGrid[i][j];
              scoreup += scoreAddup;
            }
          }

        }
      }
      
      // // 两行都不为0且相等，且再上一行是这两行的二倍 *********
      // for (let i = 1; i < 3; i++) {
      //   for (let j = 0; j < 3; j++) {
      //     if (upgameGrid[i][j] !== 0 && upgameGrid[i][j] == upgameGrid[i + 1][j] && upgameGrid[i - 1][j] == t * upgameGrid[i][j] ) {
      //       upgameGrid[i-1][j] = upgameGrid[i-1][j];
      //     }
      //   }
      // }



      for (let i = 0; i < 3; i++) {
        for( let a = 0;a < 2; a++){
          for (let j = 0; j < 4; j++) {
            if (newupflag[i + 1][j] == 1) {
              newupflag[i][j] = 1;
              newupflag[i + 1][j] = 0;
            }
          }
        }
      }
      return {
        ...state,
        gameGrid: upgameGrid,
        flag: newupflag,
        equaljude: jude,
        score: scoreup,
        scoreAdd: scoreAddup,
        isMoved: false
      };

      case ActionTypes.CLICK_MOVE_DOWN: // 下移
        let o = 3;
        const t1 = 2;
        const downgameGrid = state.gameGrid.slice();
        const newdownflag = state.flag.slice();
        let juded = state.equaljude;
        let scoredown = state.score;
        let scoreAdddown = state.scoreAdd;
        for ( o; o > 0; o--) {
          for (let j = 0; j < 4; j++) {
            for (let i = 3; i > 0; i--) {
              //下一行=0，上一行！=0
              if (downgameGrid[i][j] == 0 && downgameGrid[i - 1][j] !== 0) {
                downgameGrid[i][j] = downgameGrid[i - 1][j];
                downgameGrid[i - 1][j] = 0;
                // state.initdispaly = true;
              }
         
            }
          }
        }
        for (let j = 0; j < 4; j++) {
          for (let i = 3; i > 0; i--) {
            // 相邻行都不为0且相等
            if (downgameGrid[i][j] != 0 && downgameGrid[i][j] == downgameGrid[i - 1][j]) {
              if(juded == false){
                downgameGrid[i][j] = downgameGrid[i][j] + downgameGrid[i - 1][j];
                downgameGrid[i - 1][j] = 0;
                newdownflag[i][j] = 1;
                juded = true;
              }else {
                downgameGrid[i-1][j] =  downgameGrid[i-1][j];
                juded = false
              }
              scoreAdddown = downgameGrid[i][j];
              scoredown += scoreAdddown;
            }
          }
        }
        for (let j = 0; j < 4; j++) {
          for( let b = 0;b < 2; b++){
            for (let i = 3; i > 0; i--) {
              if (newdownflag[i - 1][j] == 1) {
                newdownflag[i][j] = 1;
                newdownflag[i - 1][j] = 0;
              }
            }
          }
        }
        return {
          ...state,
          gameGrid: downgameGrid,
          flag: newdownflag,
          score: scoredown,
          scoreAdd: scoreAdddown
      };
      case ActionTypes.CLICK_MOVE_LEFT: // 左移
        let n = action.num;
        const t3 = 2;
        const leftgameGrid = state.gameGrid.slice();
        const newleftflag = state.flag.slice();
        let judel = state.equaljude;
        let scoreleft = state.score;
        let scoreAddleft = state.scoreAdd;
        for (n; n > 0; n--) {
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
              //前一列=0，后一列！=0
              if (leftgameGrid[i][j] == 0 && leftgameGrid[i][j+1] != 0) {
                leftgameGrid[i][j] = leftgameGrid[i][j+1];
                leftgameGrid[i][j+1] = 0;
              }
              // 相邻列都不为0且相等
              else if (leftgameGrid[i][j] != 0 && leftgameGrid[i][j] == leftgameGrid[i][j + 1]) {
                if(judel == false){
                  leftgameGrid[i][j] = leftgameGrid[i][j] + leftgameGrid[i][j + 1];
                  leftgameGrid[i][j + 1] = 0;
                  newleftflag[i][j] = 1;
                  judel = true;
                }else{
                  leftgameGrid[i][j] = leftgameGrid[i][j];
                  judel = false;
                }
                scoreAddleft = leftgameGrid[i][j];
                scoreleft += scoreAddleft;
              }
              // else if (leftgameGrid[i][j] != 0 && leftgameGrid[i][j] == leftgameGrid[i][j + 1] && leftgameGrid[i][j-1] == t3 * leftgameGrid[i][j]) {
              //   leftgameGrid[i][j - 1] = leftgameGrid[i][j - 1];
              // }
            }
          }
        }
        for (let i = 0; i < 4; i++) {
          for( let c = 0; c < 2; c++){
            for (let j = 0; j < 3; j++) {
              if (newleftflag[i][j + 1] == 1) {
                newleftflag[i][j] = 1;
                newleftflag[i][j + 1] = 0;
              }
            }
          }
        }
        return {
          ...state,
          gameGrid: leftgameGrid,
          flag: newleftflag,
          score: scoreleft,
          scoreAdd: scoreAddleft
        };
      case ActionTypes.CLICK_MOVE_RIGHT: // 右移
        let p = action.num;
        const t4 = 2;
        const rightgameGrid = state.gameGrid.slice();
        const newrightflag = state.flag.slice();
        let juder = state.equaljude;
        let scoreright = state.score;
        let scoreAddright = state.scoreAdd;
        for (p = 0; p < 3; p++) {
          for (let i = 0; i < 4; i++) {
            for (let j = 3; j > 0; j--) {
              //后一列=0，前一列！=0
              if (rightgameGrid[i][j] == 0 && rightgameGrid[i][j-1] != 0) {
                rightgameGrid[i][j] = rightgameGrid[i][j-1];
                rightgameGrid[i][j-1] = 0;
                // state.initdispaly = true;
              }
              // 相邻列都不为0且相等
              else if (rightgameGrid[i][j] != 0 && rightgameGrid[i][j] == rightgameGrid[i][j-1]) {
                if(juder == false){
                  rightgameGrid[i][j] = rightgameGrid[i][j] + rightgameGrid[i][j-1];
                  rightgameGrid[i][j-1] = 0;
                  newrightflag[i][j] = 1;
                  juder = true;
                }else {
                  rightgameGrid[i][j] = rightgameGrid[i][j];
                  juder = false;
                }
                scoreAddright = rightgameGrid[i][j];
                scoreright += scoreAddright;
              }
              // else if (rightgameGrid[i][j] != 0 && rightgameGrid[i][j - 1] == rightgameGrid[i][j] && rightgameGrid[i][j + 1] == t4 * rightgameGrid[i][j]) {
              //   rightgameGrid[i][j + 1] = rightgameGrid[i][j + 1];
              // }
            }
          }
        }
        // for (let j = 1; j < 4; j++) {
        //   for( let d = 0; d < 2; d++){
        //     for (let i = 0; i < 3; i++) {
        //       if (newrightflag[i][j - 1] == 1) {
        //         newrightflag[i][j] = 1;
        //         newrightflag[i][j - 1] = 0;
        //       }
        //     }
        //   }
        // }
        return {
          ...state,
          gameGrid: rightgameGrid,
          flag: newrightflag,
          score: scoreright,
          scoreAdd: scoreAddright
        };


    default:
      return state;
  }
}
