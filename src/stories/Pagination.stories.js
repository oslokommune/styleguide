import twigPagination from '../molecules/navigation/pagination/pagination.twig';

export default {
  title: 'Molecules/Pagination',
  argTypes: {
    activeIndex: {
      control: 'number',
      defaultValue: 1
    },
  },
};

export const pagination = ({ activeIndex }) => (twigPagination({
  "pagination": {
    "indexes": [1, 2, 3, 4, 5],
    "activeIndex": activeIndex
  }
}));
