import React from 'react'
import ToDo from './ToDo'
import { Link } from 'react-router-dom'


export default function ToDoList ({todos, setTodos, filteredToDos, getAllTodos}) {
  //console.log(filteredToDos)


  return (
    
    <div>
      <br />
      <h1>ToDoList</h1>
      <br/>

    <h3>Click on the ToDo's you wanna work on today: ✔️</h3>

        <div className="todo-container">
            <ul className="todo-list">
             {filteredToDos.map((todo) => (
                <ToDo setTodos={setTodos} 
                todos={todos} 
                todo={todo}
                key={todo.id} 
                text={todo.text} 
                getAllTodos={getAllTodos}
                />

             ))}
            </ul>
            <br />

        <Link to='/profile'>Today's ToDo's</Link>

            

            
        </div>
    
    
    </div>
  );
};