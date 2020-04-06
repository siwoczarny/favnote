import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const notes = [
  {
    title: 'Note 1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    title: 'Note 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '2 day',
  },
  {
    title: 'Note 3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
  },
  {
    title: 'Note 4',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '8 days',
  },
  {
    title: 'Note 5',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '11 days',
  },
  {
    title: 'Note 6',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '14 days',
  },
];

const Notes = () => (
  <UserPageTemplate pageType="note">
    {notes.map((item) => (
      <Card
        key={item.key}
        cardType="note"
        title={item.title}
        content={item.content}
        articleUrl={item.articleUrl}
        created={item.created}
      />
    ))}
  </UserPageTemplate>
);

export default Notes;
