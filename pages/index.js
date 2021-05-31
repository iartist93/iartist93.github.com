/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Themed, useColorMode } from 'theme-ui';
import { darken, lighten } from '@theme-ui/color';
import Link from 'next/link';

import ReactPlayer from 'react-player';
import { useEffect } from 'react';
import { postData } from '../src/helpers/post';
import ColorMode from '../src/components/ColorMode';
import LatestProjects from '../src/components/projects/LatestProject';

const HomePage = () => {
  const getAllPosts = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/`);
      const result = await response.json();
      // console.log('GET ', result);
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
      // console.log('updated ', result);
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
      // console.log('deleted ', result);
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
      // console.log('created ', result);
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

  const [colorMode] = useColorMode();

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
              //   `linear-gradient(to top, ${'black'}, ${t.colors.primary})`,
              // backgroundClip: 'text',
              // WebkitTextFillColor: 'transparent',
            },
          }}
        >
          Hi, I am Ahmad Ayman
        </Themed.h1>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ColorMode />
          <a
            as='Link'
            href='/resume'
            sx={{
              backgroundColor: 'bgblue300',
              outline: 'none',
              width: 75,
              height: 35,
              border: 'none',
              color: 'black300',
              fontWeight: 'section',
              borderRadius: 4,
              textDecoration: 'none',
              pl: 2,
              pt: 1,
              ':hover': {
                backgroundColor: 'heighlight',
              },
              ':active': {
                backgroundColor: 'active',
              },
            }}
          >
            Resume
          </a>
        </div>
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
          sx={{
            width: 70,
            borderRadius: '50%',
            boxShadow: (theme) => `-1px 1px 2px 0px ${theme.colors.shadow}`,
          }}
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
              src={'/assets/rounded/github.svg'}
              alt='github'
              sx={{
                variant: 'avatars.social',
                filter: colorMode === 'dark' ? 'invert(0.9)' : 'invert(0)',
              }}
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
              sx={{
                variant: 'avatars.social',
                filter: colorMode === 'dark' ? 'invert(0.9)' : 'invert(0)',
              }}
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
              sx={{
                variant: 'avatars.social',
                filter: colorMode === 'dark' ? 'invert(0.9)' : 'invert(0)',
              }}
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
              sx={{
                variant: 'avatars.social',
                filter: colorMode === 'dark' ? 'invert(0.9)' : 'invert(0)',
              }}
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
              sx={{
                variant: 'avatars.social',
                filter: colorMode === 'dark' ? 'invert(0.9)' : 'invert(0)',
              }}
            />
          </a>
        </section>
      </section>
      <LatestProjects />

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
    </div>
  );
};

export default HomePage;
