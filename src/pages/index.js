import React from 'react';
import Link from 'next/link';

function IndexPage() {
  return (
    <div>
      <h3>SMEK</h3>
      <form>
        <input
          type='text'
          name='username'
          placeholder='username'
        />
        <input
          type='text'
          name='password'
          placeholder='password'
        />
      </form>
      <Link href="/profile">
        <button>Log In</button>
      </Link>
      <br />
      <br />
      <Link href="/signup">
        <button>Not a member?</button>
      </Link>
    </div>
  );
}

export default IndexPage;
