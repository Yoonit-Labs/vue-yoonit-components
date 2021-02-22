import yooGridLayout from './GridLayout.vue'
import PropsConfig from './GridLayout.config'

export default {
  title: 'Yoonit/YooGridLayout',
  component: yooGridLayout,
  argTypes: {
    horizontalAlign: {
      control: {
        type: 'select',
        options: PropsConfig.horizontalAlign.options
      }
    },
    verticalAlign: {
      control: {
        type: 'select',
        options: PropsConfig.verticalAlign.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooGridLayout },
  template:
    `<yoo-grid-layout v-bind="$props">
      <div row="1" col="1/3" class="color">Item 1</div>
      <div row="1" col="3" class="color">Item 2</div>
      <div row="1" col="4" class="color">Item 3</div>
      <div row="2" col="1" class="color">Item 4</div>
      <div row="2" col="2" class="color">Item 5</div>
      <div row="2" col="3" class="color">Item 6</div>
      <div row="2" col="4" class="color">Item 7</div>
      <div row="3" col="1" class="color">Item 8</div>
      <div row="3" col="2/5" class="color">Item 9</div>
      <div row="4/6" col="1/3" class="color">Item 10</div>
      <div row="4/6" col="3/5" class="color">Item 11</div>
    </yoo-grid-layout>`
})

const TemplateDefault = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooGridLayout },
  template:
    `<yoo-grid-layout v-bind="$props">
      <div row="1" col="1/3" class="example">Item 1</div>
      <div row="2" col="1" class="example">Item 2</div>
      <div row="2" col="2" class="example">Item 3</div>
    </yoo-grid-layout>`
})

export const Custom = Template.bind({})
Custom.args = { rows: 'auto', cols: 'auto', gap: '10px', height: '300px' }

export const Default = TemplateDefault.bind({})
Default.args = { rows: 'auto', cols: 'auto', height: '140px' }

export const Gap = TemplateDefault.bind({})
Gap.args = { rows: 'auto', cols: 'auto', gap: '40px', height: '140px' }

export const Center = TemplateDefault.bind({})
Center.args = { rows: 'auto', cols: 'auto', height: '140px', verticalAlign: 'center', horizontalAlign: 'center' }
