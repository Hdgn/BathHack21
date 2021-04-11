import React from 'react'
import {Header, Grid, Button} from 'semantic-ui-react'


const TimerTypesComponent = ({ pomodoro, longBreak, shortBreak, timer }) => {
  const activeTimer = (button) => {
    return (button === timer) ? 'timer-button active' : 'timer-button';
  }

  return (
    <div className="timers">
      <div className="timer-types">
        <Button medium primary onClick={pomodoro} className={activeTimer("pomodoro")}>Pomodoro</Button>
        <Button medium primary onClick={shortBreak} className={activeTimer("shortBreak")}>Break</Button>
      </div>
    </div>
  )
}

export default TimerTypesComponent
