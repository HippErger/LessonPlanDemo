import React, {Component} from 'react';
// import Link from 'next/link';
// import FollowingThumbnail from '../components/followingThumbnail';
import Header from '../components/header';
import FollowingTile from '../components/followingTile';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import PropTypes from 'prop-types';
import {
  loadProfile
} from '../actions';

class Profile extends Component {
  // @TODO this is hard coded for now but will need to figure how to pass this
  // id into the component on sign-in
  componentDidMount() {
    this.props.getProfile('59526f7b403e1551a0c6f73c');
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {item, loading, error} = this.props;
    console.log('this is from the profile page', item);
    return (
      <div>
        <Header />
        <hr />
        <div>
          <FollowingTile />
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  getProfile: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,

};

function mapStateToProps(state) {
  return {
    item: state.profileReducer.item,
    loading: state.profileReducer.loading,
    error: state.profileReducer.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProfile: id => {
      console.log('from profile page57', id);
      dispatch(loadProfile(id));
    }
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Profile);
