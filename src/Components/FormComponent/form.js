import React, { Component } from 'react';
import { Button,Form } from 'semantic-ui-react';

class FormHandler extends Component{

    handleSubmit = event =>{
        this.setState(
            {
                id:event.target.value,
                name:event.target.value,
                category:event.target.value
            }
        );
    return(
        <div className="ui container" >
            <Form className="form" onSubmit={this.handleSubmit}>

                <Form.Field>
                    <label>Book id</label>
                    <input type="text" name="id" placeholder="ID of the book"></input>
                </Form.Field>
  
                <Form.Field>
                    <label>Book name</label>
                    <input type="text" name="name" placeholder="name of the book"></input>
                </Form.Field>

                <Form.Field>
                    <label>Book category</label>
                    <input type="text" name="category" placeholder="category of the book"></input>
                </Form.Field>

                <Form.Field>
                    <Button type="submit" >Add book</Button>
                </Form.Field>
                    
            </Form>
        </div>
    );
    }
};
export default FormHandler;