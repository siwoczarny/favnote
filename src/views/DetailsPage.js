import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';

const example = {
  id: 1,
  title: 'Example content',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad voluptatibus ullam numquam nihil deserunt dolore officiis laborum, quasi iste unde? Est placeat quasi laudantium possimus debitis? Sapiente, debitis eaque.',
  twitterName: 'siwoczarny',
  articleUrl: 'https://siwoczarny.github.io/portfolio/',
  created: '20/02/2020',
};

const DetailsPage = () => (
  <DetailsTemplate
    title={example.title}
    content={example.content}
    twitterName={example.twitterName}
    articleUrl={example.articleUrl}
    created={example.created}
  />
);

export default DetailsPage;
