import axios from 'axios';
import React from 'react'



const ToDo = ({text, todos, todo, setTodos, getAllTodos}) => {


  //const completeHandler = () => {
    //setTodos(todos.map(item => {
      //if(item.id === todo.id){
        //return {
         // ...item, completed: !item.completed 
        //}
      //}
        //return item;
    //}))
  //};

  const deleteHandler = (id) => {
    //setTodos(todos.filter((element) => element.id !== todo.id ));
    axios.delete(`/api/todos/delete/${id}`)
    .then(deletedToDo => {
      console.log(deletedToDo)
    })
    .catch(err => {
      console.log(err)
    })
    getAllTodos()
  };


  const activeTaskHandler = (id) => {
    const requestBody = {active: !todo.active}
    axios.put(`/api/todos/active/${id}`, requestBody)
    .then(updatedToDo => {
      console.log(updatedToDo)
  
    })
    .catch(err => {
      console.log(err)
    })
    getAllTodos()
  }


  const completedTaskHandler = (id) => {
    const requestBody = {completed: !todo.completed}
    axios.put(`/api/todos/completed/${id}`, requestBody)
    .then(updatedCompletedToDo => {
      console.log(updatedCompletedToDo)
  
    })
    .catch(err => {
      console.log(err)
    })
    getAllTodos()
  }


  return (
    <div className="toDo">
        <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{todo.title}</li>
        <button onClick={() => completedTaskHandler(todo._id)} className="complete-btn" >
            <i className="fas fa-check"></i>Check
        </button>
        <button onClick={() => deleteHandler(todo._id)} className="trash-btn"  >
            <i className="fas fa-trash"></i>Delete
        </button>
        <input type="checkbox"
        checked={todo.active}
        onChange={() => activeTaskHandler(todo._id)}

         />
   

    </div>
  )
}


export default ToDo;