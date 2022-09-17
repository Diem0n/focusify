import './FocusTimer.css'
import React from 'react'
import { useState } from 'react';


const FocusTimer = () =>{
    const [time , setTime] = useState(15);
    const timeInMiliSeconds = time * 60 * 1000;
    let timeElapsed = 0;
    const calculate = ()=>{
        const timeLeft = timeInMiliSeconds - timeElapsed;
        setInterval(()=>{
            timeElapsed = timeElapsed + 1;
        })
        timeLeft === 0? console.log('Time is up') : console.log(timeLeft);
    }
    calculate()


    return(
        <div className='FocusTimerCard'>
           <div className='TimerParams'>
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
            <div className='FocusTimerButton'>
                Start Focus session
            </div>
           </div>
           <div className='FocusTimerActive'>
                <div  id='Progress' className='Progress'>
                    <div className='Timer'>
                     
                    </div>
                </div>
           </div>
        </div>
        
    )
}

export default FocusTimer