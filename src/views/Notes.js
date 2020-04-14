import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems } from 'actions';

class Notes extends Component {
  componentDidMount() {
    const { fetchNotes } = this.props;
    fetchNotes();
  }

  render() {
    const { notes } = this.props;
    return (
      <GridTemplate>
        {notes.map(({ _id: id, title, content }) => (
          <Card key={id} id={id} title={title} content={content} />
        ))}
      </GridTemplate>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
  fetchNotes: PropTypes.func.isRequired,
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = (state) => {
  const { notes } = state;
  return { notes };
};

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchItems('notes')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
