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
import YooFlexLayout from '@/components/quarks/FlexLayout/FlexLayout.vue'
import YooCheckButton from '@/components/atoms/CheckButton/CheckButton.vue'
import PropsConfig from '@/components/molecules/SwitchCard/SwitchCard.config'

export default {
  name: 'YooSwitchCard',
  props: {
    text: {
      type: String,
      default: ''
    },
    textPosition: {
      type: String,
      default: 'right',
      validator: value => PropsConfig.textPosition.options.includes(value)
    },
    checked: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
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

<style src="./SwitchCard.sass" lang="sass" scoped></style>
