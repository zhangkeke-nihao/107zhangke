import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../action/index';

import Game from '../../components/Game/Game';

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
        const w = 3;
        Actions.moveup(w);
        break;
      }
      case 's':
      {
        console.log('down');
        const s = 3;
        Actions.movedown(s);
        break;
      }
      case 'a':
      {
        console.log('left');
        const a = 3;
        Actions.moveleft(a);
        break;
      }
      case 'd':
      {
        console.log('right');
        const d = 3;
        Actions.moveright(d);
        break;
      }
      default:
        break;
    }
  }
  randomNum = () => { // 初始函数，取得随机位置、随机值
    const { gamedata, Actions } = this.props;
    let randnum = Math.ceil(Math.random() * 4); // 生成随机数  [1,2,3,4]
    if (randnum !== 4) {
      randnum = 2;
    }
    const x = Math.floor(Math.random() * 4); // 生成随机位置 [n,1,2,3]
    const y = Math.floor(Math.random() * 4); // 生成随机位置 [n,1,2,3]

    if (gamedata.gameGrid[x][y] > 0) {
      this.randomNum();
    } else {
      gamedata.gameGrid[x][y] = randnum;
    }
    if (gamedata.initdispaly === false) {
      Actions.changestatus(true);
    }
  }
  render() {
    return (
      <div className="wrap">
        {this.randomNum()}
        <Game
          Actions={this.props.Actions}
          gameGrid={this.props.gamedata.gameGrid}
          flag={this.props.gamedata.flag}
          score={this.props.gamedata.score}
          scoreAdd={this.props.gamedata.scoreAdd}
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

