import React from 'react'

import Utils from '@utils'
import { FormControl, InputLabel, Select, Input, MenuItem, Checkbox, ListItemText } from '@material-ui/core'

import './styles.scss'

const MultipleSelect = (props) => {
  const { array = [], label, value = [], name } = props

  const handleChange = event => {
    if (event.target.value.indexOf(undefined) === -1) {
      event.target.name = name
      props.handleChange(event)
    }
  }

  const verifyGroup = (item, index) => {
    const data = [
      <MenuItem key={index} className="menu-group">
        <p>{item.name}</p>
      </MenuItem>
    ]
    item.group.forEach((field, index) => {
      data.push(
        <MenuItem className="menu-item" key={index} value={field}>
          <Checkbox className="checkbox-item" color="primary" checked={value.includes(field)} />
          <ListItemText primary={field} />
        </MenuItem>
      )
    })
    return data
  }

 const getValue = (selected) => {
    if(Utils.isArray(selected)){
      return selected.join(', ')
    }else{
      return ['']
    }
  }

return (
  <FormControl className="MultipleSelect">
    <InputLabel>
      {label}
    </InputLabel>
    <Select
      {...props}
      multiple
      value={value}
      input={<Input />}
      onChange={handleChange}
      renderValue={getValue}
    >
      {array.map((item, index) => verifyGroup(item, index))}
    </Select>
  </FormControl>
)
}

export default MultipleSelect
