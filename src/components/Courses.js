import React  , { useState , useEffect } from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";
import {getAllCourses} from '../apiRoutes/CoursesRoutes';


import { useHistory } from 'react-router-dom';

const EcommercePage = () => {

    const [courses,setCourses] = useState([]);

    const history = useHistory();

    const  fetchData = async () => {
      try {
          const response = await getAllCourses().then(r => {
           
            console.log('res',r.data);
            const lists = Array.from(r.data.course);
            //const peopleArray = Object.values(r.data)
            setCourses(r.data.course);
          
          })
          .catch(err => {
           
            });
         
      } catch (e) {
          console.error(e);
      }
  };

  console.log('cou',courses);

  const handleClick = (id) => {

//console.log('tokenn');


    const token = localStorage.getItem('jwtToken');

    if(token === null || token === undefined){
     

      console.log('need to login');
    }
    else{

      history.push("/booknow?"+"productId="+id);
      console.log('clickeddd',id);

    }

}
  
    useEffect(()=>{
  
  
    fetchData();
    
  
    },[]);



  return (
    
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our bestsellers
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>

      {
        
          courses.map(item=>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <div onClick={()=> handleClick(item._id)}>
            <MDBCard className="align-items-center">
              <MDBCardImage
               src= {"http://localhost:4000/uploads/"+item.image}
                top
                alt="sample photo"
                overlay="white-slight"
              />
              <MDBCardBody className="text-center">
                <a href="#!" className="grey-text">
                  <h5>{item.name}</h5>
                </a>
                <h5>
                  <strong>
                    <a href="#!" className="dark-grey-text">
                      Denim shirt{" "}
                      <MDBBadge pill color="danger">
                        NEW
                      </MDBBadge>
                    </a>
                  </strong>
                </h5>
                <h4 className="font-weight-bold blue-text">
                  <strong>120$</strong>
                </h4>
              </MDBCardBody>
            </MDBCard>
            </div>
          </MDBCol>
          )
      }

      
       
       
       
        
      </MDBRow>
    </section>
  );
}

export default EcommercePage;