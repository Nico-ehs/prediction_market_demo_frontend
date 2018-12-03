
import React, { Component } from 'react';

import Card from 'react-bootstrap/lib/Card'
import CardDeck from 'react-bootstrap/lib/CardDeck'
import EventCard from '../components/EventCard'

class EventList extends React.Component {

  genEvents = () => {
    // if (!this.props.Events){
    //   return 1
    // }
    return [1,2,3,4,5].map(event => <EventCard event={event}  />)
  }

  render(){
  	return (
  	  <div>
    		<CardDeck>
        {this.genEvents()}
        </CardDeck>
  	  </div>
  	);
  }

};

export default EventList;
