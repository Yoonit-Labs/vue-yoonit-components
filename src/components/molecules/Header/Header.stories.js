import yooHeader from './Header.vue'
import yooButton from '@/components/atoms/Button/Button.vue'
import yooAvatar from '@/components/atoms/Avatar/Avatar.vue'
import logo from '@/assets/yoonit-icon.jpg'

export default {
  title: 'Yoonit/YooHeader',
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
        HEADER
      </template>

      <template v-slot:header-right>
        <yoo-button text="" icon="user" variation="clear"></yoo-button>
      </template>
    </yoo-header>`
})

const TemplateImage = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooHeader, yooButton },
  template:
    `<yoo-header v-bind="$props">
      <template v-slot:header-left>
        <yoo-button text="" icon="chevron-left" variation="clear"></yoo-button>
      </template>

      <template v-slot:header-center>
        <img src="${logo}" style="display:flex; margin: 0 auto;" width="40%" alt="" />
      </template>

      <template v-slot:header-right>
        <yoo-button text="" icon="user" variation="clear"></yoo-button>
      </template>
    </yoo-header>`
})

const TemplateAvatar = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooHeader, yooButton, yooAvatar },
  template:
    `<yoo-header v-bind="$props">
      <template v-slot:header-left>
        <yoo-avatar image="${logo}" size="small"></yoo-avatar>
      </template>

      <template v-slot:header-center>
        AVATAR AND BUTTON
      </template>

      <template v-slot:header-right>
        <yoo-button text="" icon="search" variation="clear" fill="dark"></yoo-button>
      </template>
    </yoo-header>`
})

export const Custom = Template.bind({})

export const Image = TemplateImage.bind({})

export const Avatar = TemplateAvatar.bind({})
