import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ModalComp from "./component/ModalComp";
import ModalDislikes from "./component/ModalDislikes";
import ModalGoals from "./component/ModalGoals";
import ModalSignIn from './component/ModalSignIn';
import FinishSignUp from './component/FinishSignUp';
import SignUp1 from './component/SignUp1';
import { useFormik } from 'formik';

function App() {
  return (
    <div className="App">
      <ModalGoals/>
      {/* <SignUp1/> */}
      {/* <FinishSignUp/> */}
      {/* <ModalSignIn/> */}
      {/* <ModalDislikes/> */}
   </div> 
  )
}

export default App;
