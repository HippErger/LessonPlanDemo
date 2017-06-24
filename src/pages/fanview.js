import React, {Component} from 'react';
import FollowingThumbnail from '../components/followingThumbnail';
import Header from '../components/header';
import SubjectsLessonList from '../components/subjectsLessonList';

class FanView extends Component {
  render() {
    //  @TODO will need to map over the number of classes & followings of the user
    // has to create the thumbnail for each one.
    // @TODO will also need to map over the number of lessons in a subject and
    // create a thumbnail component to be clicked on for each lessson
    return (
      <div>
        <Header />
        <h3>Name of followed Teacher</h3>
          <SubjectsLessonList />
          <hr />
          <h6>This will be aligned to the right with followingThumbnails</h6>
          <FollowingThumbnail />
      </div>
    );
  }
}

export default FanView;
