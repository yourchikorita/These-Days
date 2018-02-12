import React, { Component } from 'react';
import { Button,form,FormGroup,ControlLabel,FormControl,HelpBlock,Table,responsive } from 'react-bootstrap';
import '../style/SignIn.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import WriteMyDiary from './WriteMyDiary';
import ReadMyDiary from './ReadMyDiary';
import ReadOpenDiary from './ReadOpenDiary';
import {
  BrowserRouter as Router,
  Route,
  Link,Switch
} from 'react-router-dom'


const Routertest = () => (
  <Router>
  
  <Switch>
      <Route exact path="/" component={SignIn}/>
      <Route path="/write-my-diary" component={WriteMyDiary}/>
      <Route path="/read-my-diary" component={ReadMyDiary}/>
      <Route path="/read-open-diary" component={ReadOpenDiary}/>
      <Route path="/sign-up" component={SignUp}/>
      <Route path="/sign-in" component={SignIn}/>
      <Route path="/home" component={Home}/>

  </Switch> 
   
  </Router>
  
  
)



const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>
   <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)




















export default Routertest;
