import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const articles = [
  {
    title: 'Article 1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://siwoczarny.github.io/portfolio/',
    created: '1 day',
  },
  {
    title: 'Article 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://siwoczarny.github.io/portfolio/',
    created: '1 day',
  },
  {
    title: 'Article 3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://siwoczarny.github.io/portfolio/',
    created: '3 days',
  },
  {
    title: 'Article 4',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://siwoczarny.github.io/portfolio/',
    created: '4 days',
  },
  {
    title: 'Article 5',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://siwoczarny.github.io/portfolio/',
    created: '7 days',
  },
  {
    title: 'Article 6',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://siwoczarny.github.io/portfolio/',
    created: '8 days',
  },
];

const Articles = () => (
  <UserPageTemplate pageType="article">
    {articles.map((item) => (
      <Card
        key={item.key}
        cardType="article"
        title={item.title}
        content={item.content}
        articleUrl={item.articleUrl}
        created={item.created}
      />
    ))}
  </UserPageTemplate>
);
export default Articles;
