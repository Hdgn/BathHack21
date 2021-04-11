import React, { useState, useEffect } from 'react'
import { Header } from 'semantic-ui-react'
import Timer from './Timer'
import Details from './Modal/Details'

const PomodoroMusic = (props) => {
  const [showTimerIndicator, setShowTimerIndicator] = useState((localStorage.getItem('showTimerIndicator')) ? localStorage.getItem('showTimerIndicator')==='true' : true)
  const [notification, setNotification] = useState((localStorage.getItem('notification')) ? localStorage.getItem('notification')==='true' : false)
  const [ringerType, setRingerType] = useState(localStorage.getItem("ringerType") || "DoorBell")
  const [ringerVolume, setRingerVolume] = useState(localStorage.getItem("ringerVolume") || 1)
  const [pomodoro, setPomodoro] = useState(localStorage.getItem("pomodoro") || 25)
  const [Break, setBreak] = useState(localStorage.getItem("break") || 10)
  const [pomodoroGoal, setPomodoroGoal] = useState(localStorage.getItem("pomodoroGoal") || 1)
  const [currentTimerLog, setCurrentTimerLog] = useState({})
  const [isRinging, setIsRinging] = useState(false);

  const timerProps = {
    "pomodoro":pomodoro,
    "Break": Break,
    "showTimerIndicator": showTimerIndicator,
    "ringerType": ringerType,
    "ringerVolume": ringerVolume,
    "currentTimerLog": currentTimerLog,
    "setCurrentTimerLog": setCurrentTimerLog,
    "isRinging": isRinging,
    "setIsRinging": setIsRinging
  }

  const modalProps = {
    "pomodoro":pomodoro,
    "Break": Break,
    "setPomodoro":setPomodoro,
    "setBreak": setBreak,
    "showTimerIndicator": showTimerIndicator,
    "setShowTimerIndicator": setShowTimerIndicator,
    "ringerType": ringerType,
    "setRingerType": setRingerType,
    "ringerVolume": ringerVolume,
    "setRingerVolume": setRingerVolume,
    "pomodoroGoal": pomodoroGoal,
    "setPomodoroGoal": setPomodoroGoal,
    "notification": notification,
    "setNotification": setNotification,
    "setIsRinging": setIsRinging
    }
    

    return (
    <div>
        <Timer {...timerProps}/>
        <Details {...modalProps} />
    </div>
    )
}

export default PomodoroMusic;