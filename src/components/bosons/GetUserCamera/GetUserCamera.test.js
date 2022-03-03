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

import GetUserCamera from './GetUserCamera'
import PropsConfig from './GetUserCamera.config'

beforeAll(() => {
  window.HTMLVideoElement = {
    width: 1920,
    height: 1080
  }

  window.MediaStream = function () {
    this.stream = []
    this.tracks = []
  }

  window.navigator.mediaDevices = {
    getUserMedia: function () { return new window.MediaStream() }
  }
})

const options = {
  audio: false,
  video: {
    facingMode: 'face',
    width: 1920,
    height: 1080,
    focusMode: 'continuous'
  }
}

describe('Testing GetUserCamera', () => {
  it('Should set up camera correctly', async () => {
    const mediaStream = await GetUserCamera({ element: window.HTMLVideoElement, options })

    expect(mediaStream instanceof window.MediaStream).toBeTruthy()
  })

  it('Should return error if element is not valid', async () => {
    const mediaStream = await GetUserCamera({ element: undefined, options })

    expect(mediaStream).toBe(undefined)
  })

  it('Should return error if options is empty', async () => {
    const mediaStream = await GetUserCamera({ element: window.HTMLVideoElement, options: {} })

    expect(mediaStream).toBe(undefined)
  })

  it('Should return unsupportedError browser error message', async () => {
    window.navigator = {}
    const mediaStream = await GetUserCamera({ element: window.HTMLVideoElement, options: {} })

    expect(mediaStream).toBe(PropsConfig.unsupportedError)
  })

  it('Should return unsupportedError browser error message', async () => {
    window.navigator.getUserMedia = null
    const mediaStream = await GetUserCamera({ element: window.HTMLVideoElement, options: {} })

    expect(mediaStream).toBe(PropsConfig.unsupportedError)
  })
})
