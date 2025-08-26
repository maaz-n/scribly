import PostsList from "@/components/posts-list"
import { getPosts } from "@/server/post"

export default async function ExplorePage() {
  const posts = await getPosts()

  return (
    <section className="min-h-screen py-16 px-6 pt-50 lg:pt-60 bg-background">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground">
            Explore <span className="text-primary">Blogs</span>
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Discover insightful blogs from different authors and topics.  
            Dive into technology, travel, health, business, and more.
          </p>
        </div>

        <PostsList posts={posts} />
      </div>
    </section>
  )
}
