import React, {Component} from 'react';
// import Link from 'next/link';
import FollowingThumbnail from '../components/followingThumbnail';
import Header from '../components/header';
import SubjectsThumbnail from '../components/subjectsThumbnail';
// import withRedux from 'next-redux-wrapper';

class Profile extends Component {
  render() {
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

export default Profile;
