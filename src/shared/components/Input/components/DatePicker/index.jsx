import 'date-fns'

import moment from 'moment'
import React, { useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'

import './styles.scss'

const DatePicker = props => {
  const [open, setOpen] = useState(false)

  const handleChange = value => {
    const { name } = props
    const event = {
      target: {
        name,
        value: moment.utc(value).format(),
      },
    }
    props.handleChange(event)
  }

  const { label, value = null } = props

  const onClose = () => {
    setOpen(!open)
  }

  const onOpen = () => {
    if(!props.disabled){
      setOpen(!open)
    }
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        {...props}
        open={open}
        type={null}
        label={label}
        value={value}
        onClose={onClose}
        format="MMMM/dd/yyyy"
        className="DatePicker"
        onChange={handleChange}
        onClick={onOpen}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  )
}

DatePicker.defaultProps = {
  error: null,
  helperText: null,
}

export default DatePicker
