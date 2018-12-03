import React, { Component } from 'react';
import Card from 'react-bootstrap/lib/Card'
import Button from 'react-bootstrap/lib/Button'

import logo from '../logo.svg';

class EventCard extends React.Component {

  render(){
  	return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>

          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  	);
  }

};

export default EventCard;
