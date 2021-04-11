import React from 'react'
import {Header} from 'semantic-ui-react'


const StopwatchComponent = ({time}) => {
  return (
    <div className="stopwatch" id="stopwatch">
      <Header size='huge'>
      {time}
      </Header>
    </div>
  )
}

export default StopwatchComponent;
