import twigInputDate from '../molecules/forms/input_date/input_date.twig';

export default {
  title: 'Molecules/InputDate',
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Label'
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Placeholder'
    },
    value: {
      control: 'text',
      defaultValue: '2020-10-15'
    },
  },
};

export const inputDate = ({ label, placeholder, value }) => (twigInputDate({
  "inputDate": {
    "label": label,
    "inputName": "inputName",
    "placeholder": placeholder,
    "max": "2020-03-16",
    "min": "1970-01-01",
    "value": value,
    "isInvalid": false
  }
}));
