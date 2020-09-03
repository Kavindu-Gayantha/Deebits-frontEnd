import React, { Component } from 'react';
import axios from 'axios';
import FormHandler from '../FormComponent/form';
import BookService from '../../service/bookService';

class AddBook extends Component{
    constructor(props){
        super(props)
            this.state={
                id:this.props.match.params.id,
                name:'',
                category:''
            }
            this.changeNameHandler = this.changeNameHandler.bind(this);
            this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
            this.saveOrUpdateBook = this.saveOrUpdateBook.bind(this);
        }
    
    componentDidMount(){
        if(this.state.id==='_add'){
            return
        }else{
            BookService.getBookById(this.state.id)
            .then((res)=>{
                let book= res.data;
                this.setState({
                    id:book.id,
                    name:book.name,
                    category:book.category
                });
            })
        }
    }

    saveOrUpdateBook =(e)=>{
        e.preventDefault();
        let book ={
            id:this.state.id,
            name:this.state.name,
            category:this.state.category
        };
        console.log(`book =>` +JSON.stringify(book));
        if(this.state.id==='_add'){
            BookService.addBook(book).then(res=>{
                this.props.history.push('/books');
            });
        }else{
            BookService.updateBook(book,this.state.id).then(res=>{
                this.props.history.push('/books');
            })
        }
    }
    changeIdHandler= (event) => {
        this.setState({id: event.target.value});
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeCategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }

    cancel(){
        this.props.history.push('/books');
    }

    getTitle(){
        if(this.state.id==='_add'){
            return <h3 className="text-center">Add Book</h3>
        }else{
            return <h3 className="text-center">Update Book</h3>
        }
    }

    render(){
        return(
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Id: </label>
                                            <input placeholder="Id" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Category </label>
                                            <input placeholder="Book Category" name="category" className="form-control" 
                                                value={this.state.category} onChange={this.changeCategoryHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        );
    }

   
}

export default AddBook;