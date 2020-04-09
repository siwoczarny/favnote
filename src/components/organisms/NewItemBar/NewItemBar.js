import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';
import { addItem as addItemAction } from 'actions';

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
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledDecription = styled(Input)`
  margin: 32px 0 96px;
  border-radius: 20px;
  height: 30vh;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const NewItemBar = ({ pageContext, isVisible, addItem }) => (
  <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
    <Heading> Create new {pageContext}</Heading>
    <StyledInput placeholder="title" />
    {pageContext === 'twitters' && <StyledInput placeholder="Twitter Name" />}
    {pageContext === 'articles' && <StyledInput placeholder="link" />}
    <StyledDecription as="textarea" placeholder="decsription" />
    <Button
      onClick={() =>
        addItem(pageContext, {
          title: '123',
          content: 'lorem lorem',
        })
      }
      activecolor={pageContext}
    >
      Add
    </Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
  isVisible: false,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
