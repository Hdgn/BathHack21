import React, { useState, useEffect } from 'react'

const EyeCareTimer = (props) => {
    const [ seconds, setSeconds] = useState(props.time*60)
    const [ originalSeconds, setOriginalSeconds ] = useState(props.time*60)
    const [ isActive, setIsActive] = useState(true)
    const [ eyeCareCounter, setEyeCareCounter ] = useState(1)
    const [ eyeCareCount, setEyeCareCount ] = useState(1)

    useEffect(() => {
        let interval = null;
        if (isActive && seconds !== 0) {
            interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
            }, 1000);
        } else if (isActive && seconds === 0){
            if (eyeCareCounter === eyeCareCount) {
              setIsActive(false)
              setEyeCareCount(0)
              clearInterval(interval)
              props.setShowMessage(true)

            } else {
              setEyeCareCount(eyeCareCount => eyeCareCount +1)
              clearInterval(interval)
              setSeconds(originalSeconds)
            }
        }
        return () =>  {
            clearInterval(interval)
        } 
    }, [isActive, seconds, eyeCareCount, eyeCareCounter])


    const timePP = () => {
        const m = Math.floor(seconds/60)
        let s = String(Math.ceil(seconds % 60))
        if (s.length === 1) {
          s = '0' + s
        }
        return `${m}:${s}`
    }

    return (
        <div>
            {timePP()}
        </div>
    )
}

export default EyeCareTimer;