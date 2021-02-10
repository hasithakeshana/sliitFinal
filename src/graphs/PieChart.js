import React ,{useState,useEffect} from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import {getAllTotalPackages} from '../apiRoutes/PackageRoutes';

function CoursesPieChart() {



  const [array1,setArr1] = useState([]);
  const [array2,setArr2] = useState([]);

 

  const  fetchData = async () => {
    try {
        const response = await getAllTotalPackages().then(r => {
         
          console.log('res',r.data.array1);
          console.log('array 2',r.data.array2);
         
         setArr1(r.data.array1);
         setArr2(r.data.array2);
        
        })
        .catch(err => {
         
          });
       
    } catch (e) {
        console.error(e);
    }
};


console.log('arr1',array1);

useEffect(()=>{


  fetchData();
  

  },[]);

  const state = {
    dataPie: {
     // labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
     labels : array2,
      datasets: [
        {
         // data: [300, 50, 100, 40, 120],
         data : array1,
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
            "#AC64AD"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
            "#DA92DB"
          ]
        }
      ]
    }
  }

    return (
      <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
      Special Packages Statistics (Request Count)
    </h2>
        <Pie data={state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  
}

export default CoursesPieChart;