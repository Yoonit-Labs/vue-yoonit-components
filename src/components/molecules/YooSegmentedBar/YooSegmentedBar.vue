<template lang="pug">
  YooFlexLayout(
    flexDirection="row",
    alignContent="center",
    alignItems="center",
    justifyContent="center",
    flexWrap="nowrap",
    class="yoo-segmented-bar"
  )
    YooFlexLayout(
      v-for="(option, index) in list",
      :key="option.title",
      :class="index !== takeLastItem ? 'yoo-segmented-bar__item yoo-segmented-bar__item--border' : 'yoo-segmented-bar__item '"
      justifyContent="center"
    )
      YooButton(
        :text="option.title"
        variation="clear",
        :fill="index === selectedIndex ? 'primary' : 'default'",
        size="normal",
        style="width: 100%; height: 40px;"
        @onClick="onSelectedIndexChange(index)"
      )
</template>

<script>

import YooFlexLayout from '@/components/quarks/YooFlexLayout/YooFlexLayout.vue'

import YooButton from '@/components/atoms/YooButton/YooButton.vue'

export default {
  name: 'YooSegmentedBar',
  props: {
    list: {
      type: Array,
      required: true
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  components: {
    YooFlexLayout,
    YooButton
  },
  data: () => ({
    selectedIndex: 0
  }),
  mounted () {
    this.selectedIndex = this.currentIndex
  },
  computed: {
    takeLastItem () {
      return this.list.length - 1
    }
  },
  methods: {
    onSelectedIndexChange (index) {
      this.selectedIndex = index
      this.$emit('onClick', index)
    }
  }
}
</script>

<style src="./YooSegmentedBar.sass" lang="sass" scoped></style>
