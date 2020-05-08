import React, { useState, useRef } from 'react'

import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import AttachFileIcon from '@material-ui/icons/AttachFile'

// Styles
import './styles.scss'

const File = props => {
  const refContainer = useRef(null)

  const [nameFile, setNameFile] = useState(null)

  const handleChange = ({ target: { files } }) => {
    const { name } = props
    const file = files[0]
    if (file) {
      getBase64(file).then(base64 => {
        const event = {
          target: {
            name,
            value: base64,
          },
        }
        props.handleChange(event)
      })
      setNameFile(file.name)
    }
  }

  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })
  }

  const activeFile = () => {
    refContainer.current.click()
  }

  const {readOnly} = props;

  return (
    <div className="File">
      <TextField
        {...props}
        type={null}
        onClick={activeFile}
        value={nameFile}
        InputProps={{
          readOnly,
          endAdornment: (
            <IconButton className="file-icon">
              <AttachFileIcon />
            </IconButton>
          ),
        }}
      />
      <input
        onChange={handleChange}
        className="input-file"
        ref={refContainer}
        type="file"
      />
    </div>
  )
}
export default File
