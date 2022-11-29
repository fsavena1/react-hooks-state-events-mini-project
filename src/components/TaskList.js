import React from "react";
import Task from './Task'

function TaskList({tasks, setTasks}) {
  // console.log(tasks)


const showTasks = tasks.map((task) =>{
  return (
      <Task 
        key={task.text}
        text={task.text}
        category= {task.category}
        handleDelete={handleDelete}
      />
  )
})

function handleDelete(text){
  const deleteArray = tasks.filter((task)=> task.text !== text)
  setTasks(deleteArray)
  // console.log(text)
}


  return (
    <div className="tasks">
     {showTasks}
    </div>
  );
}

export default TaskList;
