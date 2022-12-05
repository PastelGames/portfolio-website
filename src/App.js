import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import "98.css";
import './App.css';
import {Home} from './Home';
import {Games} from './Games';
import {StatementOfInterdisciplinarity} from './StatementOfInterdisciplinarity';
//import {Programming} from './Programming';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';

function App() {

  return (
    <div className="app" style={{height: "100%", width: "100%", flex:1,
      backgroundColor: "#ffccff"}}>
      <React.Fragment>
        <Layout>
          <Router basename={process.env.PUBLIC_URL + '/'}>
            <NavigationBar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/games" component={Games} />
              <Route path="/statement-of-interdisciplinarity" component={StatementOfInterdisciplinarity} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    </div>
  )
}


export default App;