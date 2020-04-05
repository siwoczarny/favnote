import React from 'react';
import ProTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';

const StyleWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 16px 32px 8px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 88px;
  height: 88px;
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
  position: absolute;
  right: 24px;
  top: 24px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 64%;
  background-position: 50%;
  position: absolute;
  right: 24px;
  top: 24px;
  transform: translateY(-50%);
`;

const Card = ({ cardType }) => (
  <StyleWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Hello World</StyledHeading>
      <DateInfo>Everyday</DateInfo>
      {cardType === 'twitter' && <StyledAvatar src="https://avatars.io/twitter/siwoczarny" />}
      {cardType === 'article' && (
        <StyledLinkButton href="https://siwoczarny.github.io/portfolio/" />
      )}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, minus praesentium doloribus
        tempora inventore libero rem labore cupiditate officiis quod velit sed illum natus
        accusantium sunt quasi maxime tenetur. Distinctio.
      </Paragraph>
      <Button secondary>REMOVE</Button>
    </InnerWrapper>
  </StyleWrapper>
);

Card.propTypes = {
  cardType: ProTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
