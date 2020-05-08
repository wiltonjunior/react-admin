class Util {
  isObject(value) {
    return value && value.constructor === Object
  }

  isArray(value) {
    return value && value.constructor === Array && value.length
  }

  getValue(obj, path) {
    return String(path)
      .replace(/\[(\w+)\]/g, '.$1')
      .replace(/^\./, '')
      .split('.')
      .reduce((acc, part) => acc && acc[part], obj)
  }

  setValue(obj = {}, path, value) {
    let i
    let array = String(path)
      .replace(/^\./, '')
      .split('.')
    for (i = 0; i < array.length - 1; i++) {
      if (!obj[array[i]]) obj[array[i]] = {}
      obj = obj[array[i]]
    }
    obj[array[i]] = value
  }

  _setParams = (others, value) => {
    if (this.isObject(others)) {
      let params = `${value}?`
      for (const key in others) {
        if (others[key]) {
          params = `${params}${key}=${others[key]}&`
        }
      }
      return params.substring(0, params.length - 1)
    } else {
      return value
    }
  }

  getParams(url, others) {
    let params = ''
    if (others) {
      if (this.isArray(others)) {
        const value = `/${others[0]}`
        params = this._setParams(others[1], value)
      } else if (this.isObject(others)) {
        const value = `/`
        params = this._setParams(others, value)
      } else {
        const value = `/${others}`
        params = this._setParams(others, value)
      }
    }
    return `${url}${params}`
  }
}

export default new Util()
