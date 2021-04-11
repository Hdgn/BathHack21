import React from 'react';
import { Grid } from 'semantic-ui-react'
import CardButton from './CardButton'
const MainButtons = (props) => {
    return (
        <Grid>
            <Grid.Row>
                <CardButton 
                secondary 
                width={8} 
                image='https://i.pinimg.com/564x/ba/6e/11/ba6e11a5e85f56ded1ced3b9fe80a3e0.jpg'
                link="/PomodoroMusic"
                text="Feeling Productive"
                />
                <CardButton 
                secondary 
                width={8}
                image= 'https://i.pinimg.com/originals/75/40/5e/75405ea11f49d7024c4b1e032b272e4e.png'
                link="/MusicMood"
                text="Feeling Lazy"
                />
            </Grid.Row>
        </Grid>
    )
}

export default MainButtons;