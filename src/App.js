import React, {useState} from 'react';
import Tweet from './Tweet';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "98.css";
import {Home} from './Home';
import {Games} from './Games';
import {Programming} from './Programming';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';

function App() {

  return (
    <React.Fragment> 
      <Layout>
        <Router>
          <NavigationBar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/games" component={Games} />
            <Route path="/programming" component={Programming} />x
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  )
}

export default App;