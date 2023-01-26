import fs from 'fs';
import matter from 'gray-matter';

export async function getStaticProps() {
  return {
    props: {},
  };
}

function BlogPost() {
  return <div> Blog post</div>;
}

export default BlogPost;
