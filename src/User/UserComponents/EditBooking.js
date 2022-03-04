import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import '../UserStyles/UserApp.css'

function EditBooking() {
    const navigate = useNavigate();
    const location = useLocation();
    const [state, setState] = useState(location.state);
    const handleUpdate = (e) => {
      e.preventDefault();
      console.log("submitted");
      axios
        .put(`http:// /${state.id}`, state)
        .then((data) => {
          navigate("/MyBooking");
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const changeState = (value, name) => {
      setState({ ...state, [name]: value });
    };
    console.log(navigate);
  /*  const {
      bookCenterName,
      bookCenterPhone,
      bookCenterAddress,
      bookCenterImage,
      bookCenterEmail,
    } = state;
    */
    return (
      <div className="UpdateEdit ">
        <Form className="formEdit">
          <h2>Update Service</h2>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <br></br>
            <Form.Control
              name=""
              value={""}
              onChange={(e) => changeState(e.target.value, e.target.name)}
              type="text"
              placeholder="Enter Name"
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Model Number</Form.Label>
            <br></br>
            <Form.Control
              name=""
              type="text"
              value={""}
              onChange={(e) => changeState(e.target.value, e.target.name)}
              placeholder="Change Model Number"
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Date</Form.Label>
            <br></br>
            <Form.Control
              name=""
              type="text"
              value={""}
              onChange={(e) => changeState(e.target.value, e.target.name)}
              placeholder="Change Date"
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Number</Form.Label>
            <br></br>
            <Form.Control
              name=""
              type="text"
              value={""}
              onChange={(e) => changeState(e.target.value, e.target.name)}
              placeholder="Change Number "
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Timmings</Form.Label>
            <br></br>
            <Form.Control
              name=""
              type="text"
              value={""}
              onChange={(e) => changeState(e.target.value, e.target.name)}
              placeholder="Change Timmings"
            />
          </Form.Group>
  
          <Button variant="danger" type="submit" onClick={handleUpdate}>
            Submit
          </Button>
          <Link to="/MyBooking">
            <Button variant="danger" className="deleteCard">
              Back
            </Button>
          </Link>
        </Form>
      </div>
    );
}

export default EditBooking