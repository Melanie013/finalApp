import React, { useState, useEffect } from 'react';
import ToDoList from '../components/ToDoList.js';
import Form from '../components/Form';
import axios from 'axios';
//import { AuthContext } from '../context/auth.js';



export default function Tasks() {

    //const { user } = useContext(AuthContext)

    const foundUser = localStorage.getItem('foundUser')
    const storedToken = localStorage.getItem('authToken')

    const user = JSON.parse(foundUser)

    console.log(user)

    //console.log('user', user,'founduser', JSON.parse(foundUser), localStorage)

    const [inputText, setInputText] = useState ("");
    const [todos, setTodos] = useState ([]);
    const [status, setStatus] = useState ('all');
    const [filteredToDos, setFilteredToDos] = useState ([]);

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
   
    
    useEffect(() => {
      getAllTodos()

    },[])


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
          getAllTodos={getAllTodos}
          />
    <ToDoList todos={todos} 
              setTodos={setTodos}           
              filteredToDos={filteredToDos}
              getAllTodos={getAllTodos}
          />
    </div>
    )
}

