import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead , MDBBtn } from 'mdbreact';

const BasicTable = (props) => {
  // console.log('props',props.packs);
  return (
    <MDBTable>
      <MDBTableHead color="primary-color" textWhite>
        <tr>
          <th>City</th>
          <th>Destination</th>
          <th>Distance</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          props.packs.map(item=>
            <tr>
          <td>{item.city}</td>
          <td>{item.destination}</td>
          <td>{item.distance}</td>
          <td>{item.price}</td>
          <td><MDBBtn gradient="purple">Edit</MDBBtn></td>
          <td><MDBBtn gradient="peach" onClick = {() => props.deletePack(item._id)} >Remove</MDBBtn></td>
       
        </tr>
          )
      }
      </MDBTableBody>
    </MDBTable>
  );
}

export default BasicTable;