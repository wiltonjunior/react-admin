import React from 'react'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

import Translate from '@components/Translate'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'

import './styles.scss'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={props.onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

const SelectZabbix = props => {
  const { open, close, title, children, actions, className } = props

  const styles = clsx([
    "Modal",
    className
  ])

  return (
    <div>
    <Dialog className={styles} onClose={close} open={open}>
        <DialogTitle onClose={close} {...props}>
          <Translate>{title}</Translate>
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions>{actions}</DialogActions>
      </Dialog>
    </div>
  )
}

export default SelectZabbix
