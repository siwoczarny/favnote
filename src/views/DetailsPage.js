import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { match } = this.props;
    switch (match.path) {
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      default:
        console.log('Matching path unexpected error');
    }
  }

  render() {
    const example = {
      id: 1,
      title: 'Example content',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad voluptatibus ullam numquam nihil deserunt dolore officiis laborum, quasi iste unde? Est placeat quasi laudantium possimus debitis? Sapiente, debitis eaque.',
      twitterName: 'siwoczarny',
      articleUrl: 'https://siwoczarny.github.io/portfolio/',
      created: '20/02/2020',
    };

    const { pageType } = this.state;
    return (
      <DetailsTemplate
        pageType={pageType}
        title={example.title}
        content={example.content}
        twitterName={example.twitterName}
        articleUrl={example.articleUrl}
        created={example.created}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsPage;
