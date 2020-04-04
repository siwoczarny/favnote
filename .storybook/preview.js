import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';

const loaderFn = () => {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach((fname) => req(fname));
};

addDecorator((storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>);

configure(loaderFn, module);
