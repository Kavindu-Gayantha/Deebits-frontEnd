import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
// import { Button, Checkbox, Form } from 'semantic-ui-react'
import Header from './Components/Header/header';
import ListAllBooks from './Components/ListAllBooksComponent/listAllBooks';
import GetBook from './Components/GetBookComponent/getBook';
import AddBook from './Components/AddBookComponent/addbook';
import UpdateBook from './Components/UpdateBookComponent/updateBook';
// import {Divider} from 'semantic-ui-react';
function App(){
  
return(
  <div>
      
      <Router>
        <Header></Header>  
        <div className="container">
        <Switch> 
          <Route path = "/" exact component = {ListAllBooks}></Route>
          <Route path = "/books" component = {ListAllBooks}></Route>
          <Route path = "/add-book/:id" component = {AddBook}></Route>
          <Route path = "/view-book/:id" component = {GetBook}></Route>
          <Route path = "/update-book/:id" component = {UpdateBook}></Route>
        </Switch>
        </div>
      </Router>
  </div>
);
}
export default App;
