import React, {Component} from 'react';
import FollowingThumbnail from '../components/followingThumbnail';
import Header from '../components/header';
import SubjectsThumbnail from '../components/subjectsThumbnail';


class FanView extends Component {
  render() {
    //  @TODO will need to map over the number of classes & followings of the user
    // has to create the thumbnail for each one.
    return (
      <div>
        <Header />
        <h3>Name of followed Teacher</h3>
          <SubjectsThumbnail />
          <hr />
          <h6>This will be aligned to the right with followingThumbnails</h6>
          <FollowingThumbnail />
      </div>
    );
  }
}

export default FanView;
