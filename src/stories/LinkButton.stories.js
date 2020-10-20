import twigLinkButton from '../atoms/links/link_button/link_button.twig';

export default {
  title: 'Atoms/Link Button',
  argTypes: {
    content: {
      control: 'text',
      defaultValue: 'Inner text'
    },
    url: {
      control: 'text',
      defaultValue: '#'
    },
    ariaLabel: {
      control: 'text'
    },
    modifier: {
      control: {
        type: "select",
        options: ["blue-light", "red", "yellow"]
      }
    },
  },
};

export const linkButton = ({ content, url, modifier, ariaLabel }) => (twigLinkButton({
  "content": content,
  "linkButton": {
    "dataAttrs": [
      { "key": "aria-label", "val": ariaLabel }
    ],
    "url": url,
    "modifiers": "osg-button--" + modifier
  },
}));

export const linkButtonOutline = ({ content, url, modifier, ariaLabel }) => (twigLinkButton({
  "content": content,
  "linkButton": {
    "dataAttrs": [
      { "key": "aria-label", "val": ariaLabel }
    ],
    "url": url,
    "modifiers": "osg-button--outline osg-button--" + modifier
  },
}));

export const linkButtonGhost = ({ content, url, modifier, ariaLabel }) => (twigLinkButton({
  "content": content,
  "linkButton": {
    "dataAttrs": [
      { "key": "aria-label", "val": ariaLabel }
    ],
    "url": url,
    "modifiers": "osg-button--ghost osg-button--" + modifier
  },
}));

export const linkButtonCircle = ({ content, url, modifier, ariaLabel }) => (twigLinkButton({
  "content": content,
  "linkButton": {
    "dataAttrs": [
      { "key": "aria-label", "val": ariaLabel }
    ],
    "url": url,
    "modifiers": "osg-button--circle osg-button--" + modifier
  },
}));
