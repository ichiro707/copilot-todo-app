// App.js
import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import InputTodo from './components/InputTodo';


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, { text: todo, isCompleted: false }]);
  };

  const toggleTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <InputTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;