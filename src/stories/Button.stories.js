import twigButton from '../atoms/buttons/button/button.twig';

export default {
  title: 'Atoms/Button',
  argTypes: {
    content: {
      control: 'text',
      defaultValue: 'Inner text'
    },
    modifier: {
      control: {
        type: "select",
        options: ["blue-light", "red", "yellow"]
      }
    },
    ariaLabel: {
      control: 'text'
    }
  },
};

export const button = ({ content, modifier, ariaLabel }) => (twigButton({
  "content": content,
  "button": {
    "dataAttrs": [
      { "key": "aria-label", "val": ariaLabel }
    ],
    "modifiers": "osg-button--" + modifier
  },
}));

export const buttonOutline = ({ content, modifier, ariaLabel }) => (twigButton({
  "content": content,
  "button": {
    "dataAttrs": [
      { "key": "aria-label", "val": ariaLabel }
    ],
    "modifiers": "osg-button--outline osg-button--" + modifier
  },
}));

export const buttonGhost = ({ content, modifier, ariaLabel }) => (twigButton({
  "content": content,
  "button": {
    "dataAttrs": [
      { "key": "aria-label", "val": ariaLabel }
    ],
    "modifiers": "osg-button--ghost osg-button--" + modifier
  },
}));

export const buttonCircle = ({ content, modifier, ariaLabel }) => (twigButton({
  "content": content,
  "button": {
    "dataAttrs": [
      { "key": "aria-label", "val": ariaLabel }
    ],
    "modifiers": "osg-button--circle osg-button--" + modifier
  },
}));
