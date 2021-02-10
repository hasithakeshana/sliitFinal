import React, { Component } from 'react'




import Courses from './Packages';
import img1 from '../images/ss.png';
import img2 from '../images/sd.png';
import Sample from './Sample';
import Team from './Team';
import FoodsBlog from './FoodsBlog';
import Footer from './Footer';

export class MainPage extends Component {
    render() {
        return (
            <div>
            
            
           
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
             
            <Courses></Courses>

            <img
              className="d-block w-100"
              src={img2}
              alt="First slide"
            />

            <Team></Team>

            <FoodsBlog></FoodsBlog>
         
           <Footer></Footer>
           
           
            </div>
        )
    }
}

export default MainPage
