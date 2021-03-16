<template lang="pug">
  .yoo-infinite
    slot
    .actionable(
      ref="infiniteScroll"
    )
      .circle-loader(
        v-if="showLoading"
      )
</template>

<script>
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
            console.log('intersecting')
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
