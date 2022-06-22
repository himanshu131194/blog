import { Tag, Post } from '@/types/index';

import HomePage from '@/page-components/home';

import { HOME_POSTS_DATABASE_ID } from 'src/constant';

import { getPostsAndTags } from '@/src/apis/index';

import { generateSiteMap } from 'src/libs/sitemap';

type Props = {
  tags: Tag[];
  posts: Post[];
};

export default function Index({ tags, posts }: Props) {
  return (
    <HomePage
      tags={tags} //
      posts={posts}
    />
  );
}

export async function getStaticProps() {
  const postsDatabaseId = HOME_POSTS_DATABASE_ID;

  const { tags, posts } = await getPostsAndTags(postsDatabaseId);

  await generateSiteMap(posts);

  return {
    props: {
      tags,
      posts,
    },
  };
}
