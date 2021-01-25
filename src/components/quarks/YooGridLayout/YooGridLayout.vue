<template lang="pug">
  .yoo-grid-layout(
    :style="[...takeColumns, takeRows, takeGap, takeSize]"
    :class="[...takeAlign]"
  )
    slot
</template>

<script>

import PropsConfig from '@/components/quarks/YooGridLayout/YooGridLayout.config'

export default {
  name: 'YooGridLayout',
  props: {
    rows: {
      type: String,
      required: true
      // "100px, 1fr, *, auto, 2"
      // 0 = * = auto
    },
    cols: {
      type: String,
      required: true
      // "100px, 1fr, *, auto, 2"
      // 0 = * = auto
    },
    gap: {
      type: String,
      default: '0'
    },
    width: {
      type: String,
      required: false
      // 100px
    },
    height: {
      type: String,
      required: false
      // 100px
    },
    horizontalAlign: {
      type: String,
      default: 'stretch',
      validator: value => PropsConfig.horizontalAlign.options.includes(value)
    },
    verticalAlign: {
      type: String,
      default: 'stretch',
      validator: value => PropsConfig.verticalAlign.options.includes(value)
    }
  },
  data: () => ({}),
  mounted () {
    this.doGetChildProps()
  },
  computed: {
    takeRows () {
      const rows = this.rows.split(',').map((elem) => {
        elem = elem.trim()

        if (elem === '0' || elem === '*' || elem === 'auto') {
          return 'auto'
        } else if (this.isInt(elem)) {
          return elem + 'fr'
        } else {
          return elem
        }
      }).join(' ')

      return `grid-template-rows: ${rows};`
    },
    takeColumns () {
      const columns = this.cols.split(',').map((elem) => {
        elem = elem.trim()

        if (elem === '0' || elem === '*' || elem === 'auto') {
          return 'auto'
        } else if (this.isInt(elem)) {
          return elem + 'fr'
        } else {
          return elem
        }
      }).join(' ')

      return `grid-template-columns: ${columns};`
    },
    takeGap () {
      if (this.gap !== '0') {
        return `gap: ${this.gap};`
      } else {
        return ''
      }
    },
    takeAlign () {
      const classList = []

      classList
        .push(
          `yoo-grid-layout--h-${this.horizontalAlign}`
        )

      classList
        .push(
          `yoo-grid-layout--v-${this.verticalAlign}`
        )

      return classList
    },
    takeSize () {
      let size = ''
      if (this.width) {
        size += `width: ${this.width};`
      }

      if (this.height) {
        size += `height: ${this.height};`
      }

      return size
    }
  },
  methods: {
    isInt: (n) => { return /^[+-]?\d+$/.test(n) },
    doGetChildProps () {
      const childNodes = this.$slots.default
      childNodes.forEach(item => {
        if (typeof item.data !== 'undefined') {
          const listStyles = {}
          const attrs = (typeof item.data.attrs !== 'undefined') ? item.data.attrs : item.elm.attributes

          const col = attrs.col
          const row = attrs.row

          if (row) {
            listStyles['grid-row'] = row
          }

          if (col) {
            listStyles['grid-column'] = col
          }

          Object.assign(item.elm.style, listStyles)
        }
      })
    }
  }
}
</script>
