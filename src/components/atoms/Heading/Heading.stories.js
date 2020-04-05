import React from 'react';
import Heading from './Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
};

export const Normal = () => <Heading>Hello World</Heading>;
export const big = () => <Heading big>Hello World</Heading>;
