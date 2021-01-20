import yooModal from './YooModal'
import yooButton from '@/components/atoms/Button/Button.vue'

export default {
  title: 'Yoonit/Modal',
  component: yooModal
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooModal, yooButton },
  template:
    `<yoo-modal v-bind="$props">
      <template v-slot:modal>
        <h3>MODAL</h3>
        <p>Conteúdo do Modal</p>
        <yoo-button text="Confirmar" variation="clear"></yoo-button>
      </template>
    </yoo-modal>`
})

export const Custom = Template.bind({})
Custom.slots = { text: 'YooModal Component' }
