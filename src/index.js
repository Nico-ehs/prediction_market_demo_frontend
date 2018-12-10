import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserPage from './containers/UserPage';
import * as serviceWorker from './serviceWorker';
import {Route, Link, Switch} from 'react-router-dom'


import { BrowserRouter as Router} from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));

const Home = () => {
  return (
    <div>
      <App />
    </div>
  );
};
//
const UserPredictions = () => {
  return (
    <div>
      <UserPage />
    </div>
  );
};
//
// const SignUp = () => {
//   return (
//     <div>
//       <Signup />
//     </div>
//   );
// };
//
//
ReactDOM.render((
  <Router>

      <Switch>
        <Route path="/" exact render={Home} />
        <Route path="/user_predictions" render={routerProps => <UserPage {...routerProps}/>} />
      </Switch>

  </Router>),
  document.getElementById('root')
);


serviceWorker.unregister();
