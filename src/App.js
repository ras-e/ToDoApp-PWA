import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoForm from './components/ToDoForm/ToDoForm';


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
