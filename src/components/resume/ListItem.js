/** @jsxImportSource theme-ui */

import React from 'react';

const SectionContent = ({
  ch
}) => {
  return (
    <article>
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          ml: 3,
        }}
      >
        <h4 sx={{ fontWeight: 'section' }}>
          {title},{' '}
          <a
            href={website}
            sx={{
              textDecoration: 'none',
              color: 'blue1',
            }}
          >
            {where}
          </a>
        </h4>
        <p sx={{ display: 'flex', mr: 3 }}>
          <span sx={{ mr: 1, color: 'darkblue3' }}>{startDate}</span> -{' '}
          <span sx={{ ml: 1, color: 'darkblue3' }}>{endDate}</span>
        </p>
      </div>
      <p sx={{ m: 0, ml: 4 }}>
        {/* <ul sx={{ m: 0, p: 0 }}>
          <li>Tool development using Python/MEL for Maya.</li>
          <li>Running FX Shots for Netflix Paranormal series.</li>
        </ul> */}
        <p sx={{ m: 0, p: 0 }}>{description}</p>
      </p>
    </article>
  );
};

export default SectionContent;
