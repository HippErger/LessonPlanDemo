import React, {Component} from 'react';

/* eslint-disable no-unused-vars */
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
    console.log('lessonList did load!');
  }

  render() {
    return (
      <div>
        <h3>This is the lesson list page </h3>
      </div>
    );
  }
}

lessonList.propTypes = {
  onMount: PropTypes.func.isRequired,

};

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      console.log('onMount, data was passed in lessonslist page');
    }
  };
}

export default withRedux(
  initStore,
  null,
  mapDispatchToProps
)(lessonList);
