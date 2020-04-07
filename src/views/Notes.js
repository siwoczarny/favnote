import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const notes = [
  {
    id: 1,
    title: 'Note 1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    id: 2,
    title: 'Note 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '2 day',
  },
  {
    id: 3,
    title: 'Note 3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
  },
  {
    id: 4,
    title: 'Note 4',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '8 days',
  },
  {
    id: 5,
    title: 'Note 5',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '11 days',
  },
];

const Notes = () => (
  <GridTemplate pageType="notes">
    {notes.map((item) => (
      <Card
        key={item.id}
        id={item.id}
        cardType="notes"
        title={item.title}
        content={item.content}
        articleUrl={item.articleUrl}
        created={item.created}
      />
    ))}
  </GridTemplate>
);

export default Notes;
