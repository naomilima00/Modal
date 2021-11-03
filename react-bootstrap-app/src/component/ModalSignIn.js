import {React, useState} from "react";
import {Button, Modal, CloseButton, Form} from "react-bootstrap";
import styles from "./ModalSignIn.css";
import logo from "./logo.svg";
import Image from 'react-bootstrap/Image';

/*TO DO:
fix image, its broken
fix title positioning
make form with */
function ModalSignIn(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
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
          <div class="logo-image"><Image src="{logo}" /></div>

          </Modal.Header>

          <Modal.Body>
          <Modal.Title class="title">Welcome to Cookbook</Modal.Title>
          <Form>
            <div className="justify-content-center">
            <Form.Group className="input" controlId="exampleForm.ControlInput1">
                <Form.Control type="username" placeholder="username" />
            </Form.Group>
            <Form.Group className="input" controlId="exampleForm.ControlInput">
                <Form.Control type="password" placeholder="password" />
            </Form.Group>
            </div>
        </Form>
          </Modal.Body>
          
          <Modal.Footer>
              <div className="login-group">
              <button className="large-button-login">Login</button>
              <button className="large-button-login">Sign Up</button>
              <div class="forgot-password">Forgot Password?</div>
              </div>
          </Modal.Footer>
          </div>
        </Modal>
      </>
    );
  }
  
  export default ModalSignIn;