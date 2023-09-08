import './index.css'
import ToDo from './Todo'
import React, { useState } from 'react'

const ToDoBox=()=>{
  const [currentInput, updatedInput]= useState();
  const [items, updatedItems]= useState([]);//Important

const InputEvent=(event)=>{
  updatedInput(event.target.value);
}
const ListofItems=()=>{
  
  updatedItems((arrayAlreadyEnteredItems)=>{
    return [...arrayAlreadyEnteredItems, currentInput]
  });
  updatedInput("");
}
const deleteItem=(id)=>{
  console.log('deleted');
  updatedItems((removeElement)=>{
    return removeElement.filter((array, index)=>{
      return index!==id;
    })
  })
}
return(
  <>
    <div className='main_div'>
    <div className='center_div'>
    <br/>
    <h1>ToDo List</h1>
    <br/>
    <input type='text' placeholder='Add a items' onChange={InputEvent} value={currentInput} />
    <button className='Add' onClick={ListofItems}> + </button>

    <ol>
      {
        items.map((arrayNewItemEntering, index) => {
          if(arrayNewItemEntering!==''){
        return <ToDo key={index} id={index}
        text={arrayNewItemEntering}
        onSelect={deleteItem}
          />;
      }})}
    </ol>
    </div></div>
  </>
)
}
    export default ToDoBox
