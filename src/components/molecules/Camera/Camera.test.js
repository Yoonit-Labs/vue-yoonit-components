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

import { mount, shallowMount } from '@vue/test-utils'
import YooCamera from '@/components/molecules/Camera/Camera.vue'
import PropsConfig from './Camera.config'
import { dimensionRulesEnum } from '@/enums/CanvasSize'
import YooGetUserMedia from '@/components/quarks/GetUserMedia/GetUserMedia.vue'

const mockVideoElement = {
  videoWidth: 1920,
  videoHeight: 1080
}

const roiSizeCases = () => ({
  widthHigherThanHeight: {
    width: 500,
    height: 450
  },
  heightHigherThanWidth: {
    width: 450,
    height: 500
  },
  equalDimensions: {
    width: 500,
    height: 500
  }
})

beforeAll(() => {
  window.MediaStream = jest.fn().mockImplementation(() => ({
    addTrack: jest.fn()
  }))
  window.HTMLMediaElement.prototype.play = jest.fn()

  window.getComputedStyle = jest.fn().mockImplementation(() => { return { width: '200px', height: '200px' } })
})

const mountDefaultYooCamera = (mountType) => {
  return mountType(YooCamera, {
    propsData: {
      showCamera: true,
      debug: false,
      capture: true,
      roi: {
        areaRadius: 0,
        areaStroke: 5,
        areaColor: '#d1ff00'
      },
      captureAmount: 3,
      mode: PropsConfig.mode.default,
      base64: true,
      blob: false,
      facingMode: PropsConfig.facingMode.default
    }
  })
}

