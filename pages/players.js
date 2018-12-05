import Navbar from '../components/Navbar'
import PlayerDetailed from '../components/PlayerDetailed'
import Link from 'next/link';
import React, { Component } from 'react';



class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value},
    console.log('something'));
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>Players</h1>
        <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e.target.value)}/>
        <p>state: {this.state.value}</p>
      </div>

    );
  }
}

export default Players
