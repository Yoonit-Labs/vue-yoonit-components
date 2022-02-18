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
  flexDirection: {
    options: [
      'row',
      'row-reverse',
      'column',
      'column-reverse'
    ]
  },
  flexWrap: {
    options: [
      'nowrap',
      'wrap',
      'wrap-reverse'
    ]
  },
  justifyContent: {
    options: [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around'
    ]
  },
  alignItems: {
    options: [
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'stretch'
    ]
  },
  alignContent: {
    options: [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'stretch'
    ]
  }
}
