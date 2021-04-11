import React from 'react'
import {Header, Grid, Button} from 'semantic-ui-react'


const TimerTypesComponent = ({ pomodoro, longBreak, shortBreak, timer }) => {
  const activeTimer = (button) => {
    return (button === timer) ? 'timer-button active' : 'timer-button';
  }

  return (
    <div className="timers" id="times">
      <div className="timer-types">
        <Button size="large" primary onClick={pomodoro} className={activeTimer("pomodoro")}>Pomodoro</Button>
        <Button size="large" primary onClick={shortBreak} className={activeTimer("shortBreak")}>Break</Button>
      </div>
    </div>
  )
}

export default TimerTypesComponent
