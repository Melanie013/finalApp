import React from 'react';
import { useContext } from 'react';
import Pomodoro from '../components/Pomodoro';
import ToDoProfilePage from '../components/ToDoProfilePage';
import { AuthContext } from '../context/auth'




export default function Profile() {


  const {  user } = useContext(AuthContext)



return(
    <div>
      <h2 id='greeting'>Hi {user.name} let's get some work done! 💪</h2>
      <Pomodoro />
      <ToDoProfilePage />

    
    </div>
 
)
}
