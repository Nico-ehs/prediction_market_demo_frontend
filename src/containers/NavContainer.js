
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
// import NavItem from 'react-bootstrap/lib/NavItem'
// import NavDropdown from 'react-bootstrap/lib/NavDropdown'

import LoginOut from '../components/Login'
import {Link} from 'react-router-dom'


class NavContainer extends Component {


  genUserbets = () => {

  }

  render() {
    const BetsPage = {
      pathname: '/user_predictions',
      state: { log: "test1", user: this.props.user}
    }

    return (
      <div>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Prediction Market Demo</Navbar.Brand>
    <Nav >
      {this.props.user ? <Link to={BetsPage}>User Bets</Link> : null }
      {this.props.user ? `Money: ${this.props.user.money}` : null}
    </Nav>
    <LoginOut loginFn={this.props.loginFn} logoutFn={this.props.logoutFn} user={this.props.user}/>

</Navbar>
      </div>
    );
  }
}

export default NavContainer;
