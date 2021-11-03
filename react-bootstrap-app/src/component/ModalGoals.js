import {React, useState} from "react";
import {Button, Modal, CloseButton} from "react-bootstrap";
import styles from "./ModalComp.css";

function ModalGoals(){
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
            <Modal.Title class="title">Sign Up</Modal.Title>
            <div class="description">Select your goals</div>
          </Modal.Header>

          <Modal.Body>
              <button className="large-button-spaced">Weight Loss</button>
              <button className="large-button-spaced">Maintain Weight</button>
              <button className="large-button-spaced">Mass Gaining</button>
              <button className="large-button-spaced">Fasting</button>
        
          </Modal.Body>
          
          <Modal.Footer>
          <button className="continue">Submit</button>
          </Modal.Footer>
          </div>
        </Modal>
      </>
    );
  }
  
  export default ModalGoals;