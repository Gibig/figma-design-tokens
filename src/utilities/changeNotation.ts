import {toCamelCase} from '@utils/transformName'

export const changeNotation = (name, currentDelimiter = '/', desiredDelimiter = '.') => {
  return name.split(currentDelimiter).map((n)=> toCamelCase(n)).join(desiredDelimiter)
}
