import React from "react";
import Task from "./Task";

function CategoryFilter({categories, setCurCat}) {



const categoryButtons = categories.map((category)=>{
  return <button key={category} onClick={(e)=>setCurCat(category)}>{category}</button>
})

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
