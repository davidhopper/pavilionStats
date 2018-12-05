const fs = require('fs');

let players = {};
let factions = {};

let compareElo = (game) => {
  let p1_id = game.p1_id;
  let p2_id = game.p2_id;
  if(p1_id == 10675){
    p1_id = 838;
  }
  if(p2_id == 10675){
    p2_id = 838;
  }
  let p1 = getPlayer(p1_id);
  let p2 = getPlayer(p2_id);
  p1.games++;
  p2.games++;
  let r1 = p1.elo;
  let r2 = p2.elo;
  let e1 = 1 / (1 + Math.pow(10, (r2 - r1) / 400));
  let e2 = 1 / (1 + Math.pow(10, (r1 - r2) / 400));
  let s1 = game.p1_points / 5;
  let s2 = game.p2_points / 5;
  if(s1 > 0.5){
    p1.wins++;
    p2.losses++;
  }
  else{
    p1.losses++;
    p2.wins++;
  }
  let r1_ = r1 + (32) * (s1 - e1);
  let r2_ = r2 + (32) * (s2 - e2);
  p1.elo = r1_;
  p2.elo = r2_;
}
let compareFaction = (game) => {
  let faction1 = game.p1_faction;
  let faction2 = game.p2_faction;
  let agenda1 = game.p1_agenda;
  let agenda2 = game.p2_agenda;
  let player1 = getPlayer(game.p1_id);
  let player2 = getPlayer(game.p2_id);
  let avg = (player1.elo + player2.elo) / 2;
  let range = Math.abs(player1.elo - player2.elo);
  let date = game.tournament_date

  if(game.p1_points > 2.5){
    factions[faction1][agenda1][faction2][agenda2].win++;
    factions[faction2][agenda2][faction1][agenda1].loss++;
  }
  else{
    factions[faction1][agenda1][faction2][agenda2].loss++;
    factions[faction2][agenda2][faction1][agenda1].win++;
  }

  factions[faction1][agenda1][faction2][agenda2].average.push(avg);
  factions[faction1][agenda1][faction2][agenda2].range.push(range);
  factions[faction1][agenda1][faction2][agenda2].date.push(date);
  factions[faction2][agenda2][faction1][agenda1].average.push(avg);
  factions[faction2][agenda2][faction1][agenda1].range.push(range);
  factions[faction2][agenda2][faction1][agenda1].date.push(date);
}
let getPlayer = (id) => {
  if(id == 10675){
    return players[838];
  }
  return players[id];
}

fs.readFile('data.json', 'utf-8', (err, rawdata) => {
  if (err) throw err;
  let data = JSON.parse(rawdata);
  console.log(data);
  data.forEach((game) => {
    if(game.p1_id > 0 && game.p2_id > 0 ){
      if(!(game.p1_id in players)){
        players[game.p1_id] = {
          id: game.p1_id,
          name: game.p1_name,
          elo: 1500,
          wins: 0,
          losses: 0,
          games: 0,
          rank: 0
        }
      }
      if(!(game.p2_id in players)){
        players[game.p2_id] = {
          id: game.p2_id,
          name: game.p2_name,
          elo: 1500,
          wins: 0,
          losses: 0,
          games: 0,
          rank: 0
        }
      }
      if(!(game.p1_faction in factions)){
        factions[game.p1_faction] = {
          [game.p1_agenda]: {
            [game.p2_faction]: {
              [game.p2_agenda]: {
                win: 0,
                loss: 0,
                average: [],
                range: [],
                date: []
              }
            }
          },
        }
      }
      else{
        if(!(game.p1_agenda in factions[game.p1_faction])){
          factions[game.p1_faction][game.p1_agenda] = {
            [game.p2_faction]: {
              [game.p2_agenda]: {
                win: 0,
                loss: 0,
                average: [],
                range: [],
                date: []
              }
            }
          }
        }
        else{
          if(!(game.p2_faction in factions[game.p1_faction][game.p1_agenda])){
            factions[game.p1_faction][game.p1_agenda][game.p2_faction] = {
              [game.p2_agenda]: {
                win: 0,
                loss: 0,
                average: [],
                range: [],
                date: []
              }
            }
          }
          else if(!(game.p2_agenda in factions[game.p1_faction][game.p1_agenda][game.p2_faction])){
            factions[game.p1_faction][game.p1_agenda][game.p2_faction][game.p2_agenda] = {
              win: 0,
              loss: 0,
              average: [],
              range: [],
              date: []
            }
          }
        }
      }
      if(!(game.p2_faction in factions)){
        factions[game.p2_faction] = {
          [game.p2_agenda]: {
            [game.p1_faction]: {
              [game.p1_agenda]: {
                win: 0,
                loss: 0,
                average: [],
                range: [],
                date: []
              }
            }
          },
        }
      }
      else{
        if(!(game.p2_agenda in factions[game.p2_faction])){
          factions[game.p2_faction][game.p2_agenda] = {
            [game.p1_faction]: {
              [game.p1_agenda]: {
                win: 0,
                loss: 0,
                average: [],
                range: [],
                date: []
              }
            }
          }
        }
        else{
          if(!(game.p1_faction in factions[game.p2_faction][game.p2_agenda])){
            factions[game.p2_faction][game.p2_agenda][game.p1_faction] = {
              [game.p1_agenda]: {
                win: 0,
                loss: 0,
                average: [],
                range: [],
                date: []
              }
            }
          }
          else if(!(game.p1_agenda in factions[game.p2_faction][game.p2_agenda][game.p1_faction])){
            factions[game.p2_faction][game.p2_agenda][game.p1_faction][game.p1_agenda] = {
              win: 0,
              loss: 0,
              average: [],
              range: [],
              date:[]
            }
          }
        }
      }
      compareElo(game);
      compareFaction(game);
    }
  })
  console.log(players[246]); // Michael
  console.log(players[256]); // Alejandro
  console.log(players[775]); // Brad
  console.log(players[535]); // Angela
  console.log(players[841]); // david Moran
  console.log(players[787]); // Buz
  console.log(players[9966]); // Harrison
  console.log(players[838]); // ERIC
  console.log(players[774]); // Lance
  console.log(players[254]); // Shelby
  console.log(players[3705]); // KEVIN
  console.log(factions.Stark)
  fs.writeFile('players.json', JSON.stringify(players), function(err){
    if(err) throw err;
    console.log('saved players');
  });
  fs.writeFile('factions.json', JSON.stringify(factions), function(err){
    if(err) throw err;
    console.log('saved factions')
  })
})
