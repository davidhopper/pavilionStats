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
        <h3>Name: {player.name}, Elo: {Math.round(player.elo)}</h3>
      </div>
    )
  }
}

export default Player
