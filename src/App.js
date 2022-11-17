import React from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo App</h1>
        <div>
          <ToDoForm/>
        </div>
      </header>
    </div>
  );
}

export default App;
