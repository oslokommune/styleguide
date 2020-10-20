import twigTag from '../atoms/buttons/tag/tag.twig';

export default {
  title: 'Atoms/Tag',
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
    }
  },
};

export const tagPrimary = ({ content, url }) => (twigTag({
  "tag": {
    "content": content,
    "url": url,
    "state": "primary"
  },
}));

export const tagSuccess = ({ content, url }) => (twigTag({
  "tag": {
    "content": content,
    "url": url,
    "state": "success"
  },
}));

export const tagWarning = ({ content, url }) => (twigTag({
  "tag": {
    "content": content,
    "url": url,
    "state": "warning"
  },
}));

export const tagDanger = ({ content, url }) => (twigTag({
  "tag": {
    "content": content,
    "url": url,
    "state": "danger"
  },
}));
