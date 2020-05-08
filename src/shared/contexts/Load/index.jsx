import React, { useState } from 'react'

import Translate from '@components/Translate'

import './styles.scss'

const defaultContext = {
  isShow: false,
  message: '',
  setLoad: () => {},
}

const { Consumer, Provider } = React.createContext(defaultContext)

const LoadConsumer = props => {
  return <Consumer>{props.children}</Consumer>
}

const LoadProvider = props => {
  let timer
  const [message, setMessage] = useState()
  const [isShow, setIsShow] = useState()
  const setLoad = show => {
    if (!show) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        setIsShow(show)
        setMessage('')
      }, 300)
    } else {
      setIsShow(show)
      setMessage('')
    }
  }
  const value = {
    isShow,
    message,
    setLoad,
  }
  return <Provider value={value}>{props.children}</Provider>
}

const Load = props => {
  const getTemplate = text => {
    text = !text ? 'LOAD' : text
    return (
      <div className="image">
        <div className="LoadImage lds-css ng-scope">
          <div className="lds-rolling">
            <div />
          </div>
        </div>
        <h5 className="text-center pl-3 pr-3">
          <Translate>{text}</Translate>
        </h5>
      </div>
    )
  }
  const { text, internalLoad } = props
  if (Boolean(internalLoad)) {
    return <div className="load center-center">{getTemplate(text)}</div>
  } else {
    return (
      <LoadConsumer>
        {({ isShow, message }) =>
          isShow && (
            <div className="Load">
              <div className="background" />
              {getTemplate(message)}
            </div>
          )
        }
      </LoadConsumer>
    )
  }
}

Load.defaultProps = {
  text: '',
  internalLoad: false,
}

export { LoadConsumer, LoadProvider }

export default Load
