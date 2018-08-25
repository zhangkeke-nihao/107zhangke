import React, { Component } from 'react';
import './explian.css';


export default class Explian extends Component {
  state = { }


  render() {
    return (
      <div className="game_info">
        <div className="game_info_left">
          <div className="game_explain">Keypressing W S A D on PC.</div>
          <div className="game_explain">Touch moving on Phone! <br />Join it &amp; have fun!</div>
        </div>
        <div className="game_restart" onClick={() => this.props.Actions.restartGameNum(0)}>
          <span>Restart</span>
        </div>
      </div>
    );
  }
}

