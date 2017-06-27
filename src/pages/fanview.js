import React, {Component} from 'react';
import FollowingTile from '../components/followingTile';
import Header from '../components/header';
// import SubjectsLessonList from '../components/subjectsLessonList';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import PropTypes from 'prop-types';

class FanView extends Component {

  PROFILE_ID = this.props.url.query._id;

  componentDidMount() {
    this.props.getProfile(this.PROFILE_ID);
  }

  render() {
    //  @TODO will need to map over the number of classes & followings of the user
    // has to create the thumbnail for each one.
    // @TODO will also need to map over the number of lessons in a subject and
    // create a thumbnail component to be clicked on for each lessson
    return (
      <div>
        <Header />
        <h3>Name of followed Teacher</h3>
          <hr />
          <h6>This will be aligned to the right with followingThumbnails</h6>
          <FollowingTile />
      </div>
    );
  }
}

FanView.propTypes = {
  url: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,

};

// function mapStateToProps(state) {
//   item: state.fanViewReducer.item;
//   loading: state.fanViewReducer.loading;
//   error: state.fanViewReducer.error;
// }

/* eslint-disable no-unused-vars */
function mapDispatchToProps(dispatch) {
  return {
    getProfile: profileID => {
      console.log('got request for profile id:', profileID);
    }
  };
}

export default withRedux(initStore, null, mapDispatchToProps)(FanView);
