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
  borderRadius: {
    options: [
      'square',
      'rounded'
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
  },
  textWeight: {
    options: [
      'thin',
      'regular',
      'medium',
      'semi-bold',
      'bold',
      'extra-bold'
    ]
  }
}
