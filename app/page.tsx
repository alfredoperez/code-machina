import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allDocs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allDocs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
