import React, { Component } from 'react';

import './gamescore.css';


export default class GameScore extends Component {
  state = { }
  getScore = () => {
    const { score, scoreAdd } = this.props;
    if (score === 0) {
      return 'scores';
    }
    return 'scores score-addition';
  }

  render() {
    const { score, scoreAdd } = this.props;
    return (
      <div className="header">
        <h1 className="title">2048</h1>
        <div className="score_container">
          <div className={this.getScore()}> {score}</div>
          <div className={this.getScore()}> {score}</div>
        </div>
      </div>
    );
  }
}

