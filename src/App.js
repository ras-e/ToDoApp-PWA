import React from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />  */}
        <h1>ToDo App</h1>
        <div>
          <ToDoForm/>
        </div>


      </header>
    </div>
  );
}

export default App;
