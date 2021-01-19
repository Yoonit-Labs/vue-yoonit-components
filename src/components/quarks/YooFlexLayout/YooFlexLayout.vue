 <template lang="pug">
  .yoo-flex-layout(
    :style="[...takeFlexDirection, takeFlexWrap, takeJustifyContent, takeAlignItems, takeAlignContent, takeGap]"
  )
    slot
</template>

<script>

import PropsConfig from '@/components/quarks/YooFlexLayout/YooFlexLayout.config'

export default {
  name: 'YooFlexLayout',
  props: {
    flexDirection: {
      type: String,
      required: false,
      default: 'row',
      validator: value => PropsConfig.flexDirection.options.includes(value)
    },
    flexWrap: {
      type: String,
      required: false,
      default: 'nowrap',
      validator: value => PropsConfig.flexWrap.options.includes(value)
    },
    justifyContent: {
      type: String,
      required: false,
      default: 'center',
      validator: value => PropsConfig.justifyContent.options.includes(value)
    },
    alignItems: {
      type: String,
      required: false,
      default: 'stretch',
      validator: value => PropsConfig.alignItems.options.includes(value)
    },
    alignContent: {
      type: String,
      required: false,
      default: 'stretch',
      validator: value => PropsConfig.alignContent.options.includes(value)
    },
    gap: {
      type: String,
      required: false,
      default: '0'
    }
  },
  components: {},
  data: () => ({}),
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.doGetChildProps()
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  computed: {
    takeFlexDirection () {
      if (this.flexDirection) {
        return `flex-direction: ${this.flexDirection};`
      } else {
        return ''
      }
    },
    takeFlexWrap () {
      if (this.flexWrap) {
        return `flex-wrap: ${this.flexWrap};`
      } else {
        return ''
      }
    },
    takeJustifyContent () {
      if (this.justifyContent) {
        return `justify-content: ${this.justifyContent};`
      } else {
        return ''
      }
    },
    takeAlignItems () {
      if (this.alignItems) {
        return `align-items: ${this.alignItems};`
      } else {
        return ''
      }
    },
    takeAlignContent () {
      if (this.alignContent) {
        return `align-content: ${this.alignContent};`
      } else {
        return ''
      }
    },
    takeGap () {
      if (this.gap !== 0) {
        return `gap: ${this.gap};`
      } else {
        return ''
      }
    }
  },
  methods: {
    isInt: (n) => { return /^[+-]?\d+$/.test(n) },
    doGetChildProps () {
      const child = this.$slots.default

      child.forEach(item => {
        if (typeof item.data !== 'undefined') {
          const listStyles = {}
          const attrs = (typeof item.data.attrs !== 'undefined') ? item.data.attrs : item.elm.attributes
          if (attrs.order) {
            listStyles.order = attrs.order
          }

          if (attrs.flexGrow) {
            listStyles['flex-grow'] = attrs.flexGrow
          }

          if (attrs.flexShrink) {
            listStyles['flex-shrink'] = attrs.flexShrink
          }

          if (attrs.alignSelf) {
            listStyles['align-self'] = attrs.alignSelf
          }

          if (attrs.backgroundColor) {
            listStyles['background-color'] = attrs.backgroundColor
          }

          if (attrs.width) {
            listStyles.width = attrs.width
          }

          if (attrs.height) {
            listStyles.height = attrs.height
          }

          Object.assign(item.elm.style, listStyles)
        }
      })
    }
  },
  filters: {},
  watch: {}
}
</script>

<style src="./YooFlexLayout.sass" lang="sass" scoped></style>
