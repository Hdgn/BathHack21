import React from 'react'
import Helmet from 'react-helmet'
import { Header } from 'semantic-ui-react'

const TitleComponent = ({ title, show }) => {
  const titleSwitch = (show) ? title : null
  return (
    <Helmet>
      <Header as='h1'>
      <title>{titleSwitch}</title>
      </Header>
    </Helmet>
  )
}

export default TitleComponent
