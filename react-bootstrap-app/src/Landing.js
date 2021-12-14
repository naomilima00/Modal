import React from 'react'
import {Row, Col, Container, Image, Jumbotron, Button} from 'react-bootstrap'
import ModalSignIn from './component/ModalSignIn';
import styles from "./Landing.css";

function Landing() {
    return (
    <div>
     <Jumbotron fluid class="jumbotron">
      <Container fluid>
        <h1 class="home-title">Welcome to Cookbook.</h1>
        <p class="home-title"> Find your next meal.</p>
            <ModalSignIn/>
      </Container>
    </Jumbotron>
    </div>
    );
}

export default Landing;
      