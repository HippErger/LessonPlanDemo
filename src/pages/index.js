import React from 'react';
import Link from 'next/link';
import Header from '../components/header';

function IndexPage() {
  return (
    <div>
      <Header />
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}

export default IndexPage;
