import {camelCase} from 'lodash-es'


const returnOrThrow = (convertedString: string, originalString: string, stringCase: string): string => {
  // return converted string if successful
  if (typeof convertedString === 'string' && convertedString !== '') {
    return convertedString
  }
  // throw error
  throw new Error(`converting "${originalString}" to ${stringCase}, resulting in "${convertedString}"`)
}

export const toCamelCase = (string: string): string => {
  /* const convertedString: string = string.toLowerCase()
    .replace(/['"]/g, '')
    .replace(/([-_ ]){1,}/g, ' ')
    .replace(/\W+/g, ' ')
    .trim()
    .replace(/ (.)/g, function ($1) { return $1.toUpperCase() })
    .replace(/ /g, '')
  // return or throw
  return returnOrThrow(convertedString, string, 'camelCase') */

  // const convertedString = string?.includes?.('{') ? string : string
  /* const convertedString = string
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase()) */
  string = string?.trim?.()
  let convertedString = string?.includes?.('{') ? string : camelCase(string)

  /* if( string.startsWith('_') ) {
    convertedString = `_${convertedString}`
  }
  else if( string.startsWith('&') ) {
    convertedString = string
  } */

  // if( string.match(/^[^a-zA-Z0-9가-힣]/g)?.length ) {
  if( string.match(/^[^a-zA-Z가-힣]/g)?.length ) {
    console.log('@@string', string)
    convertedString = string
  }

  if( string.startsWith('-') ) {
    console.log('@@string', string)
    convertedString = `.${string.slice(1)}`
  }

  // convertedString = convertedString.replace(/\b|\\b|\\u0008/g, '')
  //  시스템 특수문자 포함되는 케이스가 있어서 제거해줌
  convertedString = convertedString.replaceAll('\b', '').trim()

  return returnOrThrow(convertedString, string, 'camelCase')
}

const toKebabCase = (string: string): string => {
  const convertedString: string = string
    .replace(/['"]/g, '')
    .replace(/([-_ ]){1,}/g, ' ')
    .replace(/\W+/g, ' ')
    .trim()
    .replace(/ /g, '-')
  // return or throw
  return returnOrThrow(convertedString, string, 'kebabCase')
  // return returnOrThrow(kebabCase(string), string, 'kebabCase')
}

const transformName = (name: string, nameConversion = 'default'): string => {
  // if camelCase
  if (nameConversion === 'camelCase') {
    return toCamelCase(name)
  }
  // if kebabCase
  if (nameConversion === 'kebabCase') {
    return toKebabCase(name)
  }
  return name.trim()//.toLowerCase()
}

export default transformName
export const __testing = {
  toCamelCase: toCamelCase,
  toKebabCase: toKebabCase
}
