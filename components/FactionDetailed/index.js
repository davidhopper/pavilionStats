const factionData = require('../../TJP/factions.json');
import React, { Component } from 'react';
import Link from 'next/link'

class Faction extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let agendasData = factionData[this.props.faction]
    let agendasArray = [];
    for(let key in agendasData){
      agendasArray.push(
        <Link href={`/factions?faction=${this.props.faction}&agenda=${key}`}>
          <a><li>{key}</li></a>
        </Link>
      )
    }
    return(
      <div>
        <h2>Agendas:</h2>
        <ul>{agendasArray}</ul>
      </div>
    )
  }
}
export default Faction
