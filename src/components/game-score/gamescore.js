import React, { Component } from 'react';

import './gamescore.css';

export default class GameScore extends Component {
  state = { }

  renderScore = () => {
    const { scoreAdd } = this.props;
    if (scoreAdd !== 0) {
      return (
        <div className="score-addition">+ {scoreAdd}</div>
      );
    }
    return null;
  }
  renderbestScore = () => {
    const { bestScoreAdd } = this.props;
    if (bestScoreAdd !== 0) {
      return (
        <div className="score-addition">+ {bestScoreAdd}</div>
      );
    }
    return null;
  }
  render() {
    const {
      score, bestScore
    } = this.props;
    return (
      <div className="header">
        <h1 className="title">2048</h1>
        <div className="score_container">
          <div className="scores">
            {score}
            {this.renderScore()}
          </div>
          <div className="bestScore">
            {bestScore}
            {this.renderbestScore()}
          </div>
        </div>
      </div>
    );
  }
}

