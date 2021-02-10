import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import PieChart from "./PieChart";

const gridExamplesPage = () => {
  return (
    <MDBContainer className="w-100 p-3"
    >
      <MDBRow  >
        <MDBCol>

      <p></p>

        </MDBCol>
        <MDBCol size="10" > <PieChart></PieChart> </MDBCol>
        
      </MDBRow>

      
    </MDBContainer>
  );
}

export default gridExamplesPage;