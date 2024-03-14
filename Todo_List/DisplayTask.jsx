import React from 'react';
import '../todolist.css';
import TodoList from '/src/Todo_List/TodoList';


function DisplayTask() {
  return (
    <div className="Display_todolist">
      <TodoList />
    </div>
  );
}

export default DisplayTask;

