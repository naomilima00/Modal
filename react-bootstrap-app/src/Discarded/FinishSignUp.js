import {React, useState} from "react";
import {Button, Modal, CloseButton} from "react-bootstrap";
import styles from "./ModalComp.css";

function FinishSignUp(){
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
          <Modal.Title class="title-done">All done!</Modal.Title>
            <div class="description-done">You're now ready to start cooking!</div>
          </Modal.Header>

          <Modal.Body>
         
          </Modal.Body>
          
          <Modal.Footer>
          <button className="continue">Continue</button>
          </Modal.Footer>
          </div>
        </Modal>
      </>
    );
  }
  
  export default FinishSignUp;