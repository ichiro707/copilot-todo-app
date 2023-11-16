// TodoItem.js
import React from 'react';

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <div>
      <span style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
        {todo.text}
      </span>
      <button onClick={() => toggleTodo(index)}>Toggle</button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
}

export default TodoItem;