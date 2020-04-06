import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const articles = [
  {
    id: 1,
    title: 'Article 1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://siwoczarny.github.io/portfolio/',
    created: '1 day',
  },
  {
    id: 2,
    title: 'Article 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://siwoczarny.github.io/portfolio/',
    created: '1 day',
  },
  {
    id: 3,
    title: 'Article 3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://siwoczarny.github.io/portfolio/',
    created: '3 days',
  },
  {
    id: 4,
    title: 'Article 4',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://siwoczarny.github.io/portfolio/',
    created: '4 days',
  },
];

const Articles = () => (
  <GridTemplate pageType="article">
    {articles.map((item) => (
      <Card
        key={item.id}
        cardType="article"
        title={item.title}
        content={item.content}
        articleUrl={item.articleUrl}
        created={item.created}
      />
    ))}
  </GridTemplate>
);
export default Articles;
