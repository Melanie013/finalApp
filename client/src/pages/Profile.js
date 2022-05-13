import React, {useState} from 'react'
import Form from '../components/Form'
import ToDoList from '../components/ToDoList'


export default function Profile() {
    const [inputText, setInputText] = useState ("");
  return (
    <div><h2>Your To-Do's</h2>
    <Form />
    <ToDoList />

    
    </div>

  )
}
