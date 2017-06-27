import React, {Component} from 'react';
// import Link from 'next/link';
import FollowingThumbnail from '../components/followingThumbnail';
import Header from '../components/header';
import SubjectsThumbnail from '../components/subjectsThumbnail';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import PropTypes from 'prop-types';
import {
  loadProfile
} from '../actions';

class Profile extends Component {
  componentDidMount() {
    this.props.onMount();
  }
  render() {
    /*  @TODO will need to map over the data to create a thumbnail for each */
    return (
      <div>
        <Header />
        <hr />
        <div>
          <SubjectsThumbnail />
        </div>
        <hr />
        <div>
          <h4>Following Div</h4>
          <FollowingThumbnail />
        </div>
        <hr />
      </div>
    );
  }
}

Profile.propTypes = {
  onMount: PropTypes.func.isRequired,

};

function mapStateToProps(state) {
  return {
    items: state.profileReducer.items,
    loading: state.profileReducer.loading,
    error: state.profileReducer.error,
  };
}

/* eslint-disable no-unused-vars */
function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(loadProfile());
    }
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Profile);
