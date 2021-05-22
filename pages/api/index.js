import nc from 'next-connect';

const handler = nc()
  .get((req, res) => {
    res.send({ message: 'api index :: GET' });
  })
  .post((req, res) => {
    res.send({ message: 'api index :: POST' });
  });

export default handler;
