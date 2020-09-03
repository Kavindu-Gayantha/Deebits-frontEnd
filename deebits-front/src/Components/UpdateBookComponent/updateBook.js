import React, { Component } from 'react';
import axios from 'axios';
import bookService from '../../service/bookService';

class UpdateBook extends Component{
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            name:'',
            category:''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.updateBook = this.updateBook.bind(this);
    }
    componentDidMount(){
        bookService.getBookById(this.state.id).then( (res) =>{
            let book = res.data;
            this.setState({
                name: book.name,
                category: book.category,
                id:book.id
            });
        });

    }
    updateBook = (e) => {
        e.preventDefault();
        let book = {id: this.state.id, name: this.state.name, category: this.state.category};
        console.log('book => ' + JSON.stringify(book));
        console.log('id => ' + JSON.stringify(this.state.id));
        BookService.updateBook(book, this.state.id).then( res => {
            this.props.history.push('/books');
        });
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
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Book</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Book Id: </label>
                                            <input placeholder="Book Id" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Book Name: </label>
                                            <input placeholder="Book Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Category: </label>
                                            <input placeholder="Book Category" name="category" className="form-control" 
                                                value={this.state.category} onChange={this.changeCategoryHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateBook}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}
export default UpdateBook;