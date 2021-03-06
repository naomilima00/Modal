import {React, useState, state} from "react";
import {Button, Modal, CloseButton, Row, Form, Col, Container, Image} from "react-bootstrap";
import {Table} from 'react-bootstrap';
import {Formik} from 'formik';
import styles from "./ModalSignIn.css";

function ModalSignIn(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
            return (   
              <>
                <Button class="btn" onClick={handleShow}>
                  Start Here
                </Button>
                <Container fluid lg = {1} md = {1} sm = {1} xs = {1}>
                  <Row>
                    <Col>
                      <Modal 
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        centered
                        aria-labelledby="contained-modal-title-vcenter"
                      >
                      <div>
                        <Modal.Header closeButton className="modal-header-login">
                          <div><Image src="./logo.png" className="img-fluid"/></div>
                        <Modal.Title class="title-login">Welcome to Cookbook</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="modal-body-login">
                          <Form>
                            <div className="login">
                              <Form.Group className="input" controlId="exampleForm.ControlInput1">
                                  <Form.Control type="username" placeholder="username" />
                              </Form.Group>
                                
                              <Form.Group className="input" controlId="exampleForm.ControlInput">
                                  <Form.Control type="password" placeholder="password"/>
                              </Form.Group>
                                  
                            </div>
                            <div className="login-button">
                                <button className="large-button-login" type="submit">Login</button>
                                <button className="large-button-login">Sign Up</button>
                            </div>
                          </Form>
                        </Modal.Body>
                            
                        <Modal.Footer className="modal-footer-login">
                            <div class="forgot-password">Forgot Password?</div>
                        </Modal.Footer>
                      </div>
                      </Modal>
                    </Col>
                  </Row>
                </Container>
              </>
            );
          
        
        }
  export default ModalSignIn;