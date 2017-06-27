import React, {Component} from 'react';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import PropTypes from 'prop-types';
import Header from '../components/header';
// import Prompt from 'react-bootstrap-prompt';
import {
  loadLessonList,
} from '../actions';

class lessonList extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const {items} = this.props;

    // const confirmDelete = () => {
    //   Prompt.Actions
    //     .show('do you really want to delete lesson TITLE?')
    //     .then(() => {
    //       console.log('delete confirm was clicked');
    //     })
    //     .catch(() => {
    //       console.log('catch was caught');
    //     });
    // };

    const instances = items.map( instance => {
      return (
        <div key={instance._id}>
          <hr />
          <h3>{instance.title}</h3>
          <p>{instance.summary}</p>
          <Link
            href={{pathname: '/lessonview',
              query: {_id: instance._id}}} >
            <button>
              See Lesson
            </button>
          </Link>
          &nbsp; &nbsp;
          <button onClick={ () => {this.props.deleteItem(instance._id);}} >
            Delete
          </button>
          &nbsp; &nbsp;
          <Link
            href={{pathname: '/',
              query: {_id: instance._id}}}>
            <button>
              Edit Details
            </button>
          </Link>
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
  deleteItem: PropTypes.func.isRequired,
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
    },
    deleteItem: itemID => {
      console.log('delete button on' , itemID, 'was clicked');
    }
  };
}

export default withRedux(
  initStore,
  mapStateToProps,
  mapDispatchToProps
)(lessonList);

/* eslint-disable no-unused-vars */
/* onClick={
  () => {this.props.deleteItem(instance._id);}}

// this hidden component is throwing the error:  Can not call a class as a function
<Prompt.Component ref='prompt' sure='Submit' cancel='Cancel' />


  */
