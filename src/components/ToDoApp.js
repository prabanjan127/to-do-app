import React, { useState, createContext } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// Create a context to manage the to-do list state
export const TodoContext = createContext();

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [addDate,setaddDate]=useState([]);

  const addTodo = (task,date) => {
    setTodos([...todos, { id: todos.length + 1, task}]);
    setaddDate([...addDate,{id:addDate.length+1,date}])
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setaddDate(addDate.filter((addDate) => addDate.id !== id));  };
  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo,addDate}}>
      <div>
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;
