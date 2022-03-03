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

import PropsConfig from './GetUserCamera.config'

const GetUserCamera = async ({
  element = undefined,
  options = {}
}) => {
  if (!element ||
      !Object.keys(options).length) {
    return undefined
  }

  if (!navigator.mediaDevices ||
    !navigator.mediaDevices.getUserMedia) {
    return PropsConfig.unsupportedError
  }

  if (options.video &&
    options.video.width) {
    element.width = options.video.width
  }

  if (options.video &&
    options.video.height) {
    element.height = options.video.height
  }

  return navigator.mediaDevices.getUserMedia(options)
}

export default GetUserCamera
