import React from 'react';
import { useRouter } from 'next/router';

const Projects = () => {
  const router = useRouter();

  return (
    <div>
      <h3 color={router === this}>Projects Page Index</h3>
      <button onClick={(e) => router.push('projects/[id]', '/projects/1')}>
        Project 1
      </button>
      <button onClick={(e) => router.push('/')}>Homepage</button>
    </div>
  );
};

export default Projects;
