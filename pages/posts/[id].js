import React from 'react';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h3>Post Index for id = {id}</h3>
      <button onClick={(e) => router.push('/projects')}>All Projects</button>
    </div>
  );
};

export default Post;
