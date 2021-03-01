module.exports = {
  type: {
    options: [
      'date',
      'time'
    ]
  },
  value: {
    control: 'date',
    expression: /(\d{1,2}\/\d{1,2}\/\d{2,4})|(\d{4}-\d{1,2}-\d{1,2})|((([0-1]{1}[0-9]{1})|([0-2]{1}[0-3]{1})):[0-5]{1}[0-9]{1})/
  }
}
