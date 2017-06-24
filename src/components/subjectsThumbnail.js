import React, {Component} from 'react';
import Link from 'next/link';

class SubjectsThumbnail extends Component {
  render() {
    // @TODO will also need to map over the number of lessons in a subject and
    // create a thumbnail component to be clicked on for each lessson
    return (
      <Link href='/lessonview'>
        <div>
          <h4>Class Name</h4>
          <h6>34 Lessons</h6>
          <h6>63 Likes</h6>
          <h6>Last edit Sept7, 2017</h6>
        </div>
      </Link>
    );
  }
}

export default SubjectsThumbnail;
