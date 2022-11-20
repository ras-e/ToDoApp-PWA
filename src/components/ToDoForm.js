import React, { useState } from 'react'
import {Form, Container, ListGroup, Button} from 'react-bootstrap';
import "./ToDoForm.css";


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

    function deleteToDo(id) {
        const newList = todo.filter((todo) => todo.id !== id);
        
        setToDos(newList)
        console.log(todo)
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formAddTask">
                    <Form.Label>Enter your task</Form.Label>
                    <Form.Control className="full-text"type="text" placeholder="Add your most AWESOME to-do task..." 
                        onChange={handleNewChange}
                        />
                    <Form.Control className="short-text" type="text" placeholder="Add Task" 
                        onChange={handleNewChange}
                        />
                    <Form.Text className="text-muted">
                        We'll never share your tasks with anyone else.
                    </Form.Text>
                </Form.Group>
                    <Button className="button-submit" variant="success" type="submit" >
                          Add
                    </Button>
            </Form>

            <ListGroup className="task-group">
                {todo.map((task) => (
                  <ListGroup.Item className='list-item col-md-offset-4' key={task.id}> 
                    {task.title}
                    <Button className="button-delete" variant="secondary" size="sm" onClick={() => deleteToDo(task.id)}>
                        Delete
                     </Button>
                  </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
             
        );
    }    

export default ToDoForm


