import React, { Component } from 'react';

import './gamescore.css';

export default class GameScore extends Component {
  state = { }

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
          </div>
          <div className="bestScore">
            {bestScore}
          </div>
        </div>
      </div>
    );
  }
}

