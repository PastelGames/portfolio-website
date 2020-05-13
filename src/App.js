import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "98.css";
import {Home} from './Home';
import {Games} from './Games';
import {Programming} from './Programming';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import Particles from 'react-particles-js';
import {StickyContainer, Sticky} from 'react-sticky';
import Data from "./particles-params.json";

function App() {

  return (
    <React.Fragment>
      <Particles params={Data} style={{
        position: "fixed",
        zIndex: "-1"
      }}/>
      <Layout>
        <Router>
          <NavigationBar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/games" component={Games} />
            <Route path="/programming" component={Programming} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  )
}

export default App;