import React, { useState }from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import bird from './bird.png'

const Details = (props) => {
  const [open, setOpen] = React.useState(false)
  
  const onPomodoroChange = (value) => {
      console.log(typeof(value))
    props.setPomodoro(Number(value))
  }

  const onBreakChange = (value) => {
    props.setBreak(Number(value))
  }

  const onSave = () => {
    localStorage.setItem('showTimerIndicator', props.showTimerIndicator)
    localStorage.setItem('notification', props.notification)
    localStorage.setItem('ringerType', props.ringerType)
    localStorage.setItem('ringerVolume', props.ringerVolume)
    localStorage.setItem('pomodoro', props.pomodoro)
    localStorage.setItem('break', props.shortBreak)
    localStorage.setItem('pomodoroGoal', props.pomodoroGoal)
  }

  const handleSubmit = () => {
    return
    }

    const handleChange = () => {

    }

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Change Pomodoro Settings</Button>}
    >
      <Modal.Header>Pomodoro Settings</Modal.Header>
      <Modal.Content image scrolling>
        <Image size='medium' src={bird} wrapped />

        <Modal.Description>
          <p>
            Choose your preferences.
          </p>
          <Form>
            <Form.Group widths='equal'>
            {/* <Form.Field label='Time' control='input' / > */}
            {/* <Form.Field label='Time' control='input' value={props.pomodoro} onChange={e => onPomodoroChange(e.target.value)} / >  */}
            <Form.Field label='Pomodoro Goal' control='select' value={props.pomodoroGoal} onChange={e => props.setPomodoroGoal(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
            </Form.Field> 
            <Form.Field label='Pomodoro Time' control='select' value={props.pomodoro} onChange={e => props.setPomodoro(e.target.value)}>
                <option value='20'>20</option>
                <option value='25'>25</option>
                <option value='30'>30</option>
                <option value='35'>35</option>
                <option value='40'>40</option>
                <option value='45'>45</option>
                <option value='50'>50</option>
            
            </Form.Field>
            <Form.Field label='Break Time' control='select' value={props.shortBreak} onChange={e => props.setShortBreak(e.target.value)}>
                <option value='1'>1</option>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
                <option value='25'>25</option>
                <option value='30'>30</option>
                
            </Form.Field>
            <Form.Field label='Ringer Type' control='select'value={props.ringerType} onChange={e => props.setRingerType(e.target.value)}>
                <option value='AlarmClock'>Alarm Clock</option>
                <option value='DoorBell'>Door Bell</option>
                <option value='EightiesAlarm'>80sAlarm</option>
                <option value='ElevatorDing'>Elevator Ding</option>
                <option value='WristwatchAlarm'>Wrist Watch Alarm</option>
            </Form.Field>
            </Form.Group>
            <Form.Group grouped>
            <label> </label>

            <label>Eye Care</label>
            <Form.Field
                label='Yes'
                control='input'
                type='radio'
                name='htmlRadios'
            />
            <Form.Field
                label='No'
                control='input'
                type='radio'
                name='htmlRadios'
            />
            
            </Form.Group>
            {/* <Form.Group grouped> */}
            {/* <label>HTML checkboxes</label>
            <Form.Field label='This one' control='input' type='checkbox' />
            <Form.Field label='That one' control='input' type='checkbox' />
            </Form.Group>
            <Form.Field label='An HTML <textarea>' control='textarea' rows='3' />
            <Form.Field label='An HTML <button>' control='button'>
            HTML Button */}
            {/* </Form.Field> */}
        </Form>
         
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => onSave()} primary>
          Change Default Settings <Icon name='chevron right' />  
          </Button>
        <Button onClick={() => setOpen(false)} primary>
          Proceed <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default Details
