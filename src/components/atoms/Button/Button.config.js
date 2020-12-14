module.exports = {
  props: {
    variation: {
      type: String,
      default: 'base',
      required: false,
      options: [
        'base',
        'outline',
        'clear'
      ]
    },
    buttonSize: {
      type: String,
      default: 'normal',
      required: false,
      validator: value =>
        [
          'normal',
          'short',
          'large'
        ]
          .includes(value)
    },
    fill: {
      type: String,
      default: 'primary',
      required: false,
      validator: value =>
        [
          'primary',
          'danger'
        ]
          .includes(value)
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    iconPosition: {
      type: String,
      required: false,
      default: 'left',
      validator: value =>
        [
          'left',
          'right'
        ]
          .includes(value)
    },
    iconSize: {
      type: String,
      required: false,
      default: 'normal',
      validator: value =>
        [
          'large',
          'normal',
          'small'
        ]
          .includes(value)
    },
    iconStyle: {
      type: String,
      required: false,
      default: 'solid',
      validator: value =>
        [
          'solid',
          'regular'
        ]
          .includes(value)
    },
    animation: {
      type: String,
      required: false,
      default: 'none',
      validator: value =>
        [
          'none',
          'pulse'
        ]
          .includes(value)
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    text: {
      type: String,
      required: false,
      default: ''
    },
    hover: {
      type: Boolean,
      required: false,
      default: false
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    },
    iconCustomColor: {
      type: String,
      default: '',
      validator (value) {
        if (value.includes('#')) {
          const rx = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i
          return value.match(rx)
        } else {
          return value === ''
        }
      }
    }
  }
}
