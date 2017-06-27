import React, {Component} from 'react';
// import Link from 'next/link';
import FollowingThumbnail from '../components/followingThumbnail';
import Header from '../components/header';
import SubjectsThumbnail from '../components/subjectsThumbnail';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';

class Profile extends Component {
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

export default withRedux(initStore, null, null)(Profile);
