import React from 'react'

import Translate from '@components/Translate'
import * as Material from '@material-ui/core'
import { MenuItem, InputLabel, FormControl } from '@material-ui/core'

import './styles.scss'

const Select = props => {
  const handleChange = (e, { props: { value, children } }) => {
    const { array = [], nameValue, name } = props
    const event = {
      target: {
        name,
        value,
        item: array.find(item => item[nameValue] === value),
      },
    }
    props.handleChange(event)
  }

  let {
    disabled,
    label,
    value,
    translate,
    nameValue,
    nameText = nameValue,
    array = [],
    inputProps,
  } = props

  return (
    <FormControl className="Select">
      <InputLabel>{label}</InputLabel>
      <Material.Select
        disabled={disabled}
        value={value}
        onChange={handleChange}
        inputProps={inputProps}
      >
        {array.map((item, index) => (
          <MenuItem key={index} value={item[nameValue]}>
            {translate ? (
              <Translate>{item[nameText]}</Translate>
            ) : (
              item[nameText]
            )}
          </MenuItem>
        ))}
      </Material.Select>
    </FormControl>
  )
}

Select.defaultProps = {
  value: '',
  array: [],
}

export default Select
