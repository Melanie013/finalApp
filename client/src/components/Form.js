import React from 'react'

export default function Form() {
    const inputHandler = (e) => {
        console.log(e);
    }
  return (
<form>
    <input type="text" className="todolist-input" />
    <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
    To Do</button>
    <div className="select">
        <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </select>
    </div>
</form>
  )
}
