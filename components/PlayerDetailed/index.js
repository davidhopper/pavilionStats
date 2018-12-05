const player_data = require('../../TJP/players.json')
import React, { Component } from 'react';

class Player extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let player = player_data[this.props.id];
    return (
      <div>
        <div class="stats">
          <h2>Name: {player.name}, Elo: {Math.round(player.elo)}</h2>
          <p>Wins: {player.wins}</p>
          <p>Losses: {player.losses}</p>
          <p>Games Played: {player.games}</p>
          <p>Rank: {player.rank}</p>
        </div>
        <div class="graph">

        </div>
      </div>
    )
  }
}

export default Player
