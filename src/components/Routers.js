import React from 'react';
import '../style/SignIn.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import WriteMyDiary from './WriteMyDiary';
import ReadMyDiary from './ReadMyDiary';
import ReadOpenDiary from './ReadOpenDiary';
import WriteOpenDiary from './WriteOpenDiary';
import {
  BrowserRouter as Router,
  Route,
  Link,Switch
} from 'react-router-dom'


const Routers = () => (
  <Router>
  
  <Switch>
      <Route exact path="/" component={SignIn}/>
      <Route path="/write-my-diary" component={WriteMyDiary}/>
      <Route path="/read-my-diary" component={ReadMyDiary}/>
      <Route path="/write-open-diary" component={WriteOpenDiary}/>
      <Route path="/read-open-diary" component={ReadOpenDiary}/>
      <Route path="/sign-up" component={SignUp}/>
      <Route path="/sign-in" component={SignIn}/>
      <Route path="/home" component={Home}/>

  </Switch> 
   
  </Router>
  
  
)





export default Routers;
