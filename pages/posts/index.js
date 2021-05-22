import React from 'react';
import { useRouter } from 'next/router';

const Posts = () => {
  const router = useRouter();

  return (
    <div>
      <h3 color={router === this}>Posts Page Index</h3>
      <button onClick={(e) => router.push('Posts/[id]', '/Posts/1')}>
        Project 1
      </button>
      <button onClick={(e) => router.push('/')}>Homepage</button>
    </div>
  );
};

export default Posts;
