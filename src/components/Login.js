import React from "react";
import Form from 'react-bootstrap/lib/Form'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'


class LoginOut extends React.Component {


  genLoginOut = () => {
    if (this.props.user){
      return (<Button onClick={this.props.logoutFn} variant="outline-success">LogOut</Button>)
    }
    return (<Form inline>
      <FormControl type="text" placeholder="Username" className="mr-sm-2" />
      <Button onClick={this.props.loginFn} variant="outline-success">Login</Button>
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

export default LoginOut;
