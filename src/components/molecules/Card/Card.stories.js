import React from 'react';
import Card from './Card';

export default {
  title: 'Molecules/Card',
  component: Card,
};

export const Note = () => <Card />;
export const Twitter = () => <Card cardType="twitter" />;
export const Article = () => <Card cardType="article" />;
