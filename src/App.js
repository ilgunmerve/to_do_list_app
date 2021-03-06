import React from 'react';
import './App.scss';
import ToDoApp from './containers/ToDoApp';
import About from './containers/About';
import Nav from './containers/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
        <Router>
            <div className="App">
            <Nav />
            <Switch>
                <Route path='/' exact={true} component={ToDoApp}></Route>
                <Route path='/about' component={About}></Route>
                <Redirect to='/404' />
            </Switch>
            </div>
        </Router>
  );
}

export default App;
