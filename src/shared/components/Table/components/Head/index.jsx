import React from 'react'
import PropTypes from 'prop-types'
import Translate from '@components/Translate'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableSortLabel from '@material-ui/core/TableSortLabel'

import './styles.scss'

const Head = props => {
  const {
    collapse,
    columns,
    checkbox,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props

  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }

  return (
    <TableHead className="Header">
      <TableRow>
        {checkbox && (
          <TableCell padding="checkbox">
            <Checkbox
              onChange={onSelectAllClick}
              checked={rowCount > 0 && numSelected === rowCount}
              inputProps={{ 'aria-label': 'select all desserts' }}
              indeterminate={numSelected > 0 && numSelected < rowCount}
            />
          </TableCell>
        )}
        {columns.map((headCell, index) => (
          <TableCell
            key={index}
            className={headCell?.className}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <Translate>{headCell.title}</Translate>
            </TableSortLabel>
          </TableCell>
        ))}
        {collapse && <TableCell className="icon"></TableCell>}
      </TableRow>
    </TableHead>
  )
}

Head.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
}

export default Head
