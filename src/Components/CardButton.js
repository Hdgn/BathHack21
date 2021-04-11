import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const CardButton = (props) => (
  <Grid.Column width={props.width}>
  
    <Card fluid>
      <Link to={props.link}>
        <Card.Content>
          {props.text}
        </Card.Content>
        <Image src={props.image} rounded size="small" ui={false}/>
      </Link>
    </Card>
  </Grid.Column>
)


export default CardButton
