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
    const {items} = this.props;

    const instances = items.map( instance => {
      return (
        <div key={instance._id}>
          <hr />
          <h3>{instance.title}</h3>
          <p>{instance.summary}</p>
          <hr />
        </div>
      );
    });

    return (
      <div>
        <Header />
        <h3>This is the lesson list page </h3>
        {instances}
      </div>
    );
  }
}

lessonList.propTypes = {
  onMount: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,

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
    }
  };
}

export default withRedux(
  initStore,
  mapStateToProps,
  mapDispatchToProps
)(lessonList);

/* eslint-disable no-unused-vars */
