import React, {Component} from 'react';
// import Link from 'next/link';
import FollowingThumbnail from '../components/followingThumbnail';
import Header from '../components/header';
// import withRedux from 'next-redux-wrapper';

class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>My Lessons Div</div>
        <div>
          <h4>Following Div</h4>
          <FollowingThumbnail />
        </div>
      </div>
    );
  }
}

export default Profile;
