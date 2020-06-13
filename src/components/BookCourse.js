import React    , {useEffect, useState}  from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";
import queryString from 'query-string';
import {getUniqueCourse,bookCourse} from '../apiRoutes/CoursesRoutes';
import jwt_decode from 'jwt-decode';


const BookCourse = (props) => {

    const [course,setCourse] = useState({});

    const  fetchData = async (id) => {
        try {
            console.log('fetch',id);
            const response = await getUniqueCourse(id).then((res)=>{
                    setCourse(res.data.course);
                    console.log('resssssss',res.data.course.fee);
            });
            console.log('unique',response);
           
        } catch (e) {
            console.error(e);
        }
    };
    console.log('coursesssssssssss',course.name);

    useEffect(() => {
        const values = queryString.parse(props.location.search);
      console.log('query param',values.productId);
       fetchData(values.productId);
    }, [props.location]);

    const submit = async (id) =>{


       const token = localStorage.getItem('jwtToken');
       if(token === null || token === undefined){
     

        console.log('need to login');
      }
      else{
  
        const decodeUser = jwt_decode(token);
        const email = decodeUser.email;
        const userId = decodeUser.id;

        const data = {email,userId,id}
        const res = await bookCourse(data);

        console.log('res bookkig',res);
  
      }
    }

    const back = async ()=>{
        
    }



  return (
    <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
        {course.name}
        </h2>
        <p className="grey-text w-responsive text-center mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          est laborum.
        </p>

        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <img
            src= {"http://localhost:4000/uploads/"+course.image}
              alt=""
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon far icon="chart-bar" size="2x" className="indigo-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">CATEGORY</h5>
                <p className="font-weight-bold">
                    {course.category}
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="music" size="2x" className="pink-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Trainer</h5>
                <p className="font-weight-bold">
                {course.trainer}
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon far icon="smile" size="2x" className="blue-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Scheduled Date</h5>
                <p className="font-weight-bold">
                  {course.date}
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
            <MDBCol md="1" size="2">
              <MDBIcon far icon="smile" size="2x" className="blue-text" />
            </MDBCol>
            <MDBCol md="11" size="10">
              <h5 className="font-weight-bold mb-3">About Course</h5>
              <p className="font-weight-bold">
                {course.description}
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
          <MDBCol md="1" size="2">
            <MDBIcon far icon="smile" size="2x" className="blue-text" />
          </MDBCol>
          <MDBCol md="11" size="10">
            <h5 className="font-weight-bold mb-3">No Of Participants(estimate)</h5>
            <p className="font-weight-bold">
              {course.noOfParticipants}
            </p>
          </MDBCol>
        </MDBRow>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBBtn rounded color="success" onClick={()=>submit(course._id)}>Book Now</MDBBtn>
        <MDBBtn rounded color="success" >Previous Page</MDBBtn>
      </section>
  );
}

export default BookCourse;