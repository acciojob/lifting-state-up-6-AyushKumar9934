import React from 'react'

const TodoList = (props) => {
  return (
    <div>
       <ul>
     {
        props.todos.map(element => {

       return element.state1==false && (<li>

             <span>{element.item}</span><button onClick={()=>props.handleComplete(element.item)}>Complete</button>


          </li>)

            
        })
     }
       </ul>
    </div>
  )
}

export default TodoList