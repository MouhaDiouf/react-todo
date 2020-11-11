import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');

  return (
    <div className="App">
      <h1>Hello React</h1>
      <header>Mouha's Todo List</header>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
