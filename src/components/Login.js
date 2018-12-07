import React from "react";
import Form from 'react-bootstrap/lib/Form'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'


class Login extends React.Component {


  genLoginOut = () => {
    if (this.props.user){
      return 1
    }
    return (<Form inline>
      <FormControl type="text" placeholder="Username" className="mr-sm-2" />
      <Button variant="outline-success">Login</Button>
    </Form>)
  }

  render(){
  	return (
  	  <div>
      {this.genLoginOut()}
  	  </div>
  	);
  }

};

export default Login;
