<template lang="pug">
  YooGridLayout.yoo-list-item(
    rows="auto"
    cols="*, auto"
  )
    YooFlexLayout.yoo-list-item__item.m__t--l.m__b--l(
      flexDirection="column"
      col="1"
      row="1"
      flexWrap="wrap"
      justifyContent="center"
      :class="[...takeItemsModifier]"
    )
      h3.yoo-list-item__title(
      ) {{title}}

      p.yoo-list-item__subtitle(
        v-show="subtitle",
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

import YooFlexLayout from '@/components/bosons/FlexLayout/FlexLayout.vue'
import YooGridLayout from '@/components/bosons/GridLayout/GridLayout.vue'

export default {
  name: 'YooListItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    justifySlotContent: {
      type: String,
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
    borderLeft: {
      type: Boolean,
      default: true
    },
    borderFill: {
      type: String,
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
  computed: {
    /**
    * @description Print classes based on the chosen props
    * @computed takeItemsModifier
    * @returns {array}
    */
    takeItemsModifier () {
      const blockItem = 'yoo-list-item'
      const classList = []

      if (this.borderLeft) {
        classList
          .push(`${blockItem}__style--border-left`)
      }

      classList
        .push(`${blockItem}__fill--border-${this.borderFill}`)

      return classList
    },
    /**
    * @description Changes item visibility
    * @computed controlVisibility
    * @returns {boolean}
    */
    controlVisibility () {
      return !!this.$slots.control
    }
  }
}
</script>

<style src="./ListItem.sass" lang="sass" scoped></style>