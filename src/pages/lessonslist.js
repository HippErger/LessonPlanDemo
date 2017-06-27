import React, {Component} from 'react';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import PropTypes from 'prop-types';
import Header from '../components/header';
import {
  loadLessonList,
} from '../actions';

class lessonList extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div>
        <Header />
        <h3>This is the lesson list page </h3>
      </div>
    );
  }
}

lessonList.propTypes = {
  onMount: PropTypes.func.isRequired,

};

function mapStateToProps(state) {
  return {
    loading: state.lessonListReducer.loading,
    error: state.lessonListReducer.error,
    items: state.lessonListReducer.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(loadLessonList());
      console.log('onMount, data was passed in lessonslist page');
    }
  };
}

export default withRedux(
  initStore,
  mapStateToProps,
  mapDispatchToProps
)(lessonList);

/* eslint-disable no-unused-vars */
