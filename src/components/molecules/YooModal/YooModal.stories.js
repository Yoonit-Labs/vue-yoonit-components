import yooModal from './YooModal'

export default {
  title: 'Yoonit/Modal',
  component: yooModal
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooModal },
  template:
    `<yoo-modal v-bind="$props">
        <template v-slot:modal>
          <h3>MODAL</h3>
          <p>Conteúdo do Modal</p>
        </template>
    </yoo-modal>`
})

export const Custom = Template.bind({})
