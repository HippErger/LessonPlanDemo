import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <div>
      <Link href="/profile">
        <button>Avatar</button>
      </Link>
      &nbsp; &nbsp;
      <Link href={{pathname: '/lessonslist', query: {_id: '59526f7b403e1551a0c6f73c'}}}>
        <button>My Lessons</button>
      </Link>
      &nbsp; &nbsp;
      <Link href="/">
        <button>New Lesson</button>
      </Link>
      &nbsp; &nbsp;
      <Link href="/">
        <button>Sign Out</button>
      </Link>
    </div>
  );
}

export default Header;
