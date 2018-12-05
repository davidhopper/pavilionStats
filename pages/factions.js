import { withRouter } from 'next/router'
import Navbar from '../components/Navbar'
import FactionLinks from '../components/FactionLinks'
import FactionDetailed from '../components/FactionDetailed'
import AgendaDetailed from '../components/AgendaDetailed'
import MatchupDetailed from '../components/MatchupDetailed'
import React, { Component } from 'react'

class Factions extends Component {
  constructor(props){
    super(props);
  }
  render(){
    if(this.props.router.query.oppfaction){
      return(
        <div>
          <Navbar />
          <h1>Factions - {this.props.router.query.faction} {this.props.router.query.agenda} vs. {this.props.router.query.oppfaction}</h1>
          <MatchupDetailed faction={this.props.router.query.faction} agenda={this.props.router.query.function} oppfaction={this.props.router.query.oppfaction} />
        </div>
      )
    }
    else if(this.props.router.query.agenda){
      return(
        <div>
          <Navbar />
          <h1>Factions - {this.props.router.query.faction} {this.props.router.query.agenda}</h1>
          <FactionLinks />
          <AgendaDetailed faction={this.props.router.query.faction} agenda={this.props.router.query.agenda}/>
        </div>
      )
    }
    else if(this.props.router.query.faction){
      return(
        <div>
          <Navbar />
          <h1>Factions - {this.props.router.query.faction}</h1>
          <FactionLinks />
          <FactionDetailed faction={this.props.router.query.faction} />
        </div>
      )
    }
    else{
      return(
        <div>
          <Navbar />
          <h1>Factions</h1>
          <div>
            <FactionLinks />
          </div>
          <div>

          </div>
        </div>
      )
    }
  }
}
export default withRouter(Factions)
