import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const file = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontMatter } = matter(file);

    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

function BlogHome({ posts }) {
  console.log('all posts ', posts);

  return (
    <div>
      <h1>This is the first blog page</h1>
      <p>
        {posts.map(({ slug, frontMatter }) => (
          <div className='post' key={slug}>
            <Link href={`/blog/${slug}`}>
              <a>
                <Image
                  width={650}
                  height={340}
                  alt={frontMatter.title}
                  src={`/${frontMatter.socialImage}`}
                ></Image>
                <h1>{frontMatter.title}</h1>
              </a>
            </Link>
          </div>
        ))}
      </p>
    </div>
  );
}

export default BlogHome;
