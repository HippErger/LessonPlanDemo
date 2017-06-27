import React, {Component} from 'react';
import Link from 'next/link';
import {initStore} from '../store';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import {
  loadSubjectTile
} from '../actions';

class followingTile extends Component {
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
        <Link
        key={instance._id}
        href={{pathname: '/fanview',
          query: {_id: instance._id}}}>
          <div >
            <hr />
            <h3>{instance.username}</h3>
            <h5>Lessons: 8 </h5>
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

followingTile.propTypes = {
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
/* <h5> Total Lesson Plans:
  {
     +
    instance.subject[1].length +
    instance.subject[2].length +
    instance.subject[3].length
  }
  </h5>*/

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(followingTile);
