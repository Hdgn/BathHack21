import React from 'react'
import {Header, Grid, Button}  from 'semantic-ui-react'


const ControlsComponent = ({start, stop, reset}) => {
  return (
    <div className = "buttons" id="buttons">
      <Button medium color='yellow' onClick={start} className='control-button start'>Start</Button>
      <Button medium color='yellow' onClick={stop} className='control-button stop'>Stop</Button>
      <Button medium color='yellow' onClick={reset} className='control-button reset'>Reset</Button>
    </div>
  )
}

export default ControlsComponent;
