import React, { Component } from 'react';

import './App.css';

import Header from './Components/Header/header';

import {Modal,ModalBody,ModalHeader,ModalFooter,Table,Button,FormGroup,Label, Input} from 'reactstrap';
import axios from 'axios';




class App extends Component{

  state ={
    books:[],
    newBookData:{
      id:'',
      name:'',
      category:''
    },
    editBookData:{
      id:'',
      name:'',
      category:''
    },
    newBookModal:false,
    editBookModal:false
  }

  
  componentWillMount(){
    this._refreshBooks();
  }
  toggleNewBookModal(){
    this.setState({
      newBookModal:!this.state.newBookModal
    })
  
  }
  toggleEditBookModal(){
    this.setState({
      editBookModal:!this.state.editBookModal
    })
  
  }
  //add a book
  addBook(){
    axios.post(`http://localhost:8081/api/addBook`,this.state.newBookData).then((response)=>{
      console.log(response.data);
      let {books} = this.state;
      books.push(response.data);
      this.setState({books,newBookModal:false,newBookData:{
        id:'',
        name:'',
        category:''
      }});
    })
  }

  //edit book 
  editBook(id,name,category){
    // console.log(name);
    this.setState({
      editBookData:{id,name,category},
      editBookModal:!this.state.editBookModal
    });
  }

//update book
  updateBook(){
    let {name, category} = this.state.editBookData;

    axios.put('http://localhost:8081/api/updateBook'+this.state.editBookData.id,{
      name,category
    }).then((response)=>{
      this._refreshBooks();
      console.log(response.data);
    })
    this.setState({
      editBookModal:false ,
      editBookData:{
        id:'',
        name:'',
        category:''
      }
    })
  }

  //delete method
  deleteBook(id){
    axios.delete('http://localhost:8081/api/deleteBook' +id).then((response)=>{
      this._refreshBooks();
    })

  }
  _refreshBooks(){
    axios.get('http://localhost:3000/api/books').then((Response)=>{
      this.setState({
        books:Response.data
      })
    })
  }
 

  render(){
    let books=this.state.books.map((book)=>{
        return(
          <tr key={book.id}>
            <td>
              {book.id}
            </td>
            <td>
              {book.name}
            </td>
            <td>
              {book.category}
            </td>
            <td>
              <Button color="success" size="sm" className="mr-2" onClick={this.editBook.bind(this,book.id,book.name,book.category)}>Edit</Button>
              <Button color="danger" size="sm" onClick={this.deleteBook.bind(this,book.id,book)}>Delete</Button>

            </td>
          </tr>
        );
    });
      return(
        <div>
              <Header></Header>  
              

            <div className="App container">
            <Button color="primary" onClick={this.toggleNewBookModal.bind(this)}>Add Book</Button>
              <Modal isOpen={this.state.newBookModal} toggle={this.toggleNewBookModal.bind(this)}>
                <ModalHeader toggle={this.toggleNewBookModal.bind(this)}>Add a New Book</ModalHeader>
                <ModalBody>
                    <FormGroup>
                      <Label for="Book ID">Book Id</Label>
                      <Input  id="id" valid={this.state.newBookData.id} onChange={(e)=>{
                        let {newBookData} = this.state;
                        newBookData.id=e.target.value;
                        this.setState({newBookData});
                      }} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="Book Name">Book Name</Label>
                      <Input  id="name" value={this.state.newBookData.name} onChange={(e)=>{
                        let {newBookData} = this.state;
                        newBookData.name= e.target.value;
                        this.setState({newBookData});
                      }} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="Book Category">Book Category</Label>
                      <Input  id="category" value={this.state.newBookData.category} onChange={(e)=>{
                        let {newBookData} = this.state;
                        newBookData.category= e.target.value;
                        this.setState({newBookData});
                      }} />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.addBook.bind(this)}>Add Book</Button>{' '}
                  <Button color="secondary" onClick={this.toggleNewBookModal.bind(this)}>Cancel</Button>
                </ModalFooter>
              </Modal>


              {/* edit book model toggle menu */}



              <Modal isOpen={this.state.editBookModal} toggle={this.toggleEditBookModal.bind(this)}>
                <ModalHeader toggle={this.toggleEditBookModal.bind(this)}>Edit Book</ModalHeader>
                <ModalBody>
                    <FormGroup>
                      <Label for="Book ID">Book Id</Label>
                      <Input  id="id" valid={this.state.editBookData.id} onChange={(e)=>{
                        let {editBookData} = this.state;
                        editBookData.id=e.target.value;
                        this.setState({editBookData});
                      }} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="Book Name">Book Name</Label>
                      <Input  id="name" value={this.state.editBookData.name} onChange={(e)=>{
                        let {editBookData} = this.state;
                        editBookData.name= e.target.value;
                        this.setState({editBookData});
                      }} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="Book Category">Book Category</Label>
                      <Input  id="category" value={this.state.editBookData.category} onChange={(e)=>{
                        let {editBookData} = this.state;
                        editBookData.category= e.target.value;
                        this.setState({editBookData});
                      }} />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.updateBook.bind(this)}>Update Book</Button>{' '}
                  <Button color="secondary" onClick={this.toggleEditBookModal.bind(this)}>Cancel</Button>
                </ModalFooter>
              </Modal>


              <Table>
                <thead>
                  <tr>
                    <th>
                      Book ID
                    </th>
                    <th>
                      Book Name
                    </th>
                    <th>
                      Book Category
                    </th>
                  </tr>
                </thead>
                <tbody>

                  {books}
                </tbody>
              </Table>
            </div>            
            
        </div>
      );
      }
    };
export default App;
