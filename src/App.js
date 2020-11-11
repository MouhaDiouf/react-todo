import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Hello React</h1>
      <header>Mouha's Todo List</header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
