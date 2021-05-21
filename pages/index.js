/** @jsxImportSource theme-ui */

import { Themed } from 'theme-ui';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import projectData from '../projectData';

import ReactPlayer from 'react-player';

const HomePage = () => {
  return (
    <div sx={{ border: '8px solid rgb(182, 201, 240)' }}>
      <div sx={{ variant: 'layout.page', alignItems: 'flex-start' }}>
        <Themed.h1 sx={{ fontSize: [4, 6], maxWidth: 400 }}>
          Hi, I am Ahmad Ayman
        </Themed.h1>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src='/assets/avatar.jpg'
            alt='avatar'
            sx={{ width: 70, borderRadius: '50%' }}
          />
          <p
            sx={{
              ml: 12,
              // width: 500,
              fontSize: [2, 2, 3],
              fontFamily: 'text',
              lineHeight: 'tight',
            }}
          >
            Aspiring Front-End Engineer, Former VFX Artist. Interested in
            coding, arts, storytelling, animation, games, cooking, baking.
          </p>
        </div>
        <section>
          <h3>You can find me on </h3>
          <section>
            <a
              href='https://github.com/iartist93'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='/assets/rounded/github.svg'
                alt='github'
                sx={{ variant: 'avatars.social' }}
              />
            </a>
            <a
              href='https://www.linkedin.com/in/iartist93'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='/assets/rounded/linkedin.svg'
                alt='linkedin'
                sx={{ variant: 'avatars.social' }}
              />
            </a>
            <a
              href='https://vimeo.com/iartist93'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='/assets/rounded/vimeo.svg'
                alt='vimeo'
                sx={{ variant: 'avatars.social' }}
              />
            </a>

            <a
              href='https://www.instagram.com/iartist93/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='/assets/rounded/instagram.svg'
                alt='instagram'
                sx={{ variant: 'avatars.social' }}
              />
            </a>
            <a
              href='mailto:mongez.me@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='/assets/rounded/email.svg'
                alt='email'
                sx={{ variant: 'avatars.social' }}
              />
            </a>
          </section>
        </section>
        <div sx={{ width: '100%', mt: 40 }}>
          <h2>Latest Projects</h2>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {projectData.map((project) => (
              <ProjectCard project={project} />
            ))}
          </div>
        </div>

        <div sx={{ width: '100%', mt: 40 }}>
          <h2>Latest Artwork</h2>
          <div
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <ReactPlayer
              url='https://vimeo.com/429246658'
              width={640}
              height={640}
              config={{
                vimeo: {
                  playerOptions: {
                    autoplay: false,
                    playsinline: false,
                  },
                },
              }}
            />
          </div>
        </div>
        <div sx={{ width: '100%', mt: 40 }}>
          <h2>Blog</h2>
          <div
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            Soon...
          </div>
        </div>
        {/* <Themed.a as={Link} href='/projects'>
          Projects
        </Themed.a>
        <p>
          This should be a very long text please This should be a very long text
          please This should be a very long text please This should be a very
          long text please.
        </p> */}
      </div>
    </div>
  );
};

export default HomePage;
