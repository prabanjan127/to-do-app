import React, { useContext } from 'react';
import { TodoContext } from './ToDoApp';

const TodoList = () => {
  const { todos,addDate, removeTodo } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.task} : {getTaskDate(todo.id)}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
  function getTaskDate(id) {
    const dateEntry = addDate.find((entry) => entry.id === id);
    return dateEntry ? dateEntry.date : 'No Date';
  }
};

export default TodoList;
