import React, { useState, useEffect } from 'react'
import { Header } from 'semantic-ui-react'
import Timer from './Timer'

const PomodoroMusic = (props) => {
  const [showTimerIndicator, setShowTimerIndicator] = useState((localStorage.getItem('showTimerIndicator')) ? localStorage.getItem('showTimerIndicator')==='true' : true)
  const [notification, setNotification] = useState((localStorage.getItem('notification')) ? localStorage.getItem('notification')==='true' : false)
  const [ringerType, setRingerType] = useState(localStorage.getItem('ringerType') || "DoorBell")
  const [ringerVolume, setRingerVolume] = useState(localStorage.getItem('ringerVolume') || 1)
  const [pomodoro, setPomodoro] = useState(localStorage.getItem('pomodoro') || 25)
  const [shortBreak, setShortBreak] = useState(localStorage.getItem('shortBreak') || 5)
  const [longBreak, setLongBreak] = useState(localStorage.getItem('longBreak') || 10)
  const [pomodoroGoal, setPomodoroGoal] = useState(Number(localStorage.getItem('pomodoroGoal')) || 1)
  const [currentTimerLog, setCurrentTimerLog] = useState({})
  const [isRinging, setIsRinging] = useState(false);

    const timerProps = {
    "pomodoro":pomodoro,
    "shortBreak": shortBreak,
    "longBreak":longBreak,
    "showTimerIndicator": showTimerIndicator,
    "ringerType": ringerType,
    "ringerVolume": ringerVolume,
    "currentTimerLog": currentTimerLog,
    "setCurrentTimerLog": setCurrentTimerLog,
    "isRinging": isRinging,
    "setIsRinging": setIsRinging
  }



    return (
    <div>
        <Timer {...timerProps}/>
    </div>
    )
}

export default PomodoroMusic;