import React, { useState, useEffect } from 'react'

import Utils from '@utils'
import Icon from '@components/Icon'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import Collapse from '@material-ui/core/Collapse'
import TableContainer from '@material-ui/core/TableContainer'
import TablePagination from '@material-ui/core/TablePagination'

import Head from './components/Head'
import Toolbar from './components/Toolbar'
import Translate from '@components/Translate'

import './styles.scss'

const EnhancedTable = props => {
  let { data, columns, collapse, checkbox } = props

  const [page, setPage] = useState(0)
  const [open, setOpen] = useState(false)
  const [order, setOrder] = useState('asc')
  const [filtered, setFiltered] = useState([])
  const [selected, setSelected] = useState([])
  const [orderBy, setOrderBy] = useState('calories')
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    setFiltered(data)
  }, [data])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1
    }
    if (b[orderBy] > a[orderBy]) {
      return 1
    }
    return 0
  }

  const getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy)
  }

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0])
      if (order !== 0) return order
      return a[1] - b[1]
    })
    return stabilizedThis.map(el => el[0])
  }

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = data.map(item => item._id)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = []
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }
    setSelected(newSelected)
  }

  const handleChangePage = newPage => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const isSelected = name => {
    return selected.indexOf(name) !== -1
  }

  const handleSearch = ({ target: { value } }) => {
    if (value) {
      let array = []
      for (const item of data) {
        for (const { field } of columns) {
          if (field) {
            const column = Utils.getValue(item, field)
            const result = String(column)
              .toLowerCase()
              .includes(value.toLowerCase())
            if (column && result) {
              array.push(item)
            }
          }
        }
      }
      setFiltered(array)
    } else {
      setFiltered(data)
    }
  }

  const getColumn = row => {
    return columns.map((column, key) => (
      <TableCell className={column?.className} key={key}>
        {column.component
          ? column.component(row)
          : Utils.getValue(row, column.field)}
      </TableCell>
    ))
  }

  const openCollapse = index => {
    if (open === index) {
      setOpen(false)
    } else {
      setOpen(index)
    }
  }

  const columnsLength = () => {
    if(collapse){
      return columns.length + 1
    }else{
      return columns.length
    }
  }

  const getData = () => {
    if (Array.isArray(filtered) && filtered.length) {
      return stableSort(filtered, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const isItemSelected = isSelected(row._id)
          const labelId = `enhanced-table-checkbox-${index}`
          return (
            <>
              <TableRow
                hover
                role="checkbox"
                key={index}
                selected={isItemSelected}
                onClick={() => openCollapse(index)}
                aria-checked={isItemSelected}
              >
                {checkbox && (
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isItemSelected}
                      inputProps={{ 'aria-labelledby': labelId }}
                      onClick={event => handleClick(event, row._id)}
                    />
                  </TableCell>
                )}
                {getColumn(row, index)}
                {collapse && (
                  <TableCell className="icon_arrow">
                    <Icon name="m_arrow_down" size={30} />
                  </TableCell>
                )}
              </TableRow>
              {collapse && (
                <TableRow className={open === index ? 'block' : 'hide'}>
                  <TableCell
                    className="table_collapse"
                    colSpan={columnsLength()}
                  >
                    <Collapse in={open === index}>{collapse(row)}</Collapse>
                  </TableCell>
                </TableRow>
              )}
            </>
          )
        })
    } else {
      return (
        <TableRow>
          <TableCell className="table_empty_list" colSpan={columnsLength()}>
            <Translate>EMPTY_LIST</Translate>
          </TableCell>
        </TableRow>
      )
    }
  }

  return (
    <div className="Table">
      <Toolbar {...props} selected={selected} search={handleSearch} />
      <TableContainer>
        <Table aria-label="simple table">
          <Head
            {...props}
            classes={{}}
            order={order}
            orderBy={orderBy}
            columns={columns}
            rowCount={data.length}
            numSelected={selected.length}
            onRequestSort={handleRequestSort}
            onSelectAllClick={handleSelectAllClick}
          />
          <TableBody>{getData()}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        page={page}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  )
}

export default EnhancedTable
