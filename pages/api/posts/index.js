import nc from 'next-connect';

const posts = require('../../../src/data/postData');

const hanlder = nc()
  .get((req, res) => {
    res.send(posts);
  })
  .post((req, res) => {
    const { id, title, content } = req.query;
    const post = {
      ...req.body,
      id: new Date().getTime(),
    };
    posts.push(post);
    res.send(post);
  });

export default hanlder;
