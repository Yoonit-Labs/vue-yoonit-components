import yooInfiniteScroll from './InfiniteScroll.vue'

export default {
  title: 'Yoonit/InfiniteScroll',
  component: yooInfiniteScroll,
  argTypes: {
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
