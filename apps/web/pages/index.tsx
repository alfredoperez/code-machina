import { allPosts } from 'contentlayer-generated';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'ui';

export async function getStaticProps() {
  const posts = allPosts;

  return { props: { posts } };
}

function PostCard(post) {
  return (
    <div className="mb-6">
      <time dateTime={post.date} className="block text-sm text-slate-600">
        {post.date}
      </time>
      <h2 className="text-lg">
        <Link href={post.url}>
          <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
        </Link>
      </h2>
    </div>
  );
}

export default function Web({ posts }) {
  return (
    <>
      <Head>
        <title>Web App</title>
      </Head>

      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="flex items-center space-x-3">
          <h1 className="text-lg font-bold">Web</h1>
          <Button />
          <button className="btn btn-primary">yes</button>
        </div>
      </div>
      <div className="mx-auto max-w-2xl py-16 text-center">
        <Head>
          <title>Contentlayer Blog Example</title>
        </Head>

        <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>

        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </>
  );
}
