import React, { Component } from 'react';
import './App.css';
import NavContainer from './containers/NavContainer';
import EventList from './containers/EventList';



const BackendUrl = "http://localhost:3000/"

// function getBackendData(route, confirmFn){
//     return fetch(backendUrl+route).then(res => res.json()).then(json => confirmFn(json));
// }

function postBackendData(route, data, confirmFn){
    return fetch(BackendUrl+route,{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        },
        body: data
    }).then(res => res.json()).then(json => confirmFn(json));
}

class App extends Component {

  state = {
    user: null,
    events: [],
    message: "",
  }
  componentDidMount() {
    fetch(BackendUrl+"/events")
      .then(response => response.json())
      .then((res) => this.setState({ events: res }))
  }

  loginFn = (event) => {
    let username = event.target.parentElement.children[0].value
    event.preventDefault()
    postBackendData("users", JSON.stringify({"user": {"name": username}}), this.setUser)
  }

  setUser = (user) => {

    this.setState({ user })
    console.log(this.state)
  }

  logoutFn = () => {
    console.log("test logout")
    this.setUser(null)
  }

  placeBet = (event) => {
    event.preventDefault()
    let amount = event.target.children[0].value*1
    let user_id = this.state.user.id
    let outcome_id = 0
    console.log("test placeBet")
    console.log(this.state.user)
    // debugger
    postBackendData("predictions", JSON.stringify({"prediction": {amount, outcome_id, user_id}}), this.confirmBet)
  }

  confirmBet = (prediction) => {
    this.setState({message: prediction})
    // debugger
    let username = this.state.user.name
    this.setUser(this.state.user)
  }


  render() {
    return (
      <div className="App">
      <NavContainer loginFn={this.loginFn} logoutFn={this.logoutFn} user={this.state.user}/>
      {this.state.message ? `Message: ${this.state.message.log}` : null}
      <EventList events={this.state.events} placeBet={this.placeBet} user={this.state.user} />
      </div>
    );
  }
}

export default App;
