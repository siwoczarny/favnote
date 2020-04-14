import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  padding: 64px 50% 24px 64px;
`;

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InnerWrapper = styled.div`
  position: relative;
`;

const StyledHeading = styled(Heading)`
  margin: 0;
`;

const StyledImage = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 50px;
  position: relative;
  transform: translateY(-25%);
`;

const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const DetailsTemplate = ({ pageContext, title, content, twitterName, articleUrl }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledHeader>
        <InnerWrapper>
          <StyledHeading big as="h1">
            {title}
          </StyledHeading>
        </InnerWrapper>
        <InnerWrapper>
          {pageContext === 'twitters' && (
            <StyledImage src={`https://avatars.io/twitter/${twitterName}`} />
          )}
        </InnerWrapper>
      </StyledHeader>
      <InnerWrapper>
        <Paragraph>{content}</Paragraph>
        {pageContext === 'articles' && <StyledLink href={articleUrl}>Open article</StyledLink>}
      </InnerWrapper>
      <Button as={Link} to={`/${pageContext}`} activecolor={pageContext}>
        CLOSE / SAVE
      </Button>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageContext: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  content: '',
  articleUrl: '',
  twitterName: '',
};

export default withContext(DetailsTemplate);
