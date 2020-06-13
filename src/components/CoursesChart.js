import React,{useState,useEffect} from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import {getAllTotalCourses} from '../apiRoutes/CoursesRoutes';
function Cour() {


    const [array1,setArr1] = useState([]);
    const [array2,setArr2] = useState([]);

   

    const  fetchData = async () => {
      try {
          const response = await getAllTotalCourses().then(r => {
           
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
    dataHorizontal: {
      
      labels : array2,
      datasets: [
        {
          label: 'No of Students',
         // data: [20, 33, 55, 12, 86, 23, 14],
         data: array1,
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }
      ]
    }
  };

  
    return (
      <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
      Courses Stats View 02
    </h2>
        <HorizontalBar
          data={state.dataHorizontal}
          options={{ responsive: true }}
        />
      </MDBContainer>
    );
  
}

export default Cour;