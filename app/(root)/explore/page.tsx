import PostCard from "@/components/post-card"
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

        {/* Blogs Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts?.map((post) => (
            <PostCard key={post.post.id} title={post.post.title} content={post.post.content} imageUrl={post.post.imageUrl} authorName={post.user?.name ?? "Unknown"} slug={post.post.slug} />
          ))}

        </div>
      </div>
    </section>
  )
}
