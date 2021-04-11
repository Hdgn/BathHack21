import React from 'react'
import {Header} from 'semantic-ui-react'


const StopwatchComponent = ({time}) => {
  return (
    <div className="stopwatch" id="stopwatch">
      <Header as='h1'>
      {time}
      </Header>
    </div>
  )
}

export default StopwatchComponent;
