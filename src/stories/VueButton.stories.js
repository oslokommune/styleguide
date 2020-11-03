import { action } from '@storybook/addon-actions'

import OsgVueButton from 'styleguide_vue/src/atoms/buttons/button/button';

export default {
  title: 'Vue/Button',
  component: OsgVueButton,
  argTypes: {
    slot: {
      control: 'text',
      defaultValue: 'Inner text'
    },
    color: {
      control: {
        type: "select",
        options: ["ghost", "blue-light", "red", "yellow"]
      }
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { OsgVueButton },
  template:
    '<osg-vue-button :on-click="action" v-bind="$props">{{ slot }}</osg-vue-button>',
  methods: { action: action('clicked') }
});

export const Button = Template.bind({});
Button.args = {};
