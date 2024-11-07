import { useState } from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (editedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== editedTodo.id) return todo;
      return editedTodo;
    })
    setTodos([...updatedTodos]);
  }

  return (
    <div className='container-fluid px-0 d-flex flex-column  align-items-center min-vh-100' >
      <h1 className="mb-4 mt-5 text-center text-primary">YAPILACAKLAR LİSTESİ</h1>
      <div className="w-50 mb-4">  <TodoCreate onCreateTodo={createTodo} />   </div>
      <div className="w-50">  <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />  </div>
    </div>
  )
}

export default App  
