/* eslint-disable */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../action/index';

import Game from '../../components/Game/Game';

import './GameHome.css'
class GameHome extends Component {
  componentWillMount = () => {
    document.addEventListener('keypress', e => this.handlekeypress(e)); // 键盘事件的监听
  }
  handlekeypress = e => { // 键盘事件
    const { Actions } = this.props;
    switch (e.key) {
      case 'w':
      {
        console.log('up');
        Actions.moveup(3);
        break;
      }
      case 's':
      {
        console.log('down');
        Actions.movedown(3);
        break;
      }
      case 'a':
      {
        console.log('left');
        Actions.moveleft(3);
        break;
      }
      case 'd':
      {
        console.log('right');
        Actions.moveright(3);
        break;
      }
      default:
        break;
    }
  }
  // 初始函数，取得随机位置、随机值
  initrandomNum = () => { 
    const { gamedata, Actions } = this.props;
    // 判断是否赢得游戏
    for (let i = 0; i < 4; i++) {  
			for (let j = 0; j < 4; j++) {
				if (gamedata.gameGrid[i][j] == 2048) {
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
				if ((gamedata.gameGrid[i][j] != 0) && (gamedata.gameGrid[i][j + 1] != 0) && (gamedata.gameGrid[i][j] != gamedata.gameGrid[i][j + 1])) {
					xCount++;
				}
			}
		}
		for (let j = 0; j < 4; j++) {
			for (let i = 0; i < 3; i++) {
				if ((gamedata.gameGrid[i][j] != 0) && (gamedata.gameGrid[i + 1][j] != 0) && (gamedata.gameGrid[i][j] != gamedata.gameGrid[i + 1][j])) {
					yCount++;
				}
			}
		}
		if (xCount == 12 && yCount == 12) {  // 判断全满且没有相同可以合并时，游戏结束
			alert("Game Over! Please click the \"Restart\" to restart the Game2048!")
    }
    
    if(gamedata.isMoved == true) { // 先判断是否有滑动
      let randnum = Math.ceil(Math.random() * 4); // 生成随机数  [1,2,3,4]
      if (randnum !== 4) {
        randnum = 2;
      }
      const x = Math.floor(Math.random() * 4); // 生成随机位置 [0,1,2,3]
      const y = Math.floor(Math.random() * 4); // 生成随机位置 [0,1,2,3]
      if (gamedata.gameGrid[x][y] > 0) {
        this.initrandomNum();
      } else {
        gamedata.gameGrid[x][y] = randnum;
        gamedata.flag[x][y] = 2;
      }
      if (gamedata.initdispaly === false) {
        Actions.changestatus(true);
      } else {
        Actions.ismove();
      }
    }
  }
  render() {
    return (
      <div className="wrap">
        {this.initrandomNum()}
        <Game
          Actions={this.props.Actions}
          gameGrid={this.props.gamedata.gameGrid}
          flag={this.props.gamedata.flag}
          score={this.props.gamedata.score}
          bestScore={this.props.gamedata.bestScore}
          scoreAdd={this.props.gamedata.scoreAdd}
          bestScoreAdd={this.props.gamedata.bestScoreAdd}
        />
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { gamedata } = state;
  const props = { gamedata };
  return props;
}

const mapDispatchToProps = dispatch => ({
  Actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GameHome);

