import CanvasMixing from './CanvasMixin'
import { mount, shallowMount } from '@vue/test-utils'

const mountFakeComponent = (mountStrategy, options = {}) => {
  const Component = {
    render () {},
    data: () => ({}),
    props: {
      foo: {
        type: String,
        default: ''
      }
    },
    mixins: [CanvasMixing],
    methods: {
      doCanvasRender: function () { return {} }
    }
  }

  return mountStrategy(Component, options)
}

const dimensions = {
  width: 200,
  height: 200
}

beforeAll(() => {
  window.screen = {
    screenWidth: 300,
    screenHeight: 300
  }
})
describe('Testing Canvas mixin', () => {
  describe('Testing mixin methods', () => {
    it('doCanvasState should return valid value ', () => {
      const wrapper = mountFakeComponent(shallowMount)

      expect(wrapper.vm.doCanvasState('saveBeforeRender', 'foo')).toBeTruthy()
    })

    it('doCanvasState should return falsy value if parameter is not valid', () => {
      const wrapper = mountFakeComponent(shallowMount)

      expect(wrapper.vm.doCanvasState('invalidValue', 'foo')).toBeFalsy()
    })

    it('doCalcDimensions should return correct object', () => {
      const wrapper = mountFakeComponent(shallowMount)

      expect(wrapper.vm.doCalcDimensions(200, 200)).toStrictEqual({
        width: dimensions.width,
        height: dimensions.height,
        center: {
          x: dimensions.width / 2,
          y: dimensions.height / 2
        }
      })
    })

    it('mixSaveBeforeRender should return doCanvasState object', () => {
      const wrapper = mountFakeComponent(shallowMount)

      expect(wrapper.vm.mixSaveBeforeRender()).toBeTruthy()
    })

    it('mixGetDimensions should return correct value', () => {
      const wrapper = mountFakeComponent(shallowMount)

      expect(wrapper.vm.mixGetDimensions(dimensions)).toStrictEqual({
        documentSize: {
          center: {
            x: 0,
            y: 0
          },
          height: 0,
          width: 0
        },
        elementSize: {
          center: {
            x: 100,
            y: 100
          },
          height: 200,
          width: 200
        },
        screenSize: {
          center: {
            x: 0,
            y: 0
          },
          height: 0,
          width: 0
        }
      })
    })

    it('mixUnityAsNumber should return value without unity measure', () => {
      const numbersWithUnity = [
        '100px',
        '100%',
        '100rem',
        '100em'
      ]

      const wrapper = mountFakeComponent(shallowMount)

      numbersWithUnity.forEach((number) => {
        expect(wrapper.vm.mixUnityAsNumber(number)).toBe(100)
      })
    })

    it('mixUnityAsNumber should return falsy value if parameter is not valid', () => {
      const wrapper = mountFakeComponent(shallowMount)

      expect(wrapper.vm.mixUnityAsNumber(null)).toBeFalsy()
    })

    it('mixGet16by9 should return a 16 by 9 proportion', () => {
      const wrapper = mountFakeComponent(shallowMount)

      expect(typeof wrapper.vm.mixGet16by9(dimensions.width)).toBe('number')
    })
  })
})
