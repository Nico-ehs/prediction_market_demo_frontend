import React from 'react';
import Card from 'react-bootstrap/lib/Card'
import Button from 'react-bootstrap/lib/Button'
import Form from 'react-bootstrap/lib/Form'
import FormControl from 'react-bootstrap/lib/FormControl'
// import logo from '../logo.svg';

class EventCard extends React.Component {


  getCurrentBets = () => {
    if (!this.props.user){
      return 1
    }
    return 0
  }

  componentDidMount() {
    // console.log(this.props)
  }

  genOutcomes = () => {
    // return <div></div>
    if (!this.props.user){
      return this.props.eventData.outcomes.map(outcome =>
        <div key={outcome.id}>
        <h4>{outcome.name} {outcome.prediction_value}</h4>
      </div>)
    }
    return this.props.eventData.outcomes.map(outcome =>
      <div key={outcome.id}>
      <h4>{outcome.name} {outcome.prediction_value}</h4>
      <Form inline onSubmit={(event) => this.props.placeBet(event)} >
      <FormControl type="text" defaultValue="100" />
      <Button variant="outline-success" type="submit">PlaceBet</Button>
    </Form>
    </div>)
  }

  render(){
    const eventData = this.props.eventData
  	return (
      <Card style={{ width: '18rem' }} key={this.key}>
        <Card.Body>
          <Card.Title>{eventData.title}</Card.Title>
          <Card.Text>
            {eventData.description}
          </Card.Text>
          Make prediction (chance listed)
          {this.genOutcomes()}
        </Card.Body>
      </Card>
  	);
  }

};

export default EventCard;
