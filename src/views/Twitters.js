import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const twitters = [
  {
    id: 1,
    title: 'Article 1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    twitterName: 'marcinkik',
    created: '2 day',
  },
  {
    id: 2,
    title: 'Article 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    twitterName: 'tsumidesho',
    created: '3 day',
  },
  {
    id: 3,
    title: 'Article 3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    twitterName: 'ikropka',
    created: '6 days',
  },
  {
    id: 4,
    title: 'Article 4',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    twitterName: 'ovvlsome',
    created: '10 days',
  },
  {
    id: 5,
    title: 'Article 5',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    twitterName: 'popydo',
    created: '13 days',
  },
  {
    id: 6,
    title: 'Article 6',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    twitterName: 'siwoczarny',
    created: '15 days',
  },
];

const Twitters = () => (
  <GridTemplate pageType="twitter">
    {twitters.map((item) => (
      <Card
        key={item.id}
        cardType="twitter"
        title={item.title}
        content={item.content}
        twitterName={item.twitterName}
        created={item.created}
      />
    ))}
  </GridTemplate>
);

export default Twitters;
