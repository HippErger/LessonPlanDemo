import React, {Component} from 'react';
import Link from 'next/link';
import {initStore} from '../store';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import {
  loadSubjectTile
} from '../actions';

class SubjectsThumbnail extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    // @TODO will also need to map over the number of lessons in a subject and
    /* eslint-disable no-unused-vars */
    // create a thumbnail component to be clicked on for each lessson
    const {items, loading, error} = this.props;
    // const instances =
    console.log('getting props', items);
    return (
      <Link href='/lessonview'>
        <div>
          <h4>Class Name</h4>
          <h6>34 Lessons</h6>
          <h6>63 Likes</h6>
          <h6>Last edit Sept7, 2017</h6>
        </div>
      </Link>
    );
  }
}

SubjectsThumbnail.propTypes = {
  onMount: PropTypes.func.isRequired,
  items: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,

};

function mapStateToProps(state) {
  return {
    items: state.subjectTileReducer.items,
    loading: state.subjectTileReducer.loading,
    error: state.subjectTileReducer.error,

  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(loadSubjectTile());
    }
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(SubjectsThumbnail);
