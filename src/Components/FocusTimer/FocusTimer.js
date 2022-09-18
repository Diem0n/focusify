import './FocusTimer.css'
import React from 'react'
import { useState } from 'react';


const FocusTimer = () =>{
    const [time , setTime] = useState(15);
    const [minutesLeft , setMinutes] = useState('00')
    const [secondsLeft , setSeconds] = useState('00')
    const [timerState , setTimerState] = useState(false)
    const timeInMiliSeconds =  time * 60000;
    
    let timeToCountDownTo = new Date().getTime() + timeInMiliSeconds;
    


    const calculate = ()=> { 
        setInterval( ()=>{
        let now = new Date().getTime()
        let timeElapsed = timeToCountDownTo - now
        if (timeElapsed < 0 || timeElapsed === 0){
            console.log('Time is up!')
            clearInterval(calculate)
        }
        if(timeElapsed > 0){
            timeElapsed = timeToCountDownTo - now
            setMinutes(Math.floor(timeElapsed / 60000))
            setSeconds(Math.floor((timeElapsed % 60000)  / 1000))

        }
        } , 1000)
    
    }

    return(
        <div className='FocusTimerCard'>
           <div className={ timerState === false? 
           'TimerParams' : 'TimerParams disabled'}>
           <h1>Ready, set, focus!</h1>
            <p>Achieve your goals and get more done with focus sessions.Tell us how much time you have and we'll set up the rest.</p>
            <div className='FocusTimer'>
                    <div className='Counter'>
                        <h1 className='Time'>{time}</h1>
                    </div>
                    <div className='Controls'>
                        <button   onClick={()=>{
                             time === 240 ? setTime(time): setTime(time+15)

                        }} className='Increment'>
                            +
                        </button>
                        <button  className='Decrement'  onClick={()=>{
                            time === 15 ? setTime(time) : setTime(time-15)

                        }}>
                           -
                        </button>
                   
                    </div>
            </div>
            <div onClick={()=> {
                calculate()
                setTimerState(true)


            }} className='FocusTimerButton'>
                Start Focus session
            </div>
           </div>
           <div className={ timerState === false? 
           'FocusTimerActive disabled' : 'FocusTimerActive'}>
                <div  id='Progress' className='Progress'>
                    <div className='Timer'>
                      <h1>{`${minutesLeft} : ${secondsLeft}`}</h1>
                    </div>
                    
                </div>
                <div onClick={()=> {
                setMinutes(()=>'00')
                setSeconds(()=>'00')
                setTime(()=>15)
                setTimerState(()=>false)


            }} className='FocusTimerButton'>
                Stop Focus session
            </div>
           </div>
        </div>
        
    )
}

export default FocusTimer