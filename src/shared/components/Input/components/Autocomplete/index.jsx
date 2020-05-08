import React from 'react'

import * as Material from '@material-ui/lab'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

import Utils from '@utils'

import './styles.scss'

const useStyles = makeStyles(theme => ({
  small: {
    marginRight: 10,
    width: theme.spacing(3),
    height: theme.spacing(3),
  }
}))

const Autocomplete = (props = {}) => {
  const { value, name, label, array = [], nameValue = '', handleChange, disabled } = props

  const onChange = (event, item) => {
    event.target = {
      ...event.target,
      name,
      item,
      value: Utils.getValue(item, nameValue),
    }
    handleChange(event)
  }

  const getOptionLabel = option => {
    if (typeof option === 'string') {
      return option
    }
    if (option.inputValue) {
      return option.inputValue
    }
    return option[nameValue]
  }

  const classes = useStyles()

  return (
    <Material.Autocomplete
      value={value}
      onChange={onChange}
      options={array}
      disabled={disabled}
      className="Autocomplete"
      getOptionLabel={getOptionLabel}
      renderOption={option => (
        <>
          <span className="flag">
            {option.Flag && (
              <Avatar alt="Flag" src={option.Flag} className={classes.small} />
            )}
          </span>
          {option[nameValue]}
        </>
      )}
      renderInput={params => <TextField {...params} label={label} />}
    />
  )
}

Autocomplete.defaultProps = {
  value: '',
  array: [],
  nameValue: '',
}

export default Autocomplete
