import React, { Component } from 'react'
const factionData = require('../../TJP/factions.json')

class MatchupDetailed extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let matchupData = factionData[this.props.faction][this.props.agenda][this.props.oppfaction]
    let matchupArray = [];
    console.log(factionData[this.props.faction][this.props.agenda])
    for(let key in matchupData){
      matchupArray.push(
        <li>{key}</li>
      )
    }
    return(
      <div>
        <h2>Agendas:</h2>
        <ul>{matchupArray}</ul>
      </div>
    )
  }
}
export default MatchupDetailed
