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
    case ActionTypes.CHANGE_STATUS:{   // 更新初始状态
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
      for (let j = 0; j < 4; j++) { // 列
        let uparr = [];
        for (let i = 0; i < 4; i++) { // 行
          if(upgameGrid[i][j] !== 0){ //抽出来
            uparr.push(upgameGrid[i][j]);
          }
        }
       
        for(let i = 0; i < uparr.length-1; i++) {
          if(uparr[i] == uparr[i+1]){ // 如果相等
            uparr[i] = uparr[i] + uparr[i+1];
            scoreAddup = scoreAddup + uparr[i];
            bestscoreAddup = bestscoreAddup + uparr[i];
            scoreup = scoreup + uparr[i]; 
            if(bestscoreup < scoreup){
              bestscoreup = scoreup;
            }
          }
        }
        let newuparr = [];
        for(let i = 0;i < uparr.length;i++){
          newuparr.push(uparr[i])
        }
        for (let u = newuparr.length-1; u < 3; u++) {  
          newuparr.push(0); // 补0
        } 
        for(let i = 0; i < 4; i++) {
          if(upgameGrid[i][j] !== newuparr[i]){
            isUpMoved = true;
          }
          upgameGrid[i][j] = newuparr[i];
        }
      }
      return {
        ...state,
        gameGrid: upgameGrid,
        isMoved: isUpMoved,
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
         for (let j = 0; j < 4; j++) { // 列
          let downarr = [];
          for (let i = 3; i > -1; i--) { // 行
            if(downgameGrid[i][j] !== 0){ //抽出来
              downarr.push(downgameGrid[i][j]);
            }
          }
          for(let m = 0; m < downarr.length-1; m++) {
            if(downarr[m] == downarr[m+1]){ // 如果相等
              downarr[m] = downarr[m] + downarr[m+1];
              scoreAdddown = scoreAdddown + downarr[m];
              bestscoreAdddown = bestscoreAdddown + downarr[m];
              scoredown = scoredown + downarr[m];
              if(bestscoredown < scoredown){
                bestscoredown = scoredown;
              }
            }
          }
          console.log(downarr)
          let newdownarr = [];
          for(let i = 0;i < downarr.length;i++){
            newdownarr.push(downarr[i])
          }
          for (let v = newdownarr.length-1; v < 3; v++) {  
            newdownarr.push(0); // 补0
          } 
          const redownarr = newdownarr.reverse();
          for(let i = 3; i > -1; i--) {
            if(downgameGrid[i][j] !== redownarr[i]){
              isdownMove = true;
            }
            downgameGrid[i][j] = redownarr[i];
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

        for (let i = 0; i < 4; i++) { // 行
          let leftarr = [];
          for (let j = 0; j < 4; j++) { // 列
            if(leftgameGrid[i][j] !== 0){
            leftarr.push(leftgameGrid[i][j])
            } 
          }
          for (let j = 0; j < leftarr.length-1; j++) {
            if(leftarr[j] === leftarr[j + 1]){
              leftarr[j] = leftarr[j] + leftarr[j + 1];
              leftarr[j + 1] = 0;
              scoreAddleft = scoreAddleft + leftarr[j];
              bestscoreAddleft = bestscoreAddleft + leftarr[j];
              scoreleft = scoreleft + leftarr[j];
              if(bestscoreleft < scoreleft){
                bestscoreleft = scoreleft
              }
            }
          }
          let newleftarr = [];
          for (let y = 0; y < leftarr.length; y++) {
            if(leftarr[y] !== 0){
              newleftarr.push(leftarr[y])
            }
          }
          for (let u = newleftarr.length-1; u < 3; u++){
            newleftarr.push(0);
          }
          for (let j = 0; j < 4; j++) { 
            if(leftgameGrid[i][j] !== newleftarr[j]){
              isleftMove = true;
            }
            leftgameGrid[i][j] = newleftarr[j];
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

        for (let i = 0; i < 4; i++) { // 行
        let rightarr = [];
        for (let j = 3; j > -1; j--) { // 列
          if(rightgameGrid[i][j] !== 0){
            rightarr.push(rightgameGrid[i][j])
            } 
        }
        for (let j = 0; j < rightarr.length-1; j++) {
          if(rightarr[j] == rightarr[j + 1]){
            rightarr[j] = rightarr[j] + rightarr[j + 1];
            scoreAddright = scoreAddright + rightarr[j];
            bestscoreAddright = bestscoreAddright + rightarr[j];
            scoreright = scoreright + rightarr[j];
            if(bestscoreright < scoreright){
              bestscoreright = scoreright;
            }
          }
        }
        let newrightarr = [];
        for (let y = 0; y < rightarr.length; y++) {
          newrightarr.push(rightarr[y])
        }
        for (let i = newrightarr.length-1; i < 3; i++){
          newrightarr.push(0);
        }
        const rerightarr = newrightarr.reverse();
        for (let j = 3; j > -1; j--) {
          if(rightgameGrid[i][j] !== rerightarr[j]) {
            isrightMove = true;
          }
          rightgameGrid[i][j] = rerightarr[j];
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
