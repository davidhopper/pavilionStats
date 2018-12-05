import React, { Component } from 'react';
import Link from 'next/link';

class FactionLinks extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ul>
          <Link href="/factions?faction=Stark" faction="Stark">
            <a><li>Stark</li></a>
          </Link>
          <Link href="/factions?faction=Baratheon">
            <a><li>Baratheon</li></a>
          </Link>
          <Link href="/factions?faction=Lannister">
            <a><li>Lannister</li></a>
          </Link>
          <Link href="/factions?faction=Greyjoy">
            <a><li>Greyjoy</li></a>
          </Link>
          <Link href="/factions?faction=Targaryen">
            <a><li>Targaryen</li></a>
          </Link>
          <Link href="/factions?faction=Martell">
            <a><li>Martell</li></a>
          </Link>
          <Link href="/factions?faction=Night's Watch">
            <a><li>Night's Watch</li></a>
          </Link>
          <Link href="/factions?faction=Tyrell">
            <a><li>Tyrell</li></a>
          </Link>
        </ul>
      </div>
    )
  }
}

export default FactionLinks
