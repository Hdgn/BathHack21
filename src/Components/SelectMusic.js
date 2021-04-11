import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Checkbox } from 'semantic-ui-react'
// import { Timer } from '../Timer';


const SelectMusic = (props) => {

    const [ pomodoro, setPomodoro ] = useState(false)
    const [ eyeCare, setEyeCare ] = useState(false)



    const handlePomoChange = () => {
        setEyeCare(eyeCare => !eyeCare)
    }

    const handleECChange = () => {

    }

    const handleMusicChange = () => {

    }

    
    return (
        <div>
           
            <form>
                <label> Music:
                    <input type="input" defaultValue="Select Type" onChange={handleMusicChange} />        
                </label>
                <label> Pomodoro
                    <Checkbox toggle onChange={handlePomoChange} />        
                </label>
                <label> Eye Care:
                    <Checkbox toggle onChange={handleECChange} />        
                </label>
            </form>
            <button>
                <Link to="/PomodoroMusic">Next Page</Link>
            </button>
        </div>
    )
}

export default SelectMusic;