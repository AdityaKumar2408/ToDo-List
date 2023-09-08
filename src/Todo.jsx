import React from "react";
import {FaTimes} from 'react-icons/fa'
const ToDo=(props)=>{
   
    return (<>
    <div className="todo-style">
     <FaTimes className="fa-solid fa-x black"  onClick={()=>{
        props.onSelect(props.id);
    }}/>
     <li>{props.text}</li>
     
     
    
    
    </div></>)
      
}
export default ToDo;