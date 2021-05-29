/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Themed } from 'theme-ui';
import { darken, lighten } from '@theme-ui/color';
import Link from 'next/link';
import ProjectCard from '../src/components/ProjectCard';
import projectData from '../src/data/projectData';

import ReactPlayer from 'react-player';
import { useEffect } from 'react';
import { postData } from '../src/helpers/post';

const HomePage = () => {
  const getAllPosts = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/`);
      const result = await response.json();
      console.log('GET ', result);
      return result;
    } catch (e) {
      console.error(`Error getting posts `, e);
    }
  };

  const updatePost = async (id, post) => {
    try {
      const result = await postData(
        `${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`,
        post,
        'PATCH'
      );
      console.log('updated ', result);
      return result;
    } catch (e) {
      console.error(`Error updating post ${id} `, e);
    }
  };

  const deletePost = async (id) => {
    try {
      const result = await postData(
        `${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`,
        {},
        'DELETE'
      );
      console.log('deleted ', result);
      return result;
    } catch (e) {
      console.error(`Error deleting post ${id} `, e);
    }
  };

  const createNewPost = async (post) => {
    try {
      const result = await postData(
        `${process.env.NEXT_PUBLIC_API_URL}/posts`,
        post
      );
      console.log('created ', result);
      return result;
    } catch (e) {
      console.error(`Error creating new post  `, e);
    }
  };

  const sendAll = async () => {
    const post = {
      title: 'post 2',
      content: 'post 2 content ',
    };
    try {
      const newPost = await createNewPost(post);
      await deletePost(0);
      await getAllPosts();
      await createNewPost(post);
      await updatePost(newPost.id, {
        id: 1,
        title: 'post 2222222222222',
        content: 'post 2222222222222222 content ',
      });
      await getAllPosts();
    } catch (e) {
      console.error('Error occured ', e);
    }
  };

  useEffect(() => {
    sendAll();
  }, []);

  return (
    <div sx={{ variant: 'layout.page', alignItems: 'flex-start' }}>
      <div
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Themed.h1
          sx={{
            fontSize: [4, 6],
            maxWidth: 400,
            cursor: 'pointer',
            ':hover': {
              transform: 'rotateY(-0.5deg)',
              textDecoration: 'underline',
              // backgroundImage: (t) =>
              //   `linear-gradient(to top, ${'black'}, ${t.colors.blue1})`,
              // backgroundClip: 'text',
              // WebkitTextFillColor: 'transparent',
            },
          }}
        >
          Hi, I am Ahmad Ayman
        </Themed.h1>
        <a
          as={Link}
          href='/resume'
          sx={{
            backgroundColor: 'lightblue1',
            outline: 'none',
            width: 75,
            height: 35,
            border: 'none',
            color: 'btn3',
            fontWeight: 'heading',
            borderRadius: 4,
            textDecoration: 'none',
            pl: 2,
            pt: 1,
            ':hover': {
              backgroundColor: '#ccd9f5',
            },
            ':active': {
              backgroundColor: '#a4b5d8',
            },
          }}
        >
          Resume
        </a>
      </div>
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
          FrontEnd Engineer & 3D Artist. Interested in coding, arts,
          storytelling, animation, games, cooking and baking.
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
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
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
          WIP...
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
  );
};

export default HomePage;
