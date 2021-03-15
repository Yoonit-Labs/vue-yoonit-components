module.exports = {
  variation: {
    options: [
      'base',
      'outline',
      'clear'
    ]
  },
  buttonSize: {
    options: [
      'normal',
      'short'
    ]
  },
  fill: {
    options: [
      'primary',
      'danger',
      'dark',
      'light',
      'white',
      'black'
    ]
  },
  iconPosition: {
    options: [
      'left',
      'right'
    ]
  },
  iconSize: {
    options: [
      'large',
      'normal',
      'small'
    ]
  },
  iconStyle: {
    options: [
      'solid',
      'regular'
    ]
  },
  animation: {
    options: [
      'none',
      'pulse'
    ]
  },
  iconCustomColor: {
    color: /(#([\da-f]{3}){1,2}|(rgb|hsl)a\((\d{1,3}%?,\s?){3}(1|0?\.\d+)\)|(rgb|hsl)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))/ig
  },
  textSize: {
    options: [
      'xs',
      'sm',
      'md',
      'lg',
      'xl'
    ]
  }
}