describe('Testing YooCamera', () => {
  describe('Testing render & style', () => {
    it('Should match snapshot', () => {
      const wrapper = mountDefaultYooCamera(shallowMount)

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Component methods', () => {
    it('Should set canvas size correctly', () => {
      const wrapper = mountDefaultYooCamera(mount)

      expect(Object.keys(wrapper.vm.canvasSize)).toStrictEqual(['width', 'height'])
    })

    it('doVerifyOutputFrame Should return that input is valid', () => {
      const wrapper = mountDefaultYooCamera(mount)
      // eslint-disable-next-line
      const base64Image = new String('image')

      expect(wrapper.vm.doVerifyOutputFrame(base64Image)).toBeTruthy()
    })

    it('doSetCanvasDimension should return canvas dimension output correctly based on computedStyles mock function', () => {
      const wrapper = mountDefaultYooCamera(mount)

      wrapper.vm.doSetCanvasDimension()

      expect(wrapper.vm.$data.canvasSize).toStrictEqual({
        width: 200,
        height: 200
      })
    })

    it('doSetRenderCanvas Should generate correct ROI to document', () => {
      const wrapper = mountDefaultYooCamera(mount)
      const {
        BIG_CANVAS,
        SMALL_CANVAS
      } = dimensionRulesEnum
      const canvasSize = [BIG_CANVAS, SMALL_CANVAS]

      canvasSize.forEach((size) => {
        wrapper.setProps({
          canvasSize: {
            width: size,
            height: size
          },
          mode: PropsConfig.mode.options.find(mode => mode === 'document')
        })

        wrapper.vm.doSetRenderCanvas()

        expect(wrapper.vm.$data.roiWidth).toBeTruthy()
        expect(wrapper.vm.$data.roiHeight).toBeTruthy()
      })
    })

    it('doSetRenderCanvas Should generate correct ROI to document and face', () => {
      const cornerCaseSize = 700
      const {
        BIG_CANVAS,
        SMALL_CANVAS
      } = dimensionRulesEnum
      const canvasSize = [BIG_CANVAS, SMALL_CANVAS, cornerCaseSize]

      canvasSize.forEach((size) => {
        PropsConfig.mode.options.forEach((mode) => {
          window.getComputedStyle = jest.fn().mockImplementation(() => {
            return {
              width: `${size}px`,
              height: `${size}px`
            }
          })
          const wrapper = mount(YooCamera, {
            propsData: {
              showCamera: true,
              debug: false,
              capture: true,
              roi: {
                areaRadius: 0,
                areaStroke: 5,
                areaColor: '#d1ff00'
              },
              captureAmount: 3,
              mode,
              base64: true,
              blob: false,
              facingMode: PropsConfig.facingMode.default
            }
          })

          wrapper.vm.doSetRenderCanvas()

          expect(wrapper.vm.$data.roiWidth).toBeTruthy()
          expect(wrapper.vm.$data.roiHeight).toBeTruthy()
        })
      })
    })

    it('generateFaceRoi should return roi width and height for different dimension inputs', () => {
      const wrapper = mountDefaultYooCamera(mount)

      Object.keys(roiSizeCases()).forEach((sizeVariation) => {
        wrapper.vm.$data.canvasSize = { ...roiSizeCases()[sizeVariation] }
        wrapper.vm.doGenerateFaceRoi(dimensionRulesEnum.face.SMALL_CANVAS_ADJUSTMENT)

        expect(wrapper.vm.$data.roiWidth).toBeTruthy()
        expect(wrapper.vm.$data.roiHeight).toBeTruthy()
      })
    })

    it('generateDocumentRoi should return roi width and height for different dimension inputs', async () => {
      const wrapper = mountDefaultYooCamera(mount)

      wrapper.setProps({
        mode: PropsConfig.mode.options.find(mode => mode === 'document')
      })

      await wrapper.vm.$nextTick()

      Object.keys(roiSizeCases()).forEach((sizeVariation) => {
        wrapper.vm.$data.canvasSize = { ...roiSizeCases()[sizeVariation] }
        wrapper.vm.doGenerateFaceRoi(dimensionRulesEnum.document.SMALL_CANVAS_ADJUSTMENT)

        expect(wrapper.vm.$data.roiWidth).toBeTruthy()
        expect(wrapper.vm.$data.roiHeight).toBeTruthy()
      })
    })

    it('Should call doSetRenderCanvas on mounted hook', async () => {
      const doSetRenderCanvas = jest.fn()

      const { mounted } = YooCamera
      const sampleComponent = {
        $nextTick: () => { return new Promise(resolve => resolve) },
        mounted,
        doSetRenderCanvas
      }
      sampleComponent.mounted()

      await new Promise((resolve) => [
        setTimeout(() => resolve(), 1000)
      ])
      expect(doSetRenderCanvas).toBeCalled()
    })
  })

  describe('Component props', () => {
    it('Should change value from props', async () => {
      const wrapper = mountDefaultYooCamera(mount)

      wrapper.setProps({
        showCamera: false,
        debug: false,
        capture: false,
        roi: {
          areaRadius: 0,
          areaStroke: 5,
          areaColor: '#d1ff00'
        },
        captureAmount: 3,
        mode: PropsConfig.mode.options[1],
        base64: false,
        blob: true,
        facingMode: PropsConfig.facingMode.options[1]
      })

      await wrapper.vm.$nextTick()
      expect(wrapper).toBeTruthy()
    })
  })

  describe('Component computed properties', () => {
    it('Should return correct facing mode', () => {
      const localThis = { facingMode: PropsConfig.facingMode.default }

      expect(YooCamera.computed.takeStream.call(localThis).video.facingMode).toBe(PropsConfig.facingMode.default)
    })

    it('Should generate config', () => {
      // const wrapper = mountDefaultYooCamera(mount)
      const localThis = {
        canvasSize: { width: 400, height: 400 },
        roiWidth: 200,
        roiHeight: 200,
        roi: { areaRadius: 0, areaStroke: 5, areaColor: '#d1ff00' }
      }

      const x = (localThis.canvasSize.width / 2) - (localThis.roiWidth / 2)
      const y = (localThis.canvasSize.height / 2) - (localThis.roiHeight / 2)

      expect(YooCamera.computed.takeRoiConfig.call(localThis))
        .toStrictEqual({
          x,
          y,
          width: localThis.roiWidth,
          height: localThis.roiHeight,
          ...localThis.roi
        })
    })

    it('Should return empty object if canvasSize is empty', () => {
      const localThis = {
        canvasSize: { width: 0, height: 0 },
        roiWidth: 200,
        roiHeight: 200,
        roi: { areaRadius: 0, areaStroke: 5, areaColor: '#d1ff00' }
      }

      expect(YooCamera.computed.takeRoiConfig.call(localThis)).toStrictEqual({})
    })

    it('Should set default value to roi key prop', () => {
      const localThis = {
        canvasSize: { width: 200, height: 200 },
        roiWidth: 200,
        roiHeight: 200,
        roi: PropsConfig.roi.default
      }

      expect(YooCamera.computed.takeRoiConfig.call(localThis)).toStrictEqual({
        x: 0,
        y: 0,
        width: 200,
        height: 200,
        areaColor: '#00FF00',
        areaRadius: 0,
        areaStroke: 10
      })
    })
  })

  describe('Component Event Emition', () => {
    it('Should receive permission denied event and pass it through', () => {
      const wrapper = mountDefaultYooCamera(mount)

      const getUserMedia = wrapper.findComponent(YooGetUserMedia)

      getUserMedia.vm.$emit('permissionDenied')

      expect(wrapper.emitted().permissionDenied).toBeTruthy()
    })

    it('Should receive output event and set it to data', () => {
      const wrapper = mountDefaultYooCamera(mount)

      const getUserMedia = wrapper.findComponent(YooGetUserMedia)

      getUserMedia.vm.$emit('output', mockVideoElement)

      expect(wrapper.vm.$data.userMediaElm).toStrictEqual(mockVideoElement)
      expect(wrapper.vm.$data.frameSize.width).toStrictEqual(mockVideoElement.videoWidth)
      expect(wrapper.vm.$data.frameSize.height).toStrictEqual(mockVideoElement.videoHeight)
    })

    it('Should emit capture event', async () => {
      const wrapper = mountDefaultYooCamera(mount)

      wrapper.vm.$emit('frame')

      await wrapper.vm.$nextTick()
      expect(wrapper.emitted().frame).toBeTruthy()
    })

    it('Should emit finish event', async () => {
      const wrapper = mountDefaultYooCamera(mount)

      wrapper.vm.$emit('finish')

      await wrapper.vm.$nextTick()
      expect(wrapper.emitted().finish).toBeTruthy()
    })

    it('Should emit permissionDenied event', async () => {
      const wrapper = mountDefaultYooCamera(mount)

      wrapper.vm.$emit('permissionDenied')

      await wrapper.vm.$nextTick()
      expect(wrapper.emitted().permissionDenied).toBeTruthy()
    })

    it('Should emit finish when frame count is equal to total', async () => {
      const wrapper = mountDefaultYooCamera(mount)

      wrapper.vm.doGetFrame({ total: 3, count: 3 })

      await wrapper.vm.$nextTick()

      expect(wrapper.emitted('finish')).toBeTruthy()
    })

    it('Should emit finish when frame count is higher then total', async () => {
      const wrapper = mountDefaultYooCamera(mount)

      wrapper.vm.doGetFrame({ total: 3, count: 4 })

      await wrapper.vm.$nextTick()

      expect(wrapper.emitted('finish')).toBeTruthy()
    })

    it('Should not emit finish when frame count is lower then total', async () => {
      const wrapper = mountDefaultYooCamera(mount)

      wrapper.vm.doGetFrame({ total: 3, count: 2 })

      await wrapper.vm.$nextTick()

      expect(wrapper.emitted('finish')).toBeFalsy()
    })
  })
})
