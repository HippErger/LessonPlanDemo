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


// Flavius id is 59526f7b403e1551a0c6f73c

class lessonList extends Component {
  PROFILE_ID = this.props.url.query._id;

  componentDidMount() {
    this.props.onMount(this.PROFILE_ID);
  }


  render() {
    const {item} = this.props;
    console.log('from lessonlist page, 22', item.subjects);
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
    const subjectArray = item.subjects;
    console.log('from lesssonlist page, 34', subjectArray);
    console.log('from lessonlistpage, 35', Object.keys(subjectArray));

    // in this map over I need to map over each of the lessons and create a component for them
    const instancesOfSubjects = subjectArray.map( (instance, index) => {
      return (
        <div key={index}>
          <hr />
          <h3>{instance.title}</h3>
          <Link
            href={{pathname: '/lessonview',
              query: {_id: instance._id}}} >
            <button>
              See All Lessons
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
        {instancesOfSubjects}
      </div>
    );
  }
}

lessonList.propTypes = {
  onMount: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.array.isRequired,
  url: PropTypes.object.isRequired,

};

function mapStateToProps(state) {
  return {
    loading: state.lessonListReducer.loading,
    error: state.lessonListReducer.error,
    item: state.lessonListReducer.item
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: id => {
      dispatch(loadLessonList(id));
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
