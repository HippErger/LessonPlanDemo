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
    const instances = items.map( instance => {
      return (
        <Link key={instance._id} href='/lessonview'>
          <div >
            <hr />
            <h3>{instance.username}</h3>
            
            <h5>Followers: {instance.followers}</h5>
            <h5>Following: {instance.following}</h5>
            <h5>Years: {instance.years}</h5>
            <hr />
          </div>
        </Link>
      );
    });

    return (
        <div>
          {instances}
        </div>
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
