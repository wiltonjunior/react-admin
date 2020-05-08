import React from 'react'

import * as Material from '@material-ui/core'
import { InputLabel } from '@material-ui/core'

import './styles.scss'

const Checkbox = (props = {}) => {
  const { label, value, name } = props

  const handleChange = ({target: {checked}}) => {
    const event = {
      target: {
        name,
        checked,
        value: checked
      },
    }
    props.handleChange(event)
  }

  return (
    <div className="Checkbox">
      <InputLabel>{label}</InputLabel>
      <Material.Checkbox checked={value} onChange={handleChange} />
    </div>
  )
}

export default Checkbox
