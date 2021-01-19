<template lang="pug">
  YooGridLayout(
    :class="['yoo-card', ...takeModifier]"
    rows="auto"
    cols="*, auto"
    width="100%"
  )
    YooFlexLayout(
      flexDirection="column"
      col="1"
      row="1"
      flexWrap="wrap"
      justifyContent="center"
      :class="['yoo-card__item', ...takeItemsModifier]"
    )
      h3(
        class="yoo-card__title"
      ) {{title}}

      h3(
        class="yoo-card__title"
        v-show="false"
      ) {{privateKey}}

      p(
        v-show="subtitle",
        class="yoo-card__subtitle"
        width="100%"
      ) {{subtitle}}

    YooFlexLayout(
      v-if="controlVisibility"
      col="2"
      row="1"
      :justifyContent="justifySlotContent"
      alignItems="center"
      gap="8px"
    )
      slot(
        name="control"
      )
</template>

<script>

import YooFlexLayout from '@/components/quarks/YooFlexLayout/YooFlexLayout.vue'
import YooGridLayout from '@/components/quarks/YooGridLayout/YooGridLayout.vue'

export default {
  name: 'YooCard',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    subtitle: {
      type: String,
      required: false,
      default: ''
    },
    justifySlotContent: {
      type: String,
      required: false,
      default: 'center',
      validator: value => [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around'
      ]
        .includes(value)
    },
    privateKey: {
      type: [Date, String, Number],
      required: false,
      default: Date.now()
    },
    borderLeft: {
      type: Boolean,
      default: true
    },
    borderFill: {
      type: String,
      required: false,
      default: 'neutral',
      validator: value => [
        'neutral',
        'primary',
        'danger',
        'light',
        'dark',
        'darkest'
      ]
        .includes(value)
    }
  },
  components: {
    YooGridLayout,
    YooFlexLayout
  },
  data: () => ({}),
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  computed: {
    takeModifier () {
      return ''
    },
    takeItemsModifier () {
      const blockItem = 'yoo-card__item'
      const classList = []

      if (this.borderLeft) {
        classList
          .push(`${blockItem}--border-left`)
      }

      classList
        .push(`${blockItem}--border-fill-${this.borderFill}`)

      return classList
    },
    controlVisibility () {
      return !!this.$slots.control
    }
  },
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style src="./YooCard.sass" lang="sass" scoped></style>
