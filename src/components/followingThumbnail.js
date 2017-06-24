import React, {Component} from 'react';
import Link from 'next/link';

class FollowingThumbnail extends Component {
  render() {
    return (
    <Link href="/fanview">
      <div>
        <h4>Username</h4>
        <h5>Subjects</h5>
        <h6>Years VAR </h6>
        <span>Followers</span>
        &nbsp; &nbsp;
        <span>Avatar</span>
      </div>
    </Link>

    );
  }
}

export default FollowingThumbnail;
