import React, { Component } from 'react'

import LineChart from './LineChart';
import PieChart from './PieChart';
import NavBar from './NavBar';
import Grid from './Grid';
import Projects from './TravelProjects';
import Images from './Images';
import Landing from '../landingPage/landing';
import Courses from './Courses';
import back from './back.css';
import Book from './BookCourse';

export class MainPage extends Component {
    render() {
        return (
            <div>
            <br></br>
            <br></br>
            <br></br>
           
            <Images></Images>
             
            <Courses></Courses>
         
           
           
           
            </div>
        )
    }
}

export default MainPage
