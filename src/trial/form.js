import React, { useState , useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import {addTravelPackage,getAllPackages,removePackage} from '../apiRoutes/TravelPackRoutes';
import Table from './table';

const FormPage = () => {

  const [city,setCity] = useState('');
  const [destination,setDestination] = useState('');
  const [distance,setDistance] = useState(0);
  const [price,setPrice] = useState(0);
  const [packages,setPackages] = useState([]);


  const  fetchData = async () => {
    try {
        const response = await getAllPackages().then(r => {
         
          console.log('res',r.data);
          setPackages(r.data);
        
        })
        .catch(err => {
         
          });
       
    } catch (e) {
        console.error(e);
    }
};

  useEffect(()=>{


  fetchData();
  

  },[]);

 // console.log('state',packages);

  const submit = async () =>{

    console.log('data',city,destination,distance,price);

    const response = await addTravelPackage({city,destination,distance,price}).then(()=>{

      fetchData();

    });

    console.log('submit response frontend',response);

   
   
  }

const deletePack = async (id)=>{

  console.log('id',id);

  const remove = removePackage(id).then((res)=>{

    console.log('remove res',res);
    fetchData();
  });

  console.log('remove response frontend',remove)

  
}

    
  return (
    <div>
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>ADD A PACKAGE</strong>
                </h3>
              </div>
              <MDBInput
                label="Enter City"
                group
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
              />
              <MDBInput
                label="Enter Destination"
                group
                containerClass="mb-0"
                value={destination}
                onChange={e => setDestination(e.target.value)}
              />
              <MDBInput
              label="Select Distance"
              group
              containerClass="mb-0"
              type="number"
              value={distance}
              onChange = {e => setDistance(e.target.value)}
            />
            <MDBInput
              label="Total Charge Per Trip"
              group
              containerClass="mb-0"
              type="number"
              value={price}
              onChange = {e => setPrice(e.target.value)}
            />

            <br></br>
              
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  onClick={() => submit()} // submit - only submit correct
                >
                  Add A Package
                </MDBBtn>
              </div>
              
             
            </MDBCardBody>
          
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <br></br>
    <Table packs={packages}  deletePack={deletePack}></Table>
    </div>
  );
};

export default FormPage;