import YooModal from './Modal'
import PropsConfig from './Modal.config'

export default {
  title: 'Yoonit/YooModal',
  component: YooModal,
  argTypes: {
    fill: {
      control: {
        type: 'select',
        options: PropsConfig.fill.options
      }
    },
    borderStyle: {
      control: {
        type: 'select',
        options: PropsConfig.borderStyle.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YooModal },
  template:
    `<yoo-modal v-bind="$props">
        <template v-slot:modal>
          <h3>MODAL</h3>
          <p>Conteúdo do Modal</p>
        </template>
    </yoo-modal>`
})

export const Custom = Template.bind({})

export const Light = Template.bind({})
Light.args = { fill: 'light' }

export const Dark = Template.bind({})
Dark.args = { fill: 'dark' }

export const BorderSquare = Template.bind({})
BorderSquare.args = { borderStyle: 'square' }

export const BorderRadius = Template.bind({})
BorderRadius.args = { borderStyle: 'rounded' }
