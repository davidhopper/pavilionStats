import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router'

class AgendaLinks extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ul>
          <Link href={`/factions?faction=${this.props.router.query.faction}&agenda=${this.props.router.query.agenda}&oppfaction=Stark`} faction="Stark">
            <a><li>Stark</li></a>
          </Link>
          <Link href={`/factions?faction=${this.props.router.query.faction}&agenda=${this.props.router.query.agenda}&oppfaction=Baratheon`}>
            <a><li>Baratheon</li></a>
          </Link>
          <Link href={`/factions?faction=${this.props.router.query.faction}&agenda=${this.props.router.query.agenda}&oppfaction=Lannister`}>
            <a><li>Lannister</li></a>
          </Link>
          <Link href={`/factions?faction=${this.props.router.query.faction}&agenda=${this.props.router.query.agenda}&oppfaction=Greyjoy`}>
            <a><li>Greyjoy</li></a>
          </Link>
          <Link href={`/factions?faction=${this.props.router.query.faction}&agenda=${this.props.router.query.agenda}&oppfaction=Targaryen`}>
            <a><li>Targaryen</li></a>
          </Link>
          <Link href={`/factions?faction=${this.props.router.query.faction}&agenda=${this.props.router.query.agenda}&oppfaction=Martell`}>
            <a><li>Martell</li></a>
          </Link>
          <Link href={`/factions?faction=${this.props.router.query.faction}&agenda=${this.props.router.query.agenda}&oppfaction=Night's Watch`}>
            <a><li>Night's Watch</li></a>
          </Link>
          <Link href={`/factions?faction=${this.props.router.query.faction}&agenda=${this.props.router.query.agenda}&oppfaction=Tyrell`}>
            <a><li>Tyrell</li></a>
          </Link>
        </ul>
      </div>
    )
  }
}

export default withRouter(AgendaLinks)
