import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import { Timer } from '../Timer';


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
            <button>
                <Link to="/PomodoroMusic">Next Page</Link>
            </button>
        </div>
    )
}

export default SelectMusic;