import React, { useState } from 'react'
import {Form, Container, ListGroup, Button} from 'react-bootstrap';


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
        if (newToDo === '') return
        setToDos([...todo, { id: Date.now(), title: newToDo }])
        e.target.reset()   
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formAddTask">
                    <Form.Label>Task</Form.Label>
                    <Form.Control type="text" placeholder="Add your todo task" name="title" 
                        onChange={handleNewChange}
                        />
                    <Form.Text className="text-muted">
                        We'll never share your tasks with anyone else.
                    </Form.Text>
                </Form.Group>
                    <Button id="button-submit" variant="primary" type="submit" 
                    >
                          Add
                    </Button>
            </Form>

            <ListGroup>
                {todo.map((task) => (
                  <ListGroup.Item key={task.id}> 
                  {task.title} 
                  <Button id="button-delete" variant="secondary" size="sm">
                    Delete
                  </Button>
                  </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
             
        );
    }    

export default ToDoForm


