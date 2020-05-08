import i18N from '@i18n'
import configs from '@configs'
import Language from '@services/language'

let dict

if (!dict) {
  dict = new Language(configs, i18N)
}

const Translate = (props) => {
  const { word = '', parameters, children = '', html } = props
  if (children) {
    return dict.translate(children, parameters, html)
  } else if (word) {
    return dict.translate(word, parameters, html)
  } 
  else {
    return ''
  }
}

export { dict }
export default Translate
