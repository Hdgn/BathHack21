import React from 'react'
import { Card, Grid, Image, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const CardButton = (props) => (
  <Grid.Column width={props.width}>
  
    <Card fluid color='orange'>
      <Link to={props.link}>
        <Card.Content>
          <Header as="h1">{props.text}</Header>
          <Image src={props.image} rounded size="large" wrapped ui={false} />
        </Card.Content>
      </Link>
    </Card>
  </Grid.Column>
)


export default CardButton
