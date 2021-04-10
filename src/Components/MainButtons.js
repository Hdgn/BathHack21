import React from 'react';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const MainButtons = (props) => {
    return (
    <div>
        <Button secondary>
            
                <Link to="/SelectMusic">Feel Productive</Link>
            
        </Button>
        
        <Button secondary>
           
                <Link to="Music">No Feel Productive</Link>
            
        </Button>
    </div>
    )
}

export default MainButtons;