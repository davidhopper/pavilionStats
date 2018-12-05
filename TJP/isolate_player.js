const player_data = require('./players.json');

function isolatePlayer(id){
  let player = player_data[id];
  return player;
}

export default isolatePlayer
