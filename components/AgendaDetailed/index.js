const factionData = require('../../TJP/factions.json')
import React, { Component } from 'react';
import AgendaLinks from '../AgendaLinks'

class Agenda extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h3>Versus</h3>
        <AgendaLinks />
      </div>
    )
  }
}
export default Agenda
