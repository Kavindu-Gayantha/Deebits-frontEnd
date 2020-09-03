import React from 'react';
import { Button,Form } from 'semantic-ui-react';

const FormHandler=()=>{
    return(
        <div className="ui container" >
            <Form className="form">
                <Form.Field>
                    <label>Book name</label>
                    <input type="text" placeholder="name of the book"></input>
                </Form.Field>

                <Form.Field>
                    <label>Book category</label>
                    <input type="text" placeholder="category of the book"></input>
                </Form.Field>

                <Form.Field>
                    <Button type="submit" >Add book</Button>
                </Form.Field>
                    
            </Form>
        </div>
    );
}

export default FormHandler;