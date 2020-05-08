import React from 'react'

import * as Material from '@material-ui/core/'
import { dict } from '@components/Translate'

import './styles.scss'

const Tooltip = props => {
  const { title } = props
  return (
    <Material.Tooltip title={dict.translate(title)}>
      {props.children}
    </Material.Tooltip>
  )
}

export default Tooltip
