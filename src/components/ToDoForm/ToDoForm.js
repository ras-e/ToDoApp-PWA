import React, { Component } from 'react'

import {Form, Button, Container} from 'react-bootstrap';


class ToDoForm extends Component {
    constructor() {
        super();
        this.state = {
            List: [] // empty array for tasks
        }
    }

    //Function for adding to the task list

    addToList = (e)=> {
        e.preventDefault();
        const list = e.target,
        newToDo = {
            title: list.title.value
        }
        console.log(newToDo)
        this.state.List.push(newToDo)
        
        this.setState({
            List: this.state.List

        })
    }
    
    render() {
        return (
            <Container>
                <Form onSubmit={this.addToList}>
                    <Form.Group className="mb-3" controlId="formAddTask">
                        <Form.Label>Task</Form.Label>
                        <Form.Control type="text" placeholder="Add your todo task" name="title" />
                        <Form.Text className="text-muted">
                            We'll never share your tasks with anyone else.
                        </Form.Text>
                    </Form.Group>
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                </Form>
            </Container>
             
        );
    }
}

export default ToDoForm