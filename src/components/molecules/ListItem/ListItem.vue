<template lang="pug">
  YooFlexLayout.yoo-list-item(
    justifyContent="space-between"
    alignItems="center"
    flexDirection="row"
    width="100%"
  )
    .yoo-list-item__item.m__t--l.m__b--l
      YooFlexLayout.yoo-list-item__item(
        justifyContent="center"
        alignItems="center"
        :class="[...takeItemsModifier]"
      )
        h3.yoo-list-item__title.m__r--xs(
        ) {{title}}

        p.yoo-list-item__subtitle(
          v-show="subtitle",
          width="100%"
        ) {{subtitle}}

      YooFlexLayout(
        flexWrap="wrap"
        justifyContent="flex-start"
        flexDirection="row"
      )
        p.yoo-table-card__no-detail.m__t--xs.m__b--none(
          v-if="(typeof details !== 'object')"
        )
          | {{ details }}

        p(
          v-else
          v-for="(detail, index) in details",
          :key="index"
          :class="detail.status ? ['yoo-table-card__detail', 'yoo-table-card__detail--on', takeFillModifier] : 'yoo-table-card__detail'"
        )
          | {{ detail.text }}

    YooFlexLayout(
      v-if="controlVisibility"
      :justifyContent="justifySlotContent"
      alignItems="center"
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
    details: {
      type: [Array, String],
      required: false
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
      default: false
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
      if (this.wrapSubtitle) {
        classList
          .push(`${blockItem}__style--wrap`)
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
