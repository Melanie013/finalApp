import React, { useState, useEffect } from 'react'
import Form from '../components/Form'
import ToDoList from '../components/ToDoList'


export default function Profile() {

    const [inputText, setInputText] = useState ("");
    const [todos, setTodos] = useState ([]);
    const [status, setStatus] = useState ('all');
    const [filteredToDos, setFilteredToDos] = useState ([]);

    useEffect(() => {
      //console.log('hallo')
      FilterHandler();
    }, [todos,status]);

    const FilterHandler = () => {
      switch(status){
        case 'completed':
          setFilteredToDos(todos.filter((todo) => todo.completed === true))
      break;   
        case 'uncompleted':
          setFilteredToDos(todos.filter((todo) => todo.completed === false))
      break;
      default:
        setFilteredToDos(todos);
      break;
      }
    }
   
  return (
    <div><h2>Your To-Do's</h2>
    <Form inputText={inputText} 
          todos={todos}   
          setTodos={setTodos} 
          setInputText={setInputText}
          setStatus={setStatus}
          />
    <ToDoList todos={todos} 
              setTodos={setTodos}           
              filteredToDos={filteredToDos}
 />

    
    </div>
 
  )
}
