import React, { useEffect, useState } from 'react'
import ToDo from './ToDo'
import axios from 'axios'

export default function ToDoProfilePage () {

  const foundUser = localStorage.getItem('foundUser')

    const user = JSON.parse(foundUser)

    const [todos, setTodos] = useState ([]);

  const getAllTodos = () => {
    //const requestBody = user
    axios.get(`/api/todos/${user._id}`)
    .then(todosFromDb => {
      console.log('todosFromDb', todosFromDb.data)
    
      setTodos(todosFromDb.data)
    })
    .catch(err => {
     console.log(err)
    })
  }

  const filteredToDos = todos.filter(toDo => {
    return toDo.active
  })

  useEffect(() => {
    getAllTodos()
  }, [])


  return (
    <div><h1>ToDoList</h1>
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

        </div>
    
    
    </div>
  );
};