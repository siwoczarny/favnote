import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  position: fixed;
  padding: 80px 40px;
  background-color: white;
  border-left: 5px solid ${({ activecolor, theme }) => theme[activecolor]};
  right: 0;
  top: 0;
  width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 9999;
`;

const StyledDecription = styled(Input)`
  margin: 32px 0 96px;
  border-radius: 20px;
  height: 30vh;
`;

const NewItemBar = ({ pageContext }) => (
  <StyledWrapper activecolor={pageContext}>
    <Heading> Create new {pageContext}</Heading>
    <Input placeholder="title" />
    <StyledDecription as="textarea" placeholder="decsription" />
    <Button activecolor={pageContext}>Add</Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(NewItemBar);
