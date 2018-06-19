
import copyObj from './copyObj'

/**
 * Sets default values on an object
 *
 * @param {object} obj on which to set the default values
 * @param {object} defaultValues the default values
 */
export default function (obj, defaultValues) {
  return Object.assign({}, copyObj(defaultValues), copyObj(obj))
}