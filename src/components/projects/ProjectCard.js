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
        height: 210,
        m: 10,
        p: 2,
        pl: 15,
        backgroundColor: 'bgblue100',
        borderRadius: 10,
        borderLeft: `8px solid black`,
        borderColor: 'red100',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: (theme) => `2px 2px 5px 0px ${theme.colors.shadow}`,
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
        <p sx={{ flex: 1 }}>{content}</p>
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
              variant: 'layout.primaryButton',
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
            {tools.map((tool, index) => (
              <img
                key={index}
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
