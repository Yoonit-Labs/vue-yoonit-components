import yooButton from './Button.vue'

export default {
  title: 'Yoonit/Button',
  component: yooButton,
  argTypes: {
    variation: {
      control: {
        type: 'select',
        options: [
          'base',
          'outline',
          'clear'
        ]
      }
    },
    buttonSize: {
      control: {
        type: 'select',
        options: [
          'normal',
          'short',
          'large'
        ]
      }
    },
    fill: {
      control: {
        type: 'select',
        options: [
          'primary',
          'danger'
        ]
      }
    },
    iconPosition: {
      control: {
        type: 'select',
        options: [
          'left',
          'right'
        ]
      }
    },
    iconSize: {
      control: {
        type: 'select',
        options: [
          'large',
          'normal',
          'small'
        ]
      }
    },
    iconStyle: {
      control: {
        type: 'select',
        options: [
          'solid',
          'regular'
        ]
      }
    },
    animation: {
      control: {
        type: 'select',
        options: [
          'none',
          'pulse'
        ]
      }
    },
    iconCustomColor: {
      control: {
        type: 'color'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooButton },
  template:
    '<yoo-button v-bind="$props"></yoo-button>'
})

export const Default = Template.bind({})
Default.args = { text: 'Yoo Button' }
