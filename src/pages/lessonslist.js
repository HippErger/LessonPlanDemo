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


export default lessonList;

// export default withRedux(
//   initStore,
//   null,
//   null
// )(lessonList);
