import yooScrollView from './ScrollView.vue'
import PropsConfig from './ScrollView.config'

export default {
  title: 'Yoonit/YooScrollView',
  component: yooScrollView,
  argTypes: {
    orientation: {
      control: {
        type: 'select',
        options: PropsConfig.orientation.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooScrollView },
  template:
    `<yoo-scroll-view v-bind="$props">
        <template v-slot>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>item</h3>
          <h3>ultimo</h3>
        </template>
    </yoo-scroll-view>`
})

export const Custom = Template.bind({})
Custom.args = { orientation: 'vertical' }
