import PostsList from "@/components/posts-list"
import { getPosts } from "@/server/post"

export default async function ExplorePage() {

  const posts = await getPosts()
  

  return (
    <section className="min-h-screen pt-50 lg:pt-60 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Explore Blogs
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover insightful blogs from different authors and topics.  
            Dive into technology, travel, health, business, and more.
          </p>
        </div>

          <PostsList posts={posts}/>
      </div>
    </section>
  )
}
