import React from 'react'
import clsx from 'clsx'
import * as Material from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import Input from '@components/Input'
import Translate from '@components/Translate'

import './styles.scss'

const Toolbar = props => {
  const { search, selected, actions, title } = props
  
  const length = selected.length

  const className = clsx(['TableToolbar'])

  const selectHeader = () => {
    if (length > 0) {
      return (
        <div className="selectHeader">
          <Typography color="inherit" variant="subtitle1">
            {selected.length} <Translate>TABLE_SELECTED</Translate>
          </Typography>
          <div className="header_actions">{actions && actions(selected)}</div>
        </div>
      )
    }
  }

  return (
    <Material.Toolbar className={className}>
      <div className="header_filters">
        <Typography variant="h6" id="tableTitle">
          <Translate>{title}</Translate>
        </Typography>
        <Input 
        icon='m_search'
        onChange={search}
        label="TABLE_SEARCH"
        />
      </div>
      {selectHeader()}
    </Material.Toolbar>
  )
}

export default Toolbar
