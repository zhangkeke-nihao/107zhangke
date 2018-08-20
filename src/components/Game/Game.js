import React, { Component } from 'react';
import GameScore from '../game-score/gamescore';
import Explian from '../game-explain/explian';
import GamePlay from '../game-play/gameplay';
import './Game.css';

export default class GameHome extends Component {
  state = { }

  render() {
    const { gameGrid, flag } = this.props;
    return (
      <div className="game-wrap">
        <GameScore
          score={this.props.score}
          bestScore={this.props.bestScore}
          scoreAdd={this.props.scoreAdd}
          bestScoreAdd={this.props.bestScoreAdd}
        />
        <Explian Actions={this.props.Actions} gameGrid={gameGrid} />
        <GamePlay gameGrid={gameGrid} flag={flag} Actions={this.props.Actions} />
      </div>
    );
  }
}
