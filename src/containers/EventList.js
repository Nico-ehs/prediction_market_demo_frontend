
import React from 'react';

// import Card from 'react-bootstrap/lib/Card'
import CardDeck from 'react-bootstrap/lib/CardDeck'
import EventCard from '../components/EventCard'

class EventList extends React.Component {




  genEvents = () => {
    if (!this.props.events){
      return 1
    }
    return this.props.events.map(event => <EventCard eventData={event} user={this.props.user} key={event.id} placeBet={this.props.placeBet} />)
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
