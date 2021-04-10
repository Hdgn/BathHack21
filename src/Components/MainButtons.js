import React from 'react';
import { Link } from 'react-router-dom';

const MainButtons = (props) => {
    return (
    <div>
        <button>
            <li>
                <Link to="/SelectMusic">Feel Productive</Link>
            </li>
        </button>
        
        <button>
            <li>
                <Link to="Music">No Feel Productive</Link>
            </li>
        </button>
    </div>
    )
}

export default MainButtons;