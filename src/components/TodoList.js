import React from 'react'

const TodoList = (props) => {
  return (
    <div>
       <ul>
     {
        props.todos.map(element => {

       return <li>

             <span>{element.item}</span>{element.state1==false &&<button onClick={()=>props.handleComplete(element.item)}>Complete</button>}


          </li>

            
        })
     }
       </ul>
    </div>
  )
}

export default TodoList