/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'
import TaskCreate from './Components/TaskCreate'
import TaskList from './Components/TaskList'

function App() {

  const [tasks, setTasks] = useState ([]);
  const createTask = (title, taskDesc) => {
    const createdTask = [...tasks, 
      {
      id:Math.round(Math.random()*999999),
      title, 
      taskDesc
      }
    ]
    setTasks(createdTask);
  };
  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  }
  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    const updatedTasks = tasks.map((task) => {
      if(task.id === id )
      {
        return {id, title:updatedTitle, taskDesc:updatedTaskDesc}
      } 
      return task;
    });
    setTasks(updatedTasks);
  };
  return (
      <div className='App'>
        <TaskCreate onCreate={createTask}/>
        <h1>Görevler</h1>
        <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
      </div>)
}

export default App
