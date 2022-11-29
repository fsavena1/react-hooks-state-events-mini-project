import React, {useState} from "react";

function NewTaskForm({categories , addTask}) {
const [formData, setFormData] =useState({
  text: '',
  category:'All'
})


  const categoryOption = categories.map((category) =>{
    return <option>{category}</option>
  })




function handleFormData(e){
  const {name, value} = e.target
  setFormData({...formData, [name]:value})
}



function handleSubmit(e){
  e.preventDefault()
  // const newObj= formData
  addTask(formData)
}


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleFormData} value = {formData.text} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleFormData} value={formData.category}>
          {categoryOption}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
