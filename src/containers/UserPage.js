
import React from 'react';
// import {Redirect} from 'react-router-dom'
import NavContainer from './NavContainer';
// import Card from 'react-bootstrap/lib/Card'


class UserPage extends React.Component {
  state = {

  }

  componentDidMount() {

    let passedState = this.props.location.state
    console.log("route test")
    // this.setState({
    //   ...passedState
    // })
    debugger
    // console.log(this.state)
  }
  showBets = () => {
    return this.props.location.state.user.predictions.map(
      prediction =>
      <div key={prediction.id} >
      <h1>Bet on Outcome {prediction.outcome_id}</h1><p> for {prediction.amount}</p>
      </div>
    )
  }

  loginFn = (event) => {
    event.preventDefault()
  }

  logoutFn = () => {
    console.log("test logout")
    this.setState({user: null})
  }


  render(){
    if (!this.props.location.state.user){
      return (<div>logout placeholder</div>)
    }
  	return (
  	  <div>
      <div className="UserPage">
      <NavContainer loginFn={this.loginFn} logoutFn={this.logoutFn} user={this.props.location.state.user}/>
      {this.state.message ? `Message: ${this.state.message.log}` : null}
      {this.showBets()}
      </div>
  	  </div>
  	);
  }

};

export default UserPage;
