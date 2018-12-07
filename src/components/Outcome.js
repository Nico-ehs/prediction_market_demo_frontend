import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button'

class Outcome extends React.Component {





  render(){

  	return (
      <Button key={this.key}  onClick={this.props.ouctomeButtonClick} variant="primary">{outcome.name}</Button>
  	);
  }

};

export default Outcome;
