import React from 'react'

import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'

import './styles.scss'

const Add = props => {
  const { label, value, disabled } = props

  const setValue = value => {
    let { name } = props
    const event = {
      target: {
        name,
        value,
      },
    }
    props.handleChange(event)
  }

  const handleChange = ({ target: { value: item } }, { index }) => {
    let { value } = props
    value[index] = item
    setValue(value)
  }

  const addComponent = () => {
    return (
      <IconButton onClick={addItem} className="add-component">
        <span className="span-add">
          <AddIcon />
        </span>
      </IconButton>
    )
  }

  const removeComponent = () => {
    return (
      <IconButton onClick={removeItem} className="add-component">
        <span className="span-add">
          <RemoveIcon />
        </span>
      </IconButton>
    )
  }

  const addItem = () => {
    let { value } = props
    value = [...value, '']
    setValue(value)
  }

  const removeItem = index => {
    let { value } = props
    value.splice(index, 1)
    setValue(value)
  }

  const component = ({ item, index }) => {
    return (
      <TextField
        value={item}
        label={label}
        className="input-value"
        onChange={event => handleChange(event, { index })}
        InputProps={{
          disabled,
          endAdornment: icon(index),
        }}
      />
    )
  }

  const icon = index => {
    return index === 0 ? addComponent(index) : removeComponent(index)
  }

  return (
    <div className="Add">
      {value.map((item, index) => (
        <div key={index} className="item">
          {component({ index, item })}
        </div>
      ))}
    </div>
  )
}

Add.defaultProps = {
  value: [''],
  error: null,
  helperText: null,
}

export default Add
