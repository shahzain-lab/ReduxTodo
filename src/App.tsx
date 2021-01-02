import React from 'react';
import './App.css';
///compoents
import {TodoItems, TodoInput} from './components/index'

function App() {
  return (
    <div className="App">
      <TodoInput />
    <h3>Todo List</h3>
    <TodoItems />
    <br />
    <TodoItems />
     <br /> 
    <TodoItems />
    </div>
  );
}

export default App;
