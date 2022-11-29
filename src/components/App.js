import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS }); 

function App() {
  const [tasks, setTasks]= useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [curCat, setCurCat] = useState('All')




const filteredArray = tasks.filter((task)=> {
  if(curCat=== 'Misc'){
    return task.category === 'Misc'
  } else if(curCat=== 'Code'){
    return task.category === 'Code'
  } else if( curCat === 'Money'){
    return task.category === 'Money' 
  } else if (curCat === 'Food') {
    return task.category ==='Food'
  } else{
    return 'All'
  } 
})

function addTask(newObj){
  setTasks([...tasks, newObj])
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} setCurCat={setCurCat} />
      <NewTaskForm categories={categories} addTask={addTask}/>
      <TaskList tasks={filteredArray} setTasks={setTasks}/>
    </div>
  );
}

export default App;
