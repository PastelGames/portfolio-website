import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "98.css";
import './App.css';
import {Home} from './Home';
import {Games} from './Games';
import {Programming} from './Programming';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import Particles from 'react-particles-js';
import Data from "./particles-params.json";

function App() {

  return (
    <div className="app">
      <React.Fragment>
        {/*<!-- particles -->*/}
        <Particles params={Data} style={{
          position: "fixed",
          zIndex: "-1",
          backgroundColor: "#ffccff"
        }} />
        <Layout>
          <Router basename={process.env.PUBLIC_URL}>
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
    </div>
  )
}

export default App;