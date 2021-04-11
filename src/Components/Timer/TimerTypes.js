import React from 'react'


const TimerTypesComponent = ({pomodoro, shortBreak, longBreak, timer}) => {
  const activeTimer = (button) => {
    return (button===timer) ? 'timer-button active': 'timer-button';
  }

  return (
    <div className="timers">
      <div className = "timer-types">
        <button onClick={pomodoro} className={activeTimer("pomodoro")}>Pomodoro</button>
        <button onClick={shortBreak} className={activeTimer("shortBreak")}>Short Break</button>
      </div>
    </div>
  )
}

export default TimerTypesComponent
