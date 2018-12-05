import React, { Component } from 'react';
import Link from 'next/link';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }
  render(){
    return(
      <div>
        <Link href="/">
          <a><button>Home</button></a>
        </Link>
        <Link href="/about">
          <a><button>About</button></a>
        </Link>
        <Link href="/players">
          <a><button>Players</button></a>
        </Link>
        <Link href="/factions">
          <a><button>Factions</button></a>
        </Link>
      </div>
    )
  }
}

export default Navbar;
