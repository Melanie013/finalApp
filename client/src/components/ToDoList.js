import React from 'react'
import ToDo from './ToDo'

export default function ToDoList ({todos, setTodos, filteredToDos}) {
  //console.log(filteredToDos)


  return (
    <div><h1>ToDoList</h1>
        <div className="todo-container">
            <ul className="todo-list">
              {filteredToDos.map((todo) => (
                <ToDo setTodos={setTodos} 
                todos={todos} 
                todo={todo}
                key={todo.id} 
                text={todo.text} />

              ))}
            </ul>

        </div>
    
    
    </div>
  );
};
