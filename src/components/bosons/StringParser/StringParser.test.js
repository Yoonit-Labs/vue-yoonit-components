import * as StringParser from './StringParser'

describe('StringParser Methods', () => {

  it('Generates Initials', () => {
    expect(StringParser.generateNameInitials()).toBe('')
    expect(StringParser.generateNameInitials('')).toBe('')
    expect(StringParser.generateNameInitials('', '??')).toBe('??')
    expect(StringParser.generateNameInitials('Default', '??')).toBe('D')
    expect(StringParser.generateNameInitials('Default')).toBe('D')
    expect(StringParser.generateNameInitials('Default Name')).toBe('DN')
    expect(StringParser.generateNameInitials('Default Name Triple')).toBe('DT')
  })

  it('Formats CPF', () => {
    expect(StringParser.formatCpf('12345678901')).toBe('123.456.789-01')
    expect(StringParser.formatCpf(12345678901)).toBe('')
  })

  it('Formats Phone', () => {
    expect(StringParser.formatPhone('99999999999', 'br')).toBe('(99) 99999-9999')
    expect(StringParser.formatPhone(99999999999)).toBe(99999999999)
  })

  it('Formts by type', () => {
    expect(StringParser.formatByType('99999999999', 'phone')).toBe('(99) 99999-9999')
    expect(StringParser.formatByType('12345678901', 'cpf')).toBe('123.456.789-01')
  })

  it('Buids query string', () => {
    expect(StringParser.buildQueryString({ test: 123, testString: 'string', testnull: null }, 'testQuery', 'testResponse')).toBe(`{
    testQuery(
      test: 123,testString: "string",
    ) {
      testResponse
    }
  }`)

    expect(StringParser.buildQueryString({}, 'testQuery', 'testResponse', 123)).toBe(`{
    testQuery(
      token: "123",
    ) {
      testResponse
    }
  }`)
    expect(StringParser.buildQueryString(123, 'testQuery', 'testResponse', 123)).toBe(false)
  })
})
