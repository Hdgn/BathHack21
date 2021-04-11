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
                link="/SelectMusic"
                text="Feeling Productive"
                />
                <CardButton 
                secondary 
                width={8}
                image= 'https://i.pinimg.com/originals/75/40/5e/75405ea11f49d7024c4b1e032b272e4e.png'
                link="/Music"
                text="Feeling Lazy"
                font-size={10}
                />
            </Grid.Row>
        </Grid>
    )
}

export default MainButtons;