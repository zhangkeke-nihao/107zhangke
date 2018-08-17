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
  equaljude: 0,
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
      let upgameGrid = state.gameGrid.slice();
      const newupflag = state.flag.slice();
      let scoreup = state.score;
      let scoreAddup = state.scoreAdd;
      let jude = state.equaljude;
      for(let m = 3;m > 0;m--){
        for (let j = 0; j < 4; j++) {
          for (let i = 0; i < 3; i++) {
            //上一行=0，下一行！=0，下一行的数字移动到上一行，同时下一行置为0
            if (upgameGrid[i][j] == 0 && upgameGrid[i + 1][j] !== 0) { 
              upgameGrid[i][j] = upgameGrid[i + 1][j];
              upgameGrid[i + 1][j] = 0;
            }
          }
        }
      }
      console.log(jude);
      upgameGrid[0].map((i,idx) => {
        if(jude == 0){
          if(upgameGrid[0][idx] !== 0 && upgameGrid[0][idx] == upgameGrid[1][idx]){
            upgameGrid[0][idx] = 2 * upgameGrid[0][idx];
            upgameGrid[1][idx] = 0;
            jude = 1;
          }
        }
        if(jude == 0){
          if(upgameGrid[0][idx] !== 0 && upgameGrid[0][idx] == upgameGrid[1][idx] && upgameGrid[2][idx] !== 0){
            upgameGrid[0][idx] = 2 * upgameGrid[0][idx];
            upgameGrid[1][idx] =  upgameGrid[2][idx];
            jude = 1;
          }
        }
        if(jude == 0){
          if(upgameGrid[0][idx] !== 0 && upgameGrid[0][idx] == upgameGrid[1][idx] && upgameGrid[3][idx] !== 0){
            upgameGrid[0][idx] = 2 * upgameGrid[0][idx];
            upgameGrid[1][idx] =  upgameGrid[3][idx];
            jude = 1;
          }
        }
      })
      console.log(jude);
      upgameGrid[2].map((i,idx) => {
        if(jude == 0){
          if(upgameGrid[2][idx] !== 0 && upgameGrid[2][idx] == upgameGrid[3][idx]){
            upgameGrid[2][idx] = 2 * upgameGrid[2][idx];
            upgameGrid[3][idx] = 0;
            jude = 1;
          }
        }
        
      })
      console.log(jude);
      upgameGrid[1].map((i,idx) => {
        if(jude == 0){    // ***********
          if(upgameGrid[1][idx] !== 0 && upgameGrid[1][idx] == upgameGrid[2][idx]){
            upgameGrid[1][idx] = 2 * upgameGrid[1][idx];
            upgameGrid[2][idx] = 0;
            jude = 1
          }
        }
        if(jude == 0){    // ***********
          if(upgameGrid[1][idx] !== 0 && upgameGrid[1][idx] == upgameGrid[2][idx] && upgameGrid[3][idx] !== 0){
            upgameGrid[1][idx] = 2 * upgameGrid[1][idx];
            upgameGrid[2][idx] = upgameGrid[3][idx];
            jude = 1
          }
        }
        if(upgameGrid[1][idx] !== 0 && upgameGrid[1][idx] == upgameGrid[3][idx] && upgameGrid[2][idx] == 0){
          upgameGrid[1][idx] = 2 * upgameGrid[1][idx];
          upgameGrid[3][idx] = 0;
        }
      })
      console.log(jude);
      return {
        ...state,
        gameGrid: upgameGrid,
        flag: newupflag,
        score: scoreup,
        scoreAdd: scoreAddup
      };

      case ActionTypes.CLICK_MOVE_DOWN: // 下移
        const downgameGrid = state.gameGrid.slice();
        const newdownflag = state.flag.slice();
        let scoredown = state.score;
        let scoreAdddown = state.scoreAdd;
        let juded = state.equaljude;
        for ( let o = 3; o > 0; o--) {
          for (let j = 0; j < 4; j++) {
            for (let i = 3; i > 0; i--) {
              //下一行=0，上一行！=0
              if (downgameGrid[i][j] == 0 && downgameGrid[i - 1][j] !== 0) {
                downgameGrid[i][j] = downgameGrid[i - 1][j];
                downgameGrid[i - 1][j] = 0;
              }
            }
          }
        }
        downgameGrid[3].map((i,idx) => {
          if(juded == 0){
            if(downgameGrid[3][idx] !== 0 && downgameGrid[3][idx] == downgameGrid[2][idx]){
              downgameGrid[3][idx] = 2 * downgameGrid[3][idx];
              downgameGrid[2][idx] = 0;
              jude = 1;
            }
          }
          if(juded == 0){
            if(downgameGrid[3][idx] !== 0 && downgameGrid[3][idx] == downgameGrid[2][idx] && downgameGrid[1][idx] !== 0){
              downgameGrid[3][idx] = 2 * downgameGrid[3][idx];
              downgameGrid[2][idx] =  downgameGrid[1][idx];
              juded = 1;
            }
          }
          if(juded == 0){
            if(downgameGrid[3][idx] !== 0 && downgameGrid[3][idx] == downgameGrid[2][idx] && downgameGrid[0][idx] !== 0){
              downgameGrid[3][idx] = 2 * downgameGrid[3][idx];
              downgameGrid[2][idx] =  downgameGrid[0][idx];
              juded = 1;
            }
          }
        })
        downgameGrid[1].map((i,idx) => {
          if(juded == 0){
            if(downgameGrid[1][idx] !== 0 && downgameGrid[1][idx] == downgameGrid[0][idx]){
              downgameGrid[1][idx] = 2 * downgameGrid[1][idx];
              downgameGrid[0][idx] = 0;
              juded = 1;
            }
          }
          
        })
        downgameGrid[2].map((i,idx) => {
          if(juded == 0){    // ***********
            if(downgameGrid[2][idx] !== 0 && downgameGrid[2][idx] == downgameGrid[1][idx]){
              downgameGrid[2][idx] = 2 * downgameGrid[2][idx];
              downgameGrid[1][idx] = 0;
              juded = 1
            }
          }
          if(juded == 0){    // ***********
            if(downgameGrid[2][idx] !== 0 && downgameGrid[2][idx] == downgameGrid[1][idx] && downgameGrid[0][idx] !== 0){
              downgameGrid[2][idx] = 2 * downgameGrid[2][idx];
              downgameGrid[1][idx] = downgameGrid[0][idx];
              juded = 1
            }
          }
          if(downgameGrid[2][idx] !== 0 && downgameGrid[2][idx] == downgameGrid[0][idx] && downgameGrid[1][idx] == 0){
            downgameGrid[2][idx] = 2 * downgameGrid[2][idx];
            downgameGrid[0][idx] = 0;
          }
        })
       
        return {
          ...state,
          gameGrid: downgameGrid,
          flag: newdownflag,
          score: scoredown,
          scoreAdd: scoreAdddown
      };
      case ActionTypes.CLICK_MOVE_LEFT: // 左移
        let leftgameGrid = state.gameGrid.slice();
        const newleftflag = state.flag.slice();
        let judel = state.equaljude;
        let scoreleft = state.score;
        let scoreAddleft = state.scoreAdd;
        for (let n = 3; n > 0; n--) {
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
              //前一列=0，后一列！=0
              if (leftgameGrid[i][j] == 0 && leftgameGrid[i][j+1] != 0) {
                leftgameGrid[i][j] = leftgameGrid[i][j+1];
                leftgameGrid[i][j+1] = 0;
              }
            }
          }
        }
        // leftgameGrid[0].map((i,idx) => {
        //   if(judel == 0){
        //     if(leftgameGrid[0][idx] !== 0 && leftgameGrid[0][idx] == leftgameGrid[1][idx]){
        //       leftgameGrid[0][idx] = 2 * leftgameGrid[0][idx];
        //       leftgameGrid[1][idx] = 0;
        //       judel = 1;
        //     }
        //   }
        //   if(judel == 0){
        //     if(leftgameGrid[0][idx] !== 0 && leftgameGrid[0][idx] == leftgameGrid[1][idx] && leftgameGrid[2][idx] !== 0){
        //       leftgameGrid[0][idx] = 2 * leftgameGrid[0][idx];
        //       leftgameGrid[1][idx] =  leftgameGrid[2][idx];
        //       judel = 1;
        //     }
        //   }
        //   if(judel == 0){
        //     if(leftgameGrid[0][idx] !== 0 && leftgameGrid[0][idx] == leftgameGrid[1][idx] && leftgameGrid[3][idx] !== 0){
        //       leftgameGrid[0][idx] = 2 * leftgameGrid[0][idx];
        //       leftgameGrid[1][idx] =  leftgameGrid[3][idx];
        //       judel = 1;
        //     }
        //   }
        // })
        // leftgameGrid[1].map((i,idx) => {
        //   if(judel == 0){
        //     if(leftgameGrid[1][idx] !== 0 && leftgameGrid[1][idx] == leftgameGrid[0][idx]){
        //       leftgameGrid[1][idx] = 2 * leftgameGrid[1][idx];
        //       leftgameGrid[0][idx] = 0;
        //       judel = 1;
        //     }
        //   }
          
        // })
        // leftgameGrid[2].map((i,idx) => {
        //   if(judel == 0){    // ***********
        //     if(leftgameGrid[2][idx] !== 0 && leftgameGrid[2][idx] == leftgameGrid[1][idx]){
        //       leftgameGrid[2][idx] = 2 * leftgameGrid[2][idx];
        //       leftgameGrid[1][idx] = 0;
        //       judel = 1
        //     }
        //   }
        //   if(judel == 0){    // ***********
        //     if(leftgameGrid[2][idx] !== 0 && leftgameGrid[2][idx] == leftgameGrid[1][idx] && leftgameGrid[0][idx] !== 0){
        //       leftgameGrid[2][idx] = 2 * leftgameGrid[2][idx];
        //       leftgameGrid[1][idx] = leftgameGrid[0][idx];
        //       judel = 1
        //     }
        //   }
        //   if(leftgameGrid[2][idx] !== 0 && leftgameGrid[2][idx] == leftgameGrid[0][idx] && leftgameGrid[1][idx] == 0){
        //     leftgameGrid[2][idx] = 2 * leftgameGrid[2][idx];
        //     leftgameGrid[0][idx] = 0;
        //   }
        // })
        return {
          ...state,
          gameGrid: leftgameGrid,
          flag: newleftflag,
          score: scoreleft,
          scoreAdd: scoreAddleft
        };
      case ActionTypes.CLICK_MOVE_RIGHT: // 右移
        const rightgameGrid = state.gameGrid.slice();
        const newrightflag = state.flag.slice();
        let juder = state.equaljude;
        let scoreright = state.score;
        let scoreAddright = state.scoreAdd;
        for (let p = 3; p > 0; p--) {
          for (let i = 0; i < 4; i++) {
            for (let j = 3; j > 0; j--) {
              //后一列=0，前一列！=0
              if (rightgameGrid[i][j] == 0 && rightgameGrid[i][j-1] != 0) {
                rightgameGrid[i][j] = rightgameGrid[i][j-1];
                rightgameGrid[i][j-1] = 0;
                // state.initdispaly = true;
              }
            }
          }
        }
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
