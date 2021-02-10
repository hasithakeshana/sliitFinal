import React  , { useState , useEffect } from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";
import {getAllPackages} from '../apiRoutes/PackageRoutes';
import { useHistory } from 'react-router-dom';

/* retrieve all packages from backend */

const EcommercePage = () => {

    const [courses,setCourses] = useState([]);

    const history = useHistory();

    const  fetchData = async () => {
      try {
          const response = await getAllPackages().then(r => {
           
            console.log('res',r.data);
            const lists = Array.from(r.data.pack);
            //const peopleArray = Object.values(r.data)
            setCourses(r.data.pack);
          
          })
          .catch(err => {
           
            });
         
      } catch (e) {
          console.error(e);
      }
  };

  console.log('cou',courses);

  const handleClick = (id) => {

  const token = localStorage.getItem('jwtToken');

    if(token === null || token === undefined){
     
      history.push("/login");
      console.log('need to login');
    }
    else{

      history.push("/booknow?"+"productId="+id);
      console.log('clickeddd',id);

    }

}
   // Pass useEffect a function
   
    useEffect(()=>{
  
  
    fetchData();
    
  
    },[]);



  return (
    
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Food and Nutrition Packages
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
                  <h5>{item.category}</h5>
                </a>
                <h5>
                  <strong>
                    <a href="#!" className="dark-grey-text">
                      {item.name}{" "}
                      <MDBBadge pill color="danger">
                        NEW
                      </MDBBadge>
                    </a>
                  </strong>
                </h5>
                <br></br>
                <h6 className="font-weight-bold blue-text">
                  <strong>LKR {item.fee} . 00</strong>
                </h6>
              </MDBCardBody>
            </MDBCard>
            </div>
            <br></br>
          </MDBCol>
          
          )
      }

    </MDBRow>

    </section>
  );
}

export default EcommercePage;