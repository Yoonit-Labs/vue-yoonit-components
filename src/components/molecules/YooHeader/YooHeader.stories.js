import yooHeader from './YooHeader.vue'
<<<<<<< HEAD
import yooButton from '@/components/atoms/YooButton/YooButton.vue'
=======
import yooButton from '@/components/atoms/Button/Button.vue'
>>>>>>> a0e1b578264e31dc18dcdd379833b5f25aa25892
import logo from '@/assets/yoonit-logo.jpg'

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
<<<<<<< HEAD
      <template v-slot:header-center>
        <img src="${logo}" style="display:flex; margin: 0 auto;" width="40%" alt="" />
      </template>
=======

      <template v-slot:header-center>
        <img src="${logo}" style="display:flex; margin: 0 auto;" width="40%" alt="" />
      </template>

>>>>>>> a0e1b578264e31dc18dcdd379833b5f25aa25892
      <template v-slot:header-right>
        <yoo-button text="" icon="user" variation="clear"></yoo-button>
      </template>
    </yoo-header>`
})

export const Custom = Template.bind({})
<<<<<<< HEAD
Custom.slots = { text: 'Yoo Warning test component' }
=======
Custom.slots = { text: 'Yoo Warning test component' }
>>>>>>> a0e1b578264e31dc18dcdd379833b5f25aa25892
