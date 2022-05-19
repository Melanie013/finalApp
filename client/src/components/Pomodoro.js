import React, {useState} from 'react'
import '../styles/Pomodoro.css'


export default function Pomodoro() {

    const [displaytime, setDisplayTime] = useState (25*60);
    const [breaktime, setBreakTime] = useState (5*60);
    const [sessiontime, setSessionTime] = useState (25*60);
    const [timerOn, setTimerOn] = useState (false);
    const [onBreak, setOnBreak] = useState (false);


    const formatTime = (time) => {

        let minutes = Math.floor(time/ 60)
        let seconds = time % 60
        return ( 
            
            (minutes < 10 ? "0" + minutes: minutes) + ":" + 
            (seconds < 10 ? "0" + seconds: seconds)
        )
    }

    const changeTime = (amount, type) => {
        
        if(type === 'break') {
            if(breaktime <= 60 && amount < 0) {
                return;
            }
            setBreakTime((prev) => prev + amount);
        }else{
            if(sessiontime <= 60 && amount < 0) {
                return;
            }
            setSessionTime((prev) => prev + amount)
            if(!timerOn){
                setDisplayTime(sessiontime + amount)
            }
        }
    }

    const checkTime = () => {


        let second = 1000;
        let date = new Date().getTime()
        let nextDate = new Date().getTime() +second;
        let onbreakvar = onBreak;


        if(!timerOn){
            let interval = setInterval (() => {
                date = new Date().getTime();
                if(date > nextDate){
                    setDisplayTime((prev) => {
                        if (prev <= 0 && !onbreakvar){
                
                            onbreakvar = true
                            setOnBreak(true)
                            return breaktime;
                        } else if (prev <= 0 && onbreakvar) {
                            onbreakvar = false
                            setOnBreak(false)
                            return sessiontime;

                        }




                        return prev -1;
                    });
                    nextDate += second;
                }

            }, 30);
            localStorage.clear()
            localStorage.setItem('interval-id', interval)
        }


        if(timerOn){
            clearInterval(localStorage.getItem("interval-id"))
        }

        setTimerOn(!timerOn)
    }

    const resetTime = () => {
        setDisplayTime(25*60)
        setBreakTime(5*60)
        setSessionTime(25*60)
    }


  return (
    <div className="center-align">

    <h1>Timer</h1>
    <br />
    <div className='pomodoro-container'>   

    <Length
    
        title={"break length"}
        changeTime={changeTime}
        type={"break"}
        time={breaktime}
        formatTime={formatTime}    
    />

    <Length
    
        title={"session length"}
        changeTime={changeTime}
        type={"session"}
        time={sessiontime}
        formatTime={formatTime}    
    />
    </div>

    <h3>{onBreak ? "Break" : "Session"}</h3>
    <h1>{formatTime(displaytime)}</h1>
   
    <button className='pause-btn' onClick={checkTime}>
       {timerOn ? (
           <i>Pause</i>

       ): (
           <i>Start</i>
       )}
    </button>

    <button className='reset-btn' onClick={resetTime}>

        <i>Reset time</i>

    </button>
    </div>
  )
}

function Length ({title, changeTime, type, time, formatTime}) {
    
    
    
    return (
    <div>
        <h3>{title}</h3>
        <div className='time-options'>
            <button className='pomodoro-btn' onClick={() => changeTime(-60, type)}>-</button>
            <h3>{formatTime(time)}</h3>
            <button className='pomodoro-btn' onClick={() => changeTime(60, type)}>+</button>
        </div>
    </div>
    )
}

