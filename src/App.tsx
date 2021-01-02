import React from 'react';
import './App.css';
///compoents
import { TodoInput} from './components/index'
import { TodoLists } from './components/TodoLists';

function App() {
  return (
    <div className="App m-5">
      <TodoInput />
      <hr />
      <TodoLists />
    </div>
  );
}

export default App;
