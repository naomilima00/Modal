import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ModalSignIn from './component/ModalSignIn';
import Landing from './Landing';
import "./global.css";
import ModalComp from "./Discarded/ModalComp";
import ModalDislikes from "./Discarded/ModalDislikes";
// import FinishSignUp from './component/Discarded/FinishSignUp';
import SignUp1 from './Discarded/SignUp1';
import ModalGoals from './Discarded/ModalGoals';
// import { useFormik } from 'formik';
// import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ModalSignIn/>
   </div> 
  )
}

export default App;
