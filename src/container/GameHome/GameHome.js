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
  render() {
    return (
      <div className="wrap">
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

