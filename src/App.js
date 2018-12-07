import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Navbar from 'react-bootstrap/lib/Navbar'
// import Nav from 'react-bootstrap/lib/Nav'
// import NavItem from 'react-bootstrap/lib/NavItem'
// import NavDropdown from 'react-bootstrap/lib/NavDropdown'


import NavContainer from './containers/NavContainer';
import EventList from './containers/EventList';


const BackendUrl = "http://localhost:3000/"

// function getBackendData(route, confirmFn){
//     return fetch(backendUrl+route).then(res => res.json()).then(json => confirmFn(json));
// }
//
//
// function postBackendData(route, data, confirmFn){
//     return fetch(backendUrl+route,{
//         method: "POST",
//         headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//         },
//         body: data
//     }).then(res => res.json()).then(json => confirmFn(json));
// }


class App extends Component {

  state = {
    user: null,
    events: [],
    // events1: [{"id":1,"title":"Election","description":"d1","outcomes":[{"id":1,"name":"A wins","prediction_value":65},{"id":2,"name":"B wins","prediction_value":35},{"id":5,"name":"Draw","prediction_value":10}]},{"id":2,"title":"Sportsball Game","description":"d2","outcomes":[{"id":3,"name":"C wins","prediction_value":50},{"id":4,"name":"D wins","prediction_value":40}]}]
  }

  componentDidMount() {
    fetch(BackendUrl+"/events")
      .then(response => response.json())
      .then((res) => this.setState({ events: res }))
  }




  loginFn = (event) => {
    console.log("test login")
    console.log(event)
  }

  logoutFn = () => {
    console.log("test logout")
  }

  placeBet = () => {
    console.log("test placeBet")
  }

  // getUserData = () => {
  //   postBackendData(route, data, confirmFn)
  // }

  outcomeButtonClick = (event) => {
    debugger
    console.log(event);
  }



  render() {
    return (
      <div className="App">



      <NavContainer loginFn={this.loginFn} logoutFn={this.logoutFn} user={this.props.user}/>
      <EventList events={this.state.events} placeBet={this.placeBet} outcomeButtonClick={this.outcomeButtonClick} />
      </div>
    );
  }
}

export default App;
