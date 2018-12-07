
import React from 'react';

// import Card from 'react-bootstrap/lib/Card'
import CardDeck from 'react-bootstrap/lib/CardDeck'
import EventCard from '../components/EventCard'

class EventList extends React.Component {




  genEvents = () => {
    if (!this.props.events){
      return 1
    }
    return this.props.events.map(event => <EventCard eventData={event} key={event.id} outcomeButtonClick={this.props.outcomeButtonClick} />)
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
