import React, { useState } from 'react'

import {Form, Button, Container} from 'react-bootstrap';


function ToDoForm()  {

    //List

    const [todo, setToDos] = useState([]);
    

    //Temp
    const [newToDo, setNewToDo ] = useState('');

    function handleNewChange(e) {
        e.preventDefault();
        setNewToDo(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(newToDo)
        if (todo !== "") 
        setToDos([...todo, { id: Date.now(), title: newToDo }]);
        setToDos("");
        //or e.target.reset
        console.log(newToDo)    


    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formAddTask">
                    <Form.Label>Task</Form.Label>
                    <Form.Control type="text" placeholder="Add your todo task" name="title" 
                        //value={input} 
                        onChange={handleNewChange}
                        />
                    <Form.Text className="text-muted">
                        We'll never share your tasks with anyone else.
                    </Form.Text>
                </Form.Group>
                    <Button variant="primary" type="submit" 
                    >
                          Add
                    </Button>
            </Form>
        </Container>
             
        );
    }    
}

export default ToDoForm


