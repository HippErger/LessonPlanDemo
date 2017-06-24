import React, {Component} from 'react';
import Link from 'next/link';

class SubjectsThumbnail extends Component {
  render() {
    return (
      <Link href='/'>
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
