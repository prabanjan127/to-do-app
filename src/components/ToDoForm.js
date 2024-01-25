import React, { useContext, useState } from 'react';
import { TodoContext } from './ToDoApp';

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);

  const [task, setTask] = useState('');
  const [date,setDate]=useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '' && date.trim() !=='') {
      addTodo(task,date);
      setTask('');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="date"
        placeholder="Enter a new task"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
       <button type="submit">Add Task</button>
     
    </form>
  );
};

export default TodoForm;
