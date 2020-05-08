import React from 'react'
import clsx from 'clsx'

import './styles.scss'

const TextArea = props => {
  const { value = '', label, error, helperText, placeholder } = props
  const handleChange = ({ target: { value } }) => {
    const { name } = props
    const event = {
      target: {
        name,
        value,
      },
    }
    props.handleChange(event)
  }

  const styles = clsx(['TextArea'], { error })

  return (
    <div className={styles}>
      <label>{label}</label>
      <div className="textArea_body">
        <textarea placeholder={placeholder} onChange={handleChange}></textarea>
      </div>
      <div className="textArea_footer">
        {helperText && <span className="helperText">{helperText}</span>}
        <span className="count">{String(value).length} - 1000</span>
      </div>
    </div>
  )
}
export default TextArea
