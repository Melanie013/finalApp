import React, {useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth'


export default function Form({setInputText, todos, setTodos, inputText, setStatus, getAllTodos }) {
    const inputHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value)



     
    };


    const {user} = useContext(AuthContext)

    const submitHandler = (e) => {

        e.preventDefault()
        setTodos([
           ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        const requestBody = {title: inputText, user}
        axios.post("/api/todos/add", requestBody)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        setInputText("");
        getAllTodos()

    };

    const statusHandler = (e) => {
       //console.log(e.target.value);
       setStatus(e.target.value)


    }

  return (
<form>
    <input value={inputText} onChange={inputHandler} type="text" className="todolist-input" />
    <button onClick={submitHandler} className="todo-button" type="submit">
    <i className="bi bi-plus"></i>
    +</button>
    <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </select>
    </div>
</form>
  )
}