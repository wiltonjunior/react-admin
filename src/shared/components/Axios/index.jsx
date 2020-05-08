import React, { useState, useEffect } from 'react'

import { toast } from 'react-toastify'

import axios from 'axios'
import Utils from '@utils'
import configs from '@configs'
import { LoadConsumer } from '@contexts/Load'

import Translate from '@components/Translate'

const Axios = props => {
  const initialize = async () => {
    if (props.run) await submit({})
  }

  useEffect(() => {
    initialize() // eslint-disable-next-line
  }, [props.run])

  const [response, setResponse] = useState({})

  let setLoad = () => true

  const activeLoad = inLoad => {
    const { load = true } = props
    if (typeof inLoad === 'function' && load) {
      setLoad = inLoad
    }
  }

  const showLoad = show => {
    if (typeof setLoad === 'function') {
      setLoad(show)
    }
  }

  const sendMessage = (type, message, params) => {
    if (message) {
      const Mensagem = () => (
        <div className="custom-toast">
          <span>
            <i className="pe-7s-way" />
          </span>
          <div className="center-center">
            <Translate parameters={params}>{message}</Translate>
          </div>
        </div>
      )
      if (message) {
        toast[type](<Mensagem />, {
          position: toast.POSITION.TOP_RIGHT,
        })
      }
    }
  }

  const error = error => {
    const message = Utils.getValue(error, 'response.data.message')
    props.onError(error)
    if (message) {
      sendMessage('error', message)
    }
    if (message === 'TOKEN_EXPIRED') {
      window.location.hash = '/login'
    }
  }

  const success = success => {
    const { onSuccess } = props
    const data = Utils.getValue(success, 'data')
    onSuccess(data)
    setResponse(data)
    showLoad(false)
    if (data.message) {
      sendMessage('success', data.message)
    }
  }

  const submit = async data => {
    const { params } = data || {}
    const { messageLoad } = props
    if (params) props = { ...props, params }
    showLoad(typeof messageLoad === 'string' ? messageLoad : true)
    try {
      const object = (await http(props)) || {}
      success(object)
    } catch (err) {
      showLoad(false)

      error(err)
    }
  }

  const { children } = props
  return (
    <LoadConsumer>
      {({ setLoad: load }) => {
        activeLoad(load)
        if (typeof children === 'function') {
          return children({
            submit,
            response,
          })
        } else {
          return children
        }
      }}
    </LoadConsumer>
  )
}

Axios.defaultProps = {
  onError: () => true,
  onSuccess: () => true,
}

const http = async ({ api, params, others, method = 'get' }) => {
  const { endpoints } = configs.api
  let { url } = endpoints[api]
  const urlBase = process.env.REACT_APP_API_URL
  url = `${urlBase}${Utils.getParams(url, others)}`
  const token = sessionStorage.getItem(configs.TokenSession)
  const headers = { Authorization: `Bearer ${token}` }
  return await axios({
    url,
    method,
    headers,
    data: { ...params },
  })
}

const getApi = api => {
  const { endpoints } = configs.api
  const { url } = endpoints[api]
  const urlBase = process.env.REACT_APP_API_URL
  return `${urlBase}${url}`
}

export { getApi, http }
export default Axios
