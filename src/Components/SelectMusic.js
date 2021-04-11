import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import { Timer } from '../Timer';
import { Button } from 'semantic-ui-react';


const SelectMusic = (props) => {

    const handleSubmit = () => {
        return
    }

    const handleChange = () => {

    }


    return (
        <div>
           
            <form onSubmit={handleSubmit}>
                <label> Music:
                    <input type="input" defaultValue="Select Type" onChange={handleChange} />        
                </label>
                <label> Pomodoro
                    <input type="radio" onChange={handleChange} />        
                </label>
                <label> Eye Care:
                    <input type="radio" onChange={handleChange} />        
                </label>
            </form>
            <Button secondary>
                <Link to="/PomodoroMusic">Next Page</Link>
            </Button>
        </div>
    )
}

export default SelectMusic;