import React, { Component } from 'react';
import axios from 'axios';
import BookService from '../../service/bookService';

class GetBook extends Component{
    constructor(props){
        super(props)
        this.state ={
            id:this.props.match.params.id,
            book:{}
        }
    }

    componentDidMount(){
        BookService.getBookById(this.state.id).then(res=>{
            this.setState({book:res.data});
        })
    }

    render(){
        return(
            <div>
            <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Book Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Book Id: </label>
                            <div> { this.state.book.id }</div>
                        </div>
                        <div className = "row">
                            <label> Book Name: </label>
                            <div> { this.state.book.name }</div>
                        </div>
                        <div className = "row">
                            <label> Book Category: </label>
                            <div> { this.state.book.category}</div>
                        </div>
                    </div>

                </div>
            </div>
        );        
    }
}

export default GetBook;