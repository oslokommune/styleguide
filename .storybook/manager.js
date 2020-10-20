import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import OsloLogo from '../src/assets/images/oslo_logo.svg'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Oslo Styleguide',
    brandUrl: '/',
    brandImage: OsloLogo,
    fontBase: '"Oslo Sans", sans-serif',
  })
});
