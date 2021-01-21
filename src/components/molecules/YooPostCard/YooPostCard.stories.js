import yooPostCard from './YooPostCard.vue'
import PropsConfig from './YooPostCard.config'

export default {
  title: 'Yoonit/PostCard',
  component: yooPostCard,
  argTypes: {
    fill: {
      control: {
        type: 'select',
        options: PropsConfig.fill.options
      }
    },
    iconSize: {
      control: {
        type: 'select',
        options: PropsConfig.iconSize.options
      }
    },
    iconFill: {
      control: {
        type: 'select',
        options: PropsConfig.iconFill.options
      }
    },
    iconStyle: {
      control: {
        type: 'select',
        options: PropsConfig.iconStyle.options
      }
    },
    appIndicatorFill: {
      control: {
        type: 'select',
        options: PropsConfig.appIndicatorFill.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooPostCard },
  template:
    '<yoo-post-card v-bind="$props"></yoo-post-card>'
})

export const Custom = Template.bind({})
Custom.args = { title: 'Yoo PostCard', subtitle: 'Test' }

export const Danger = Template.bind({})
Danger.args = { title: 'Yoo PostCard', subtitle: 'Test', fill: 'danger', showIndicator: true, icon: 'cog' }

export const Neutral = Template.bind({})
Neutral.args = { title: 'Yoo PostCard', subtitle: 'Test', fill: 'neutral', showIndicator: true, icon: 'cog' }

export const Light = Template.bind({})
Light.args = { title: 'Yoo PostCard', subtitle: 'Test', fill: 'light', showIndicator: true, icon: 'cog' }

export const Dark = Template.bind({})
Dark.args = { title: 'Yoo PostCard', subtitle: 'Test', fill: 'dark', showIndicator: true, icon: 'cog' }
