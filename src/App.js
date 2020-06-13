import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import LineChart from './components//LineChart';
import PieChart from './components/PieChart';

import TestPage from './trial/TestPage';
import Projects from './components/TravelProjects';

import Landing from './landingPage/landing';
import Sample from './components/Sample';
import BookNow from './components/BookCourse';


class App extends Component {
  render() {
    return (
     <div>
    <Router>
    <NavBar></NavBar>
     <Switch>
          <Route exact path="/" component={MainPage}/>
            
          
          <Route exact path="/projects" component={Projects}/>
           
         
          <Route exact path="/booknow" component={BookNow}/>

          <Route exact path="/testPage" component={TestPage}/>

            
          
        </Switch>
      
    </Router>
       </div>
      
    );
  }
}

export default App;
