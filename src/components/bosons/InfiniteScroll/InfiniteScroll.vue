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
/**
 * ██╗   ██╗ ██████╗  ██████╗ ███╗   ██╗██╗████████╗
 * ╚██╗ ██╔╝██╔═══██╗██╔═══██╗████╗  ██║██║╚══██╔══╝
 *  ╚████╔╝ ██║   ██║██║   ██║██╔██╗ ██║██║   ██║
 *   ╚██╔╝  ██║   ██║██║   ██║██║╚██╗██║██║   ██║
 *    ██║   ╚██████╔╝╚██████╔╝██║ ╚████║██║   ██║
 *    ╚═╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═╝   ╚═╝
 *
 * https://yoonit.dev - about@yoonit.dev
 *
 * Vue Yoonit Components
 * VueJS Atomic Design System framework
 *
 * Vitória Costa, Tiago Brito, Fernando Junior, Sabrina Sampaio, Gabriel Mule, Gabriel Moraes, Gabriel Rizzo & Luigui Delyer @ 2020-2021
 */

import PropsConfig from '@/components/bosons/InfiniteScroll/InfiniteScroll.config'

export default {
  name: 'YooInfiniteScroll',
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
    },
    showLoading: {
      type: Boolean,
      default: false
    },
    isReady: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({}),
  mounted () {
    this.scrollIntersection()
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
      const observer = new IntersectionObserver(this.callbackObserver, { rootMargin: this.rootMargin })
      observer.observe(this.$refs.infiniteScroll)
    },
    callbackObserver (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting && this.isReady) {
          this.$emit('intersecting', entry.isIntersecting)
        }
      })
    }
  }
}
</script>
