import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const twitters = [
  {
    title: 'Article 1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://avatars.io/twitter/siwoczarny',
    created: '2 day',
  },
  {
    title: 'Article 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://avatars.io/twitter/siwoczarny',
    created: '3 day',
  },
  {
    title: 'Article 3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://avatars.io/twitter/siwoczarny',
    created: '6 days',
  },
  {
    title: 'Article 4',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://avatars.io/twitter/siwoczarny',
    created: '10 days',
  },
  {
    title: 'Article 5',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://avatars.io/twitter/siwoczarny',
    created: '13 days',
  },
  {
    title: 'Article 6',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://avatars.io/twitter/siwoczarny',
    created: '15 days',
  },
];

const Twitters = () => (
  <UserPageTemplate pageType="twitter">
    {twitters.map((item) => (
      <Card
        key={item.key}
        cardType="twitter"
        title={item.title}
        content={item.content}
        twitterName={item.articleUrl}
        created={item.created}
      />
    ))}
  </UserPageTemplate>
);

export default Twitters;
