import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Checkbox, Container, Grid } from 'semantic-ui-react'
// import { Timer } from '../Timer';
import { Button } from 'semantic-ui-react';


const SelectMusic = (props) => {

    const [ pomodoro, setPomodoro ] = useState(false)
    const [ eyeCare, setEyeCare ] = useState(false)



    const handlePomoChange = () => {
        setEyeCare(pomodoro => !pomodoro)
    }

    const handleECChange = () => {
        setEyeCare(eyeCare => !eyeCare)
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
            <Button secondary>
                <Link to="/PomodoroMusic">Next Page</Link>
            </Button>
        </div>
    )
}

export default SelectMusic;