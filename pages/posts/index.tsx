import React from 'react';
import { useRouter } from 'next/router';

type PostProps = {
  content: {
    hero: any;
    features: any[];
  };
};

const Posts = ({ content }: PostProps) => {
  const router = useRouter();

  return (
    <div>
      <h3 color={router === this}>Posts Page Indsex</h3>
      <button onClick={(e) => router.push('posts/[id]', '/posts/1')}>
        Post 1
      </button>
      {content.features.map((feature) => {
        return (
          <div>
            <p>{feature.title}</p>
            <p>{feature.body}</p>
          </div>
        );
      })}

      <button onClick={(e) => router.push('/')}>Homepage</button>
    </div>
  );
};

/**
 * We should get and inject those props from CMS not hard coded
 */
Posts.defaultProps = {
  content: {
    features: [{ title: 'default feature', body: 'default body' }],
    hero: { title: 'default title', body: 'default body' },
  },
};

export default Posts;
