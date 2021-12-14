import {React, useState} from "react";
import {Button, Modal, CloseButton, Container, Row, Col} from "react-bootstrap";
// import styles from "./ModalComp.css";

function ModalComp(){
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
            <div class="description">Select any allergies and dietary restrictions you may have</div>
          </Modal.Header>

          <Modal.Body>
              <button className="small-button">Peanuts</button>
              <button className="small-button">Eggs</button>
              <button className="small-button">Shellfish</button>
              <button className="small-button">Dairy</button>
              <button className="small-button">Nuts</button>
              <button className="small-button">Fish</button>
              <button className="small-button">Wheat</button>
              <button className="small-button">Soy</button>
            
              <button className="large-button">Lactose Intolerant</button>
              <button className="large-button">Vegetarian</button>
              <button className="large-button">Gluten Free</button>
              <button className="large-button">Vegan</button>
              <button className="large-button">Diabetic</button>
          </Modal.Body>
          
          <Modal.Footer>
          <button className="continue">Continue</button>
          </Modal.Footer>
          </div>
          
        </Modal>
        
      </>
    );
  }
  
  export default ModalComp;