<template lang="pug">
  .yoo-infinite
    slot
    .yoo-infinite__actionable(
      ref="infiniteScroll"
    )
      .yoo-infinite__loader(
        v-if="showLoading"
        :class="[takeLoadingModifier]"
      )
</template>

<script>

import PropsConfig from '@/components/bosons/InfiniteScroll/InfiniteScroll.config'

export default {
  name: 'YooInfiniteScroll',
  data: () => ({
    showLoading: false
  }),
  props: {
    rootMargin: {
      type: String,
      required: false,
      default: '0px 0px 30% 0px'
    },
    loadingFill: {
      type: String,
      default: 'primary',
      validator: value => PropsConfig.loadingFill.options.includes(value)
    },
    loadingSize: {
      type: String,
      default: 'normal',
      validator: value => PropsConfig.loadingSize.options.includes(value)
    }
  },
  computed: {
    /**
    * @description Returns class based on the Loading props
    * @computed takeLoadingModifier
    * @returns {string}
    */
    takeLoadingModifier () {
      const block = 'yoo-infinite__loader'
      const classList = []

      classList
        .push(
          `${block}--${this.loadingFill}`
        )
      classList
        .push(
          `${block}--${this.loadingSize}`
        )
      return classList
    }
  },
  methods: {
    scrollIntersection () {
      const observer = new IntersectionObserver((entries) => {
        this.showLoading = false
        console.log(entries)
        this.showLoading = false
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.showLoading = true
            this.$emit('intersecting', entry.isIntersecting)
          }
        })
      }, { rootMargin: this.rootMargin })
      observer.observe(this.$refs.infiniteScroll)
    }
  },
  mounted () {
    this.scrollIntersection()
  }
}
</script>

<style lang="sass" scoped>
</style>

<style src="./InfiniteScroll.sass" lang="sass" scoped></style>
