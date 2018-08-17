
import React, { Component } from 'react';
import './gameplay.css';


export default class GamePlay extends Component {
  state = { };
  onTouchStart = e => {
    console.log(e);
    this.startX = e.changedTouches[0].clientX;
    this.startY = e.changedTouches[0].clientY;
    // console.log(this.startX);
    // console.log(this.startY);
  }
  onTouchEnd = e => {
    const { Actions } = this.props;
    this.endX = e.changedTouches[0].clientX;
    this.endY = e.changedTouches[0].clientY;
    const x = this.endX - this.startX;
    const y = this.endY - this.startY;
    console.log(x);
    // console.log(y);
    if (x < y) {
      if (y > 0) {
        Actions.movedown(3);
      } else {
        Actions.moveleft(3);
      }
    }
    if (x > y) {
      if (x > 0) {
        Actions.moveright(3);
      } else {
        Actions.moveup(3);
      }
    }
  }
  renderGamePlayItem = () => {
    const { gameGrid, flag } = this.props;
    // console.log(gameGrid, flag);
    return gameGrid.map((m, row) => m.map((n, column) => {
      // console.log(flag);
      if (gameGrid[row][column] !== 0 && flag[row][column] === 0) {
        return <div key={column} className={`Num${gameGrid[row][column]}`}>{gameGrid[row][column]}</div>;
      } else if (gameGrid[row][column] !== 0 && flag[row][column] === 1) {
        return <div key={column} className={`Num${gameGrid[row][column]}_Blink`}>{gameGrid[row][column]}</div>;
      } else if (gameGrid[row][column] !== 0 && flag[row][column] === 2) {
        return <div key={column} className={`Num${gameGrid[row][column]}_Appear`}>{gameGrid[row][column]}</div>;
      }
      return <div key={column} />;
    }));
  }
  render() {
    return (
      <div className="game_container" onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd}>
        {this.renderGamePlayItem()}
      </div>
    );
  }
}

