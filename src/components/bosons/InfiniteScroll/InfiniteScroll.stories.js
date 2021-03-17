import yooInfiniteScroll from './InfiniteScroll.vue'
import PropsConfig from './InfiniteScroll.config'

export default {
  title: 'Yoonit/InfiniteScroll',
  component: yooInfiniteScroll,
  argTypes: {
    loadingFill: {
      control: {
        type: 'select',
        options: PropsConfig.loadingFill.options
      }
    },
    loadingSize: {
      control: {
        type: 'select',
        options: PropsConfig.loadingSize.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooInfiniteScroll },
  template:
    `<yoo-infinite-scroll v-bind="$props">
        <template v-slot>
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
    </yoo-infinite-scroll>`
})

export const Custom = Template.bind({})
Custom.args = { rootMargin: '0px 0px 30% 0px' }
