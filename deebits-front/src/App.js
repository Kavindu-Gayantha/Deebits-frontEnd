import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Button, Checkbox, Form } from 'semantic-ui-react'
import Header from './Components/Header/header';
// import Form from './Components/FormComponent/form'
import FormHandler from './Components/FormComponent/form';
import {Divider} from 'semantic-ui-react';
const App=()=>{
  
return(
  <div>
    {/* header imported */}
      <Header></Header>  
      <FormHandler></FormHandler>
      <hr></hr>
  </div>
);
}
export default App;
