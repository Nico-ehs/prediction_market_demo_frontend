import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'


import NavContainer from './containers/NavContainer';
import EventList from './containers/EventList';
class App extends Component {

  state = {
    events: [1,2],
    user: null
  }

  // componentDidMount() {
    // fetch('http://api.open-notify.org/astros.json')
    //   .then(response => response.json())
    //   .then(({people}) => this.setState({ peopleArr: people }))
  // }


  render() {
    return (
      <div className="App">



      <NavContainer />
      <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
