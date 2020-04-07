import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

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

const DateInfo = styled(Paragraph)`
  margin: 0 0 8px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.grey300};
  text-transform: uppercase;
`;

const StyledImage = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 50px;
  position: relative;
  transform: translateY(-25%);
`;

const StyledLink = styled.a`
  position: relative;
  text-transform: uppercase;
`;

const StyledButton = styled(Button)`
  margin: 24px 0 0 0;
`;

const DetailsTemplate = ({ pageType, title, content, twitterName, articleUrl, created }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <StyledHeader>
        <InnerWrapper>
          <StyledHeading big as="h1">
            {title}
          </StyledHeading>
          <DateInfo>created {created}</DateInfo>
        </InnerWrapper>
        <InnerWrapper>
          {pageType === 'twitters' && (
            <StyledImage src={`https://avatars.io/twitter/${twitterName}`} />
          )}
        </InnerWrapper>
      </StyledHeader>
      <InnerWrapper>
        <Paragraph>{content}</Paragraph>
        {pageType === 'articles' && <StyledLink href={articleUrl}>Open article</StyledLink>}
      </InnerWrapper>
      <StyledButton activeColor={pageType}>CLOSE / SAVE</StyledButton>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
  created: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  content: '',
  articleUrl: '',
  twitterName: '',
  created: '',
};

export default DetailsTemplate;
