import React, { useState } from 'react';
import '../todolist.css';



function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');
  const [inputDescription, setInputDescription] = useState('')

  const handleInputChange = (e) => {
    setInputTask(e.target.value);
   
  };
  const handleInputDescriptioncChange = (e) => {
        setInputDescription(e.target.value);
  }

  const handleAddTask = () => {
    if (inputTask.trim() !== '' && inputDescription.trim() !== '') {
      setTasks([...tasks, { task: inputTask, description: inputDescription }]);
      setInputTask('');
      setInputDescription('');
    }
  };
  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className='cont'>
      <h1>Todo List</h1> 
      <input className='task' type="text" value={inputTask} onChange={handleInputChange} placeholder="Enter task"/>
      {/* <input className='description' type="text" value={inputDescription} onChange={handleInputDescriptioncChange} placeholder='Enter description'/> */}
      <textarea className='description' value={inputDescription} onChange={handleInputDescriptioncChange} placeholder='Enter description'/>

      <button className='Addtask' onClick={handleAddTask}>Add Task</button>
      <div className='taskinput'>
      <ul>
        {tasks.map((taskItem, index) => (
          <li key={index}>
              <h3>Task</h3> {taskItem.task}<br/>
              <h3>Description</h3> {taskItem.description}
            <button className='delete' onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default TodoList;
