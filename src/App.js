import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
      }
    };
    filterHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <h1>Hello React</h1>
      <header>Mouha's Todo List</header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
