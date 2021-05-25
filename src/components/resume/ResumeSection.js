/** @jsxImportSource theme-ui */

import React from 'react';

const ResumeSection = ({ title, children }) => {
  console.log('childrem ', children);
  return (
    <section
      sx={{
        mt: 1,
        pb: 3,
        width: '100%',
      }}
    >
      <header
        sx={{
          width: '100%',
          py: 1,
          backgroundColor: 'lightblue1',
          pl: 2,
        }}
      >
        <h3 sx={{ m: 0 }}>{title}</h3>
      </header>
      {children}
    </section>
  );
};

export default ResumeSection;
