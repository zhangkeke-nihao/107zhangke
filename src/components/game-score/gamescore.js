import React, { Component } from 'react';
import './gamescore.css';

let scoreanimate1 = false;
let scoreanimate2 = false;
export default class GameScore extends Component {
  renderScore = () => {
    const { scoreAdd } = this.props;
    if (scoreAdd !== 0) {
      scoreanimate1 = !scoreanimate1;
      return (
        <div className={`score-addition_${scoreanimate1}`}>+ {scoreAdd}</div>
      );
    }
    return null;
  }
  renderbestScore = () => {
    const { score, bestScore, bestScoreAdd } = this.props;
    if (bestScore <= score && bestScoreAdd !== 0) {
      scoreanimate2 = !scoreanimate2;
      return (
        <div className={`score-addition_${scoreanimate2}`}>+ {bestScoreAdd}</div>
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

