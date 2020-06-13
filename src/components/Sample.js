import React, { Component } from 'react'

import LineChart from './LineChart';
import PieChart from './PieChart';
import NavBar from './NavBar';
import Grid from './Grid';
import Projects from './TravelProjects';
import Images from './Images';
import Landing from '../landingPage/landing';

import CoursesChart from './CoursesChart';

export class Sample extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <PieChart></PieChart>
                    </div>
                    <div className="col-md-6">
                        <CoursesChart></CoursesChart>
                    </div>
                    
                   
                </div>
                
            </div>
        )
    }
}

export default Sample
