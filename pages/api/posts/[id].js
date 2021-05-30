import nc from 'next-connect';

const posts = require('../../../src/data/postData');

const getPost = (id) => posts.find((post) => post.id === parseInt(id));
const getIndex = (id) => posts.findIndex((post) => post.id === parseInt(id));

const hanlder = nc()
  .get((req, res) => {
    const { id } = req.query;
    const post = getPost(id);
    if (post) {
      res.send(post);
    } else {
      res.status(404);
      res.end('No post found!');
      return;
    }
  })
  .patch((req, res) => {
    const { id } = req.query;
    const updates = req.body;
    const index = getIndex(id);

    if (index >= 0) {
      const post = getPost(id);
      const updatedPost = { ...post, ...updates };
      posts[index] = updatedPost;
      res.send(updatedPost);
    } else {
      res.status(404);
      res.end('No post found!');
      return;
    }
  })
  .delete((req, res) => {
    const { id } = req.query;
    const index = getIndex(id);
    if (index >= 0) {
      posts.splice(index, 1);
      res.send(posts);
    } else {
      res.status(404);
      res.end('No post found!');
      return;
    }
  });

export default hanlder;
