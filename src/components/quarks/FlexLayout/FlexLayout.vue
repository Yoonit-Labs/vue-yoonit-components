 <template lang="pug">
  .yoo-flex-layout(
    :style="[...takeFlexDirection, takeFlexWrap, takeJustifyContent, takeAlignItems, takeAlignContent, takeGap]"
  )
    slot
</template>

<script>

import PropsConfig from '@/components/quarks/FlexLayout/FlexLayout.config'

export default {
  name: 'YooFlexLayout',
  props: {
    flexDirection: {
      type: String,
      default: 'row',
      validator: value => PropsConfig.flexDirection.options.includes(value)
    },
    flexWrap: {
      type: String,
      default: 'nowrap',
      validator: value => PropsConfig.flexWrap.options.includes(value)
    },
    justifyContent: {
      type: String,
      default: 'center',
      validator: value => PropsConfig.justifyContent.options.includes(value)
    },
    alignItems: {
      type: String,
      default: 'stretch',
      validator: value => PropsConfig.alignItems.options.includes(value)
    },
    alignContent: {
      type: String,
      default: 'stretch',
      validator: value => PropsConfig.alignContent.options.includes(value)
    },
    gap: {
      type: String,
      default: '0'
    }
  },
  mounted () {
    this.doGetChildProps()
  },
  updated () {
    this.doGetChildProps()
  },
  computed: {
    takeFlexDirection () {
      return `flex-direction: ${this.flexDirection};`
    },
    takeFlexWrap () {
      return `flex-wrap: ${this.flexWrap};`
    },
    takeJustifyContent () {
      return `justify-content: ${this.justifyContent};`
    },
    takeAlignItems () {
      return `align-items: ${this.alignItems};`
    },
    takeAlignContent () {
      return `align-content: ${this.alignContent};`
    },
    takeGap () {
      if (this.gap !== '0') {
        return `gap: ${this.gap};`
      } else {
        return ''
      }
    }
  },
  methods: {
    doGetChildProps () {
      const child = this.$slots.default
      if (!Array.isArray(child)) {
        return
      }
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
  }
}
</script>

<style src="./FlexLayout.sass" lang="sass" scoped></style>
