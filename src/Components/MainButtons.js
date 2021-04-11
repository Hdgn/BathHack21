import React from 'react';
import { Grid } from 'semantic-ui-react'
import CardButton from './CardButton'
import bunny from "../images/bunny.png"
import sloth from "../images/sloth.jpg"

const MainButtons = (props) => {
    return (
        <Grid>
            <Grid.Row>
                <CardButton 
                secondary 
                width={8} 
                image= {bunny}
                link="/PomodoroMusic"
                text="Feeling Productive"
                font-size={10}

                />
                <CardButton 
                secondary 
                width={8}
                image= {sloth}
                link="/MusicMood"
                text="Feeling Lazy"
                font-size={10}
                />
            </Grid.Row>
        </Grid>
    )
}

export default MainButtons;