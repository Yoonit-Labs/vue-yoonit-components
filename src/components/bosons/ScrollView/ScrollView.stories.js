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
    `<yoo-scroll-view v-bind="$props" style="max-height: 250px;">
        <template v-slot>
          <div style="font-family: Montserrat, sans-serif;">
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
            <h3 style="width: 1980px;">Horizontal</h3>
          </div>
        </template>
    </yoo-scroll-view>`
})

export const Custom = Template.bind({})
Custom.args = { orientation: 'vertical' }

export const Default = Template.bind({})

export const Horizontal = Template.bind({})
Horizontal.args = { orientation: 'horizontal' }
