export const generateNameInitials = (name, defaultReturnValue) => {
  const DEFAULT_RETURN_VALUE = defaultReturnValue || ''
  if (name) {
    const splittedName = name.split(' ')
    if (splittedName.length === 1) {
      const singleNameSplitted = splittedName[0].split('') || ['?', '?']
      return `${singleNameSplitted[0]}${singleNameSplitted[1] || ''}`
    }
    const firstName = splittedName[0].split('')[0] || ''
    const lastName = splittedName[splittedName.length - 1].split('')[0] || ''
    return `${firstName}${lastName}`
  }
  console.log('caiu fora')
  return DEFAULT_RETURN_VALUE
}
export const formatCpf = (cpf) => {
  if (!cpf || typeof cpf !== 'string') {
    console.warn('Pass a valid value, not null')
    return ''
  }
  const localCpf = cpf
  // eslint-disable-next-line
  return localCpf.replace(/^([0-9]{3})\.?([0-9]{3})\.?([0-9]{3})\-?([0-9]{2})$/g, '$1.$2.$3-$4')
}

// Only for Brazil phone numbers
export const formatPhone = (phone, location = 'br') => {
  if (!phone || typeof phone !== 'string') {
    console.warn('Pass a valid phone and location')
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
    console.warn('First parameter is not a Object')
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
