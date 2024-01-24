import React, { useState, createContext } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// Create a context to manage the to-do list state
export const TodoContext = createContext();

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: todos.length + 1, task }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      <div>
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;
