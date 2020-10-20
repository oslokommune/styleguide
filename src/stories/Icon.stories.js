import twigIcon from '../atoms/icons/icon/icon.twig';

export default {
  title: 'Atoms/Icon',
  argTypes: {
    modifier: {
      control: {
        type: "select",
        options: ["24h", "attachment", "backpack"]
      }
    },
  },
};

export const icon = ({ modifier }) => (twigIcon({
  "icon": {
    "modifiers": "osg-icon--" + modifier
  },
}));
