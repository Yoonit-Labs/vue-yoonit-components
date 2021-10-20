/**
 * ██╗   ██╗ ██████╗  ██████╗ ███╗   ██╗██╗████████╗
 * ╚██╗ ██╔╝██╔═══██╗██╔═══██╗████╗  ██║██║╚══██╔══╝
 *  ╚████╔╝ ██║   ██║██║   ██║██╔██╗ ██║██║   ██║
 *   ╚██╔╝  ██║   ██║██║   ██║██║╚██╗██║██║   ██║
 *    ██║   ╚██████╔╝╚██████╔╝██║ ╚████║██║   ██║
 *    ╚═╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═╝   ╚═╝
 *
 * https://yoonit.dev - about@yoonit.dev
 *
 * Vue Yoonit Components
 * VueJS Atomic Design System framework
 *
 * Vitória Costa, Tiago Brito, Fernando Junior, Sabrina Sampaio, Gabriel Mule, Gabriel Moraes, Gabriel Rizzo & Luigui Delyer @ 2020-2021
 */

export const generateNameInitials = (name, defaultReturnValue) => {
  if (name) {
    const rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu')
    let initials = [...name.matchAll(rgx)]
    initials = ((initials.shift()?.[1]) + (initials.pop()?.[1] || '')).toUpperCase()
    return initials
  }
  return defaultReturnValue || ''
}
export const formatCpf = (cpf) => {
  if (!cpf || typeof cpf !== 'string') {
    return ''
  }
  const localCpf = cpf
  // eslint-disable-next-line
  return localCpf.replace(/^([0-9]{3})\.?([0-9]{3})\.?([0-9]{3})\-?([0-9]{2})$/g, '$1.$2.$3-$4')
}

// Only for Brazil phone numbers
export const formatPhone = (phone, location = 'br') => {
  if (!phone || typeof phone !== 'string') {
    return phone
  }
  return phone.replace(/([+])?([0-9]{2})?([0-9]{2})([0-9]{1})?([0-9]{4})([0-9]{4})/g, '($3) $4$5-$6')
}

export const formatByType = (value, type) => {
  return type === 'cpf'
    ? formatCpf(value)
    : formatPhone(value, 'br')
}

export const buildQueryString = (obj, query, responseFields, token) => {
  let appToken = ''
  if (token) {
    appToken = `token: "${token}",`
  }
  if (obj.constructor !== Object) {
    return false
  }
  let fields = ''
  const keys = Object.keys(obj)
  if (!keys.length) {
    fields = `token: "${token}"`
  }
  fields = keys.reduce((acc, elm) => {
    if (obj[elm] === null || undefined) {
      return acc
    }
    if (typeof obj[elm] === 'boolean' || typeof obj[elm] === 'number') {
      acc = acc + `${elm}: ${obj[elm]},`
      return acc
    }
    acc = acc = acc + `${elm}: "${obj[elm]}",`
    return acc
  }, appToken)

  const queryString = `{
    ${query}(
      ${fields}
    ) {
      ${responseFields}
    }
  }`
  return queryString
}
