
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [todos,setTodo]=useState([{item:"Learn React",state1:false},{item:"Build a React app",state1:false},{item:"Deploy the React app ",state1:false}])
  function handleComplete(item){
    setTodo(todos.map((element)=>{
      if(element.item==item){
        return{... element,state1:true}
        
      }
      return element;
    })
  
  
 )
    


  }
  return (
    <div>
        <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  )
}

export default App
