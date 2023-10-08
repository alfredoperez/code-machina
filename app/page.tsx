import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allDocuments } from 'contentlayer/generated'
import Main from './main'

export default async function Page() {
  const sortedPosts = sortPosts(allDocuments)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
