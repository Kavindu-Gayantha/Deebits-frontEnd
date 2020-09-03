import React, { Component } from 'react';
import axios from 'axios';
import FormHandler from '../FormComponent/form';

class DeleteBook extends Component{
    state ={
        id:'',
        name:'',
        category:''
    }
    handleChange = event =>{
        this.setState(
            {
                id:event.target.value,
                name:event.target.value,
                category:event.target.value
            }
        );
        
    }
    handleSubmit =event=>{
        event.preventDefault();

        axios.delete(`http://localhost:8081/api/deleteBook/${this.state.id}`)
            .then(res=>{
                console.log(res);
                console.log(res.data);
            })
    }

    render(){
        return(
            <div>
                <FormHandler></FormHandler>
            </div>
        );
    }
}