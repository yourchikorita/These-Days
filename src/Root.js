import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import SignIn from './components/SignIn/index';
import Home from './components/Home/index';
import WriteMyDiary from './components/WriteMyDiary';
import ReadMyDiary from './components/ReadMyDiary';
import ReadOpenDiary from './components/ReadOpenDiary';
import WriteOpenDiary from './components/WriteOpenDiary';

const Root = ({ store }) => (
   <Provider store={store}>
    <BrowserRouter>
    <Switch>
    <div>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route path="/home" component={Home} />
      <Route path="/write-my-diary" component={WriteMyDiary}/>
      <Route path="/read-my-diary" component={ReadMyDiary}/>
      <Route path="/write-open-diary" component={WriteOpenDiary}/>
      <Route path="/read-open-diary" component={ReadOpenDiary}/>
    </div>
      </Switch>
    </BrowserRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root