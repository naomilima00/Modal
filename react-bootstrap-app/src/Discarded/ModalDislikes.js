import {React, useState} from "react";
import {Button, Modal, CloseButton} from "react-bootstrap";

/*TO DO
Fix title and description alignment */
function ModalDislikes(){
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
            <div class="description">Select your food dislikes</div>
          </Modal.Header>

          <Modal.Body>
              <button className="small-button-spaced">Spicy</button>
              <button className="small-button-spaced">Sea Food</button>
              <button className="small-button-spaced">Pastry</button>
              <button className="small-button-spaced">Fried Food</button>
              <button className="small-button-spaced">Vegetables</button>
              <button className="small-button-spaced">Carbonated</button>
              <button className="small-button-spaced">Citrus </button>
              <button className="small-button-spaced">Alcohol</button>
              <button className="small-button-spaced">Caffeine</button>
              <button className="small-button-spaced">High Sodium</button>
          </Modal.Body>
          
          <Modal.Footer>
          <button className="continue">Continue</button>
          </Modal.Footer>
          </div>
        </Modal>
      </>
    );
  }
  
  export default ModalDislikes;