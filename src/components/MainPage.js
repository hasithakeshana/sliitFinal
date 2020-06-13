import React, { Component } from 'react'

import LineChart from './LineChart';
import PieChart from './PieChart';
import NavBar from './NavBar';
import Grid from './Grid';
import Projects from './TravelProjects';
import Images from './Images';
import Landing from '../landingPage/landing';

import back from './back.css';

export class MainPage extends Component {
    render() {
        return (
            <div>
            <br></br>
            <br></br>
            <br></br>
           
            <Images></Images>
             
             <Grid></Grid>
           
         
           
           
            </div>
        )
    }
}

export default MainPage
