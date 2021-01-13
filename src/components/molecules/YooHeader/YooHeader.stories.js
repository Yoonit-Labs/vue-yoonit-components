import yooHeader from './YooHeader.vue'
import yooButton from '@/components/atoms/Button/Button.vue'

export default {
  title: 'Yoonit/Header',
  component: yooHeader
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooHeader, yooButton },
  template:
    `<yoo-header v-bind="$props">
      <template v-slot:header-left>
        <yoo-button text="" icon="chevron-left" variation="clear"></yoo-button>
      </template>

      <template v-slot:header-center>
        <img src="https://user-images.githubusercontent.com/7132697/104505155-408e0e00-55c2-11eb-9571-65e1377d7560.png" style="display:flex; margin: 0 auto;" width="40%" alt="" />
      </template>

      <template v-slot:header-right>
        <yoo-button text="" icon="user" variation="clear"></yoo-button>
      </template>
    </yoo-header>`
})

export const Custom = Template.bind({})
Custom.slots = { text: 'Yoo Warning test component' }
