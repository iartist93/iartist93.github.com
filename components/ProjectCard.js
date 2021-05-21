/** @jsxImportSource theme-ui */

import { useRouter } from 'next/router';

const ProjectCard = ({ project }) => {
  const { title, content, tools, website, github } = project;

  const router = useRouter();

  const handleWebsiteClick = (e) => {
    e.preventDefault();
    router.push(website);
  };

  return (
    <div
      sx={{
        width: 300,
        height: 200,
        m: 10,
        pl: 15,
        backgroundColor: 'bglight1',
        borderRadius: 10,
        // borderLeft: `8px solid rgb(196, 73, 194)`,
        borderLeft: `8px solid rgb(255, 229, 226)`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h4 sx={{ mb: 0 }}>{title}</h4>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mb: 12,
          flex: 1,
        }}
      >
        <p sx={{ flex: 1 }}>{content}.</p>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <button
            onClick={handleWebsiteClick}
            sx={{
              backgroundColor: '#b6c9f0',
              outline: 'none',
              width: 75,
              height: 35,
              border: 'none',
              color: 'rgb(33, 9, 78)',
              fontWeight: 'heading',
              borderRadius: 10,
              boxShadow: '-2px 2px 5px 0px rgba(230,230,230,1)',
              ':hover': {
                backgroundColor: '#ccd9f5',
              },
              ':active': {
                backgroundColor: '#a4b5d8',
              },
            }}
          >
            Website
          </button>
          <div
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              mr: 2,
            }}
          >
            {tools.map((tool) => (
              <img
                src={`/assets/tools/${tool}.svg`}
                alt='redux'
                sx={{ variant: 'avatars.tools', borderRadius: 8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
