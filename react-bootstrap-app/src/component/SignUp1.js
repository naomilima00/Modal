import {React, useState} from "react";
import {Button, Modal, CloseButton} from "react-bootstrap";
import styles from "./ModalComp.css";
import { useFormik } from 'formik';
function SignUp1(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const formik = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Button
        </Button>
  
        <Modal 
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
          aria-labelledby="contained-modal-title-vcenter"

        >
          <div className = "ModalContents">
          <Modal.Header closeButton>
            <Modal.Title class="title">Sign Up</Modal.Title>
            <div class="description">Let's get to know you!</div>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName"></label>
            <input
                id="firstName"
                name="firstName"
                placeholder="first name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
        
            <label htmlFor="lastName"></label>
            <input
                id="lastName"
                placeholder="last name"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
        
            <label htmlFor="email"></label>
            <input
                id="email"
                name="email"
                placeholder="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            </form>
          </Modal.Body>
          
          <Modal.Footer>
          <button className="continue">Continue</button>
          </Modal.Footer>
          </div>
        </Modal>
      </>
    );
  }
  
  export default SignUp1;