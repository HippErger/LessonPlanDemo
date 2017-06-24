import React, {Component} from 'react';
import Link from 'next/link';

class SubjectLessonList extends Component {
  render() {
    return (
      <Link href='/lessonview'>
        <div>This is the SubjectLessonList Component</div>
      </Link>
    );
  }
}

export default SubjectLessonList;
