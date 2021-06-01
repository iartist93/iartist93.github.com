/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui';

import ProjectCard from './ProjectCard';
import projectData from '../../data/projectData';
import { useState } from 'react';

const filters = {
  web: 'Web',
  mobile: 'Mobile',
  graphics: 'Graphics',
};

export default function LatestProjects() {
  const [filter, setFilter] = useState('web');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div sx={{ width: '100%', mt: 40 }}>
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h2>Latest Projects</h2>
        <div
          sx={{
            display: 'flex',
            mr: 10,
          }}
        >
          {Object.keys(filters).map((key) => (
            <button
              sx={{
                variant:
                  filter === key ? 'buttons.filterActive' : 'buttons.filter',
              }}
              onClick={() => handleFilterChange(key)}
            >
              {filters[key]}
            </button>
          ))}
        </div>
      </div>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {projectData
          .filter((project) => project.category.includes(filter))
          .map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>
    </div>
  );
}
