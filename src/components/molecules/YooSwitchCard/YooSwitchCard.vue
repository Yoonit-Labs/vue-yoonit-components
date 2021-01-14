<template lang="pug">
  YooFlexLayout.m__t--s.m__b--s.m__r--l.m__l--l.p__t--l.p__r--l.p__b--l.p__l--l(
    gap="16px"
    :class="['yoo-switch-card', takeChecked]"
    ref="switch_card"
  )
    YooCheckButton(
      :class="['yoo-switch-card__checkbox']"
      :text="text"
      :size="size"
      :switchCard="true"
      :initialValue="isChecked"
      :textPosition="textPosition"
      @response="doCheck"
    )
</template>

<script>
import YooFlexLayout from '@/components/quarks/YooFlexLayout/YooFlexLayout.vue'
import YooCheckButton from '@/components/atoms/YooCheckButton/YooCheckButton.vue'
import PropsConfig from '@/components/molecules/YooSwitchCard/YooSwitchCard.config'

export default {
  name: 'YooSwitchCard',
  props: {
    text: {
      type: String,
      required: true,
      default: ''
    },
    textPosition: {
      type: String,
      required: false,
      default: 'right',
      validator: value => PropsConfig.textPosition.options.includes(value)
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: 'medium',
      validator: value => PropsConfig.size.options.includes(value)
    }
  },
  components: {
    YooCheckButton,
    YooFlexLayout
  },
  data: () => ({
    isChecked: ''
  }),
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.isChecked = this.checked
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  computed: {
    takeChecked () {
      if (this.isChecked) {
        return 'yoo-switch-card--active'
      } else {
        return ''
      }
    }
  },
  methods: {
    doCheck (e) {
      this.isChecked = e
      this.$emit('response', e)
    }
  },
  filters: {},
  watch: {
    checked (value) {
      this.isChecked = value
    }
  }
}
</script>

<style src="./YooSwitchCard.sass" lang="sass" scoped></style>
