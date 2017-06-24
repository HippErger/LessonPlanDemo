import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <div>
      <Link href="/profile">
        <button>Avatar</button>
      </Link>
      &nbsp; &nbsp;
      <Link href="/">
        <button>Lessons</button>
      </Link>
      &nbsp; &nbsp;
      <Link href="/">
        <button>New Lesson</button>
      </Link>
    </div>
  );
}

export default Header;
