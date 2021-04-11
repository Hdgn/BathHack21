import React from 'react'
import EightiesAlarm from '../../sounds/AlarmClock.wav'
import AlarmClock from '../../sounds/AlarmClock.wav'
import WristwatchAlarm from '../../sounds/AlarmClock.wav'
import ElevatorDing from '../../sounds/AlarmClock.wav'
import DoorBell from '../../sounds/AlarmClock.wav'

const Alarm = (props) => {

  let alarmType = null
  switch(props.ringerType) {
    case "80sAlarm":
    alarmType=EightiesAlarm;
    break;
    case "AlarmClock":
    alarmType= AlarmClock;
    break;
    case "WristwatchAlarm":
    alarmType= WristwatchAlarm;
    break;
    case "ElevatorDing":
    alarmType= ElevatorDing;
    break;
    case "DoorBell":
    alarmType= DoorBell;
    break;
    // default:
    // alarmType=WristwatchAlarm;
    // break;
  }


  const playSound = () => {
    if (props.isRinging) {
      const alarm = new Audio(alarmType)
      alarm.volume = Number(props.ringerVolume)
      alarm.play()
    }
    props.setIsRinging(false)
  }

  return(
    <div>
      <audio
      controls={playSound()}
      >
      </audio>
    </div>
  )
}

export default Alarm
